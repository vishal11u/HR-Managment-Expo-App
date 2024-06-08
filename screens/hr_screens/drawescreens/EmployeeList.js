import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { employees } from '../../../services/hrservices/EmployeeListObj';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const EmployeeList = () => {
    const navigation = useNavigation();
    const [data, setData] = useState(employees);

    const handleDelete = (item) => {
        Alert.alert(
            'Confirm Delete',
            `Are you sure you want to delete ${item.name}?`,
            [
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
                { text: 'Delete', onPress: () => deleteEmployee(item), style: 'destructive' }
            ],
            {
                cancelable: false,
                style: 'destructive',
                icon: 'trash',
                iconColor: 'red',
                titleStyle: { color: 'red' },
                messageStyle: { color: 'black' }
            }
        );
    };


    const deleteEmployee = (itemToDelete) => {
        const updatedData = data.filter(item => item.id !== itemToDelete.id);
        setData(updatedData);
    };

    const renderItem = ({ item }) => (
        <ScrollView className="">
            <View style={styles.itemContainer}>
                <Image source={{ uri: item.imageUrl }} style={styles.image} />
                <View style={styles.infoContainer}>
                    <Text style={styles.name}>{item.name}</Text>
                    <Text style={styles.designation}>{item.designation} - {item.position}</Text>
                </View>
                <TouchableOpacity>
                    <Menu>
                        <MenuTrigger >
                            <Ionicons name="ellipsis-horizontal" size={25} color="#333" />
                        </MenuTrigger>
                        <MenuOptions customStyles={menuStyles.options}>
                            <MenuOption onSelect={() => alert(`Edit ${item.name}`)}>
                                <TouchableOpacity style={menuStyles.option}>
                                    <Ionicons name="create-outline" size={20} color="#4F8EF7" />
                                    <Text style={menuStyles.text}>Edit</Text>
                                </TouchableOpacity>
                            </MenuOption>
                            <MenuOption >
                                <TouchableOpacity style={menuStyles.option} onPress={() => handleDelete(item)}>
                                    <Ionicons name="trash-outline" size={20} color="#F75353" />
                                    <Text style={menuStyles.text}>Delete</Text>
                                </TouchableOpacity>
                            </MenuOption>
                            <MenuOption onSelect={() => alert(`View Details for ${item.name}`)}>
                                <TouchableOpacity style={menuStyles.option}>
                                    <Ionicons name="eye-outline" size={20} color="#6C7A89" />
                                    <Text style={menuStyles.text}>View Details</Text>
                                </TouchableOpacity>
                            </MenuOption>
                        </MenuOptions>
                    </Menu>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );

    return (
        <MenuProvider style={styles.container} className="bg-blue-50">
            <View className="flex-row items-center px-3 pb-3 pt-2">
                <TouchableOpacity className="p-1 bg-blue-400 w-7 rounded-md" onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="white" />
                </TouchableOpacity>
                <Text className="text-center w-[85%] font-semibold text-[18px]">Employees List</Text>
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </MenuProvider>
    );
};

export default EmployeeList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // marginTop: 50,
        paddingTop: 45
    },
    itemContainer: {
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        backgroundColor: '#fff',
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
        marginTop: 0,
        marginHorizontal: 11,
        borderRadius: 14,
        marginBottom: 10
    },
    image: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 10,
    },
    infoContainer: {
        flex: 1,
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
    },
    designation: {
        fontSize: 14,
        color: '#666',
    }
});

const menuStyles = {
    options: {
        padding: 5,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    text: {
        marginLeft: 10,
        fontSize: 16,
        color: '#333',
    },
};