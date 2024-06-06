import * as React from 'react';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import StartingScreen from './screens/StartingScreen';
import AutorityScreen from './screens/AutorityScreen';
import EmployeeLogin from './screens/loginscreens/EmployeeLogin';
import ManagerLogin from './screens/loginscreens/ManagerLogin';
import UserProfile from './screens/profile/UserProfile';
import History from './screens/drawer_pages/History';
import CustomDrawerContent from './screens/drawer_pages/CustomDrawerContent';
import DailyTask from './screens/tab_screens/DailyTask';
import Notification from './screens/tab_screens/Notification';
// import NewEmployee from './screens/add_new_employee/NewEmployee';
import TimeOff from './screens/tab_screens/TimeOff';
import Send_Timeoff_Form from './screens/timeoff_section/Send_Timeoff_Form';
import PaySlip from './screens/profile/PaySlip';
import ProfileDetails from './screens/profile/ProfileDetails';
import ProfileSetting from './screens/profile/ProfileSetting';
import EmployeDataAnalyze from './screens/analytics/EmployeDataAnalyze';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

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
          // fontSize: 16,
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

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {/* <Stack.Screen name="AutorityScreen" component={AutorityScreen} /> */}
        <Stack.Screen name="EmployeeLogin" component={EmployeeLogin} />
        {/* <Stack.Screen name="ManagerLogin" component={ManagerLogin} /> */}
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        <Stack.Screen name="Notification" component={Notification} />
        <Stack.Screen name="Send_Timeoff_Form" component={Send_Timeoff_Form} />
        <Stack.Screen name="PaySlip" component={PaySlip} />
        <Stack.Screen name="ProfileDetails" component={ProfileDetails} />
        <Stack.Screen name="ProfileSetting" component={ProfileSetting} />
      </Stack.Navigator>
    </NavigationContainer>
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
    // top: -20,
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
    // backgroundColor: 'tomato',
    // borderWidth: 5,
    // borderColor: 'white',
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

export default App;