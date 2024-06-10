import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, ScrollView, Alert, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const AddNewEmployee = () => {
    const navigation = useNavigation();
    const [employeeId, setEmployeeId] = useState(0);
    const [employeeName, setEmployeeName] = useState('');
    const [designation, setDesignation] = useState('');
    const [salary, setSalary] = useState('');
    const [joinDate, setJoinDate] = useState('');
    const [birthDay, setBirthDay] = useState('');
    const [activeEmployee, setActiveEmployee] = useState(true);
    const [number, setNumber] = useState(0);
    const [address, setAddress] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async () => {
        if (!employeeId || !employeeName || !designation || !salary || !joinDate || !birthDay || !number || !address) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }
        setLoading(true);
        try {
            const AddNewEmployee = {
                employeeId,
                employeeName,
                designation,
                salary,
                joinDate,
                birthDay,
                activeEmployee,
                number,
                address,
            };
            const response = await fetch('http://192.168.0.62:8080/saveEmployee', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(AddNewEmployee),
            });

            console.log(response);
            clearFormFields();
            Alert.alert("Employee Created");
        } catch (error) {
            console.error('Failed to add employee', error);
            Alert.alert('Error', 'Failed to add employee. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    const clearFormFields = () => {
        setEmployeeId(0);
        setEmployeeName('');
        setDesignation('');
        setSalary('');
        setJoinDate('');
        setBirthDay('');
        setActiveEmployee(true);
        setNumber(0);
        setAddress('');
    };

    return (
        <ScrollView className=" overflow-y-auto h-[100vh]">
            <View style={styles.header} className="bg-gray-700 px-5">
                <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle-outline" size={34} color="white" />
                <Text style={styles.headerText} className="text-white">
                    <AntDesign name="adduser" size={24} color="white" /> Add New Employee
                </Text>
            </View>
            <ScrollView className="px-5">
                <Text style={styles.label}>Employee ID :</Text>
                <TextInput
                    style={styles.input}
                    value={employeeId.toString()}
                    onChangeText={(text) => setEmployeeId(parseInt(text))}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Employee Name :</Text>
                <TextInput
                    style={styles.input}
                    value={employeeName}
                    onChangeText={setEmployeeName}
                />
                <Text style={styles.label}>Designation :</Text>
                <TextInput
                    style={styles.input}
                    value={designation}
                    onChangeText={setDesignation}
                />
                <Text style={styles.label}>Salary :</Text>
                <TextInput
                    style={styles.input}
                    value={salary}
                    onChangeText={setSalary}
                    keyboardType="numeric"
                />
                <Text style={styles.label}>Join Date (YYYY-MM-DD) :</Text>
                <TextInput
                    style={styles.input}
                    value={joinDate}
                    onChangeText={setJoinDate}
                />
                <Text style={styles.label}>Date of Birth (YYYY-MM-DD) :</Text>
                <TextInput
                    style={styles.input}
                    value={birthDay}
                    onChangeText={setBirthDay}
                />
                <Text style={styles.label}>Phone Number :</Text>
                <TextInput
                    style={styles.input}
                    value={number.toString()}
                    onChangeText={(text) => setNumber(parseInt(text))}
                    keyboardType="phone-pad"
                />
                <Text style={styles.label}>Address :</Text>
                <TextInput
                    style={styles.input}
                    value={address}
                    onChangeText={setAddress}
                />
                <View className="flex-row space-x-4 justify-between pr-3 pb-1">
                    <Text style={styles.label}>Active Employee :</Text>
                    <Switch
                        value={activeEmployee}
                        onValueChange={setActiveEmployee}
                        trackColor={{ true: '#3fc2896c', false: '#ccc' }}
                        thumbColor={activeEmployee ? '#3FC28A' : '#f4f3f4'}
                        style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                    />
                </View>
                {loading ? (
                    <View className=" bg-gray-700 rounded-lg p-1 mt-3">
                        <ActivityIndicator size="large" color="#fff" />
                    </View>
                ) : (
                    <TouchableOpacity className="p-3 mt-3 rounded-lg bg-gray-700" onPress={handleSubmit}>
                        <Text className="text-center text-white text-[16px] font-medium">Submit</Text>
                    </TouchableOpacity>
                )}
            </ScrollView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        // marginTop: 25,
        paddingTop: 35,
        paddingBottom: 10
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 30,
    },
    label: {
        marginTop: 8,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        marginVertical: 5,
        borderRadius: 10,
    },
});

export default AddNewEmployee;