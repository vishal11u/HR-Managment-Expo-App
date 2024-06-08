import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import StartingScreen from './screens/employee_screens/StartingScreen';
import EmployeeLogin from './screens/loginscreens/EmployeeLogin';
import ManagerLogin from './screens/loginscreens/ManagerLogin';
import UserProfile from './screens/employee_screens/profile/UserProfile';
import History from './screens/employee_screens/drawer_pages/History';
import CustomDrawerContent from './screens/employee_screens/drawer_pages/CustomDrawerContent';
import DailyTask from './screens/employee_screens/tab_screens/DailyTask';
import Notification from './screens/employee_screens/tab_screens/Notification';
import TimeOff from './screens/employee_screens/tab_screens/TimeOff';
import Send_Timeoff_Form from './screens/employee_screens/timeoff_section/Send_Timeoff_Form';
import PaySlip from './screens/employee_screens/profile/PaySlip';
import ProfileDetails from './screens/employee_screens/profile/ProfileDetails';
import ProfileSetting from './screens/employee_screens/profile/ProfileSetting';
import EmployeDataAnalyze from './screens/employee_screens/analytics/EmployeDataAnalyze';
import ManagerHomeScreen from './screens/hr_screens/ManagerHomeScreen';
import store from './auth/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Provider, useSelector, useDispatch } from 'react-redux';
import EmployeeList from './screens/hr_screens/drawescreens/EmployeeList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const roles = {
    employee: 'employee',
    manager: 'manager',
    none: 'none',
};

function HomeScreen({ navigation }) {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="StartingScreen" component={StartingScreen} />
        </Stack.Navigator>
    );
}

function TabNavigator({ navigation }) {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'Profile') {
                        iconName = focused ? 'person' : 'person-outline';
                    } else if (route.name === 'Time Off') {
                        iconName = focused ? 'time' : 'time-outline';
                    } else if (route.name === 'Task') {
                        iconName = focused ? 'list' : 'list-outline';
                    }

                    return (
                        <View style={[styles.iconContainer, focused && styles.focusedIcon]}>
                            <Ionicons name={iconName} size={size} color={focused ? 'white' : color} />
                        </View>
                    );
                },
                tabBarActiveTintColor: '#00a2e4',
                tabBarInactiveTintColor: 'gray',
                tabBarStyle: styles.tabBar,
                headerShown: false,
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
                        <Ionicons name="menu" size={30} color="black" style={{ marginLeft: 10 }} />
                    </TouchableOpacity>
                ),
            })}
        >
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Task" component={DailyTask} />
            <Tab.Screen name="Time Off" component={TimeOff} />
            <Tab.Screen name="Profile" component={UserProfile} />
        </Tab.Navigator>
    );
}

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#00a2e4',
                drawerInactiveTintColor: 'black',
                drawerLabelStyle: {
                    marginLeft: -18,
                },
                drawerItemStyle: {
                    marginVertical: 0,
                },
            }}
        >
            <Drawer.Screen
                name="Home Screen"
                component={TabNavigator}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons name="grid" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Attendance"
                component={History}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons name="calendar" size={size} color={color} />
                    ),
                }}
            />
            <Drawer.Screen
                name="Analytics"
                component={EmployeDataAnalyze}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons name="analytics" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

function ManagerDrawer() {
    return (
        <Drawer.Navigator
            initialRouteName="Home"
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveTintColor: '#00a2e4',
                drawerInactiveTintColor: 'black',
                drawerLabelStyle: {
                    marginLeft: -18,
                },
                drawerItemStyle: {
                    marginVertical: 0,
                },
            }}
        >
            <Drawer.Screen
                name="Employee List"
                component={EmployeeList}
                options={{
                    drawerIcon: ({ focused, color, size }) => (
                        <Ionicons name="grid" size={size} color={color} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

function EmployeeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="Send_Timeoff_Form" component={Send_Timeoff_Form} />
            <Stack.Screen name="PaySlip" component={PaySlip} />
            <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
            <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
        </Stack.Navigator>
    );
}

function ManagerStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ManagerHome" component={ManagerHomeScreen} />
            {/* <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} /> */}
        </Stack.Navigator>
    );
}

function AppNavigator() {
    const [role, setRole] = React.useState(roles.none);
    const { isAuthenticated, loading, isHydrated } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    React.useEffect(() => {
        if (isAuthenticated) {
            AsyncStorage.setItem('isAuthenticated', 'true');
            AsyncStorage.setItem('role', role);
        } else {
            AsyncStorage.removeItem('isAuthenticated');
            AsyncStorage.removeItem('role');
        }
    }, [isAuthenticated, role]);

    if (!isHydrated) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text className="text-[16px] font-medium">Loading...</Text>
            </View>
        );
    }

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                {!isAuthenticated ? (
                    <>
                        <Stack.Screen name="EmployeeLogin">
                            {props => <EmployeeLogin {...props} setRole={setRole} />}
                        </Stack.Screen>
                        <Stack.Screen name="ManagerLogin">
                            {props => <ManagerLogin {...props} setRole={setRole} />}
                        </Stack.Screen>
                    </>
                ) : (
                    <>
                        {/* {role === roles.employee && (
                            <Stack.Screen name="EmployeeStackNavigator" component={EmployeeStackNavigator} />
                        )} */}
                        {/* {role === roles.manager ? ( */}
                        <Stack.Screen name="ManagerStackNavigator" component={ManagerStackNavigator} />
                        {/* ) : (
                            <Stack.Screen name="EmployeeStackNavigator" component={EmployeeStackNavigator} />
                        )} */}
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return (
        <Provider store={store}>
            <AppNavigator />
        </Provider>
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: 'white',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        borderRadius: 0,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
        paddingBottom: 3
    },
    customTabBarButton: {
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    customTabBarButtonView: {
        width: 70,
        height: 70,
        borderRadius: 35,
    },
    iconContainer: {
        padding: 5,
        borderRadius: 15,
    },
    focusedIcon: {
        backgroundColor: '#00a2e4',
    },
    shadow: {
        shadowColor: '#7F5DF0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
});
