import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Switch, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

const NewEmployee = () => {
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

    const handleSubmit = async () => {
        if (!employeeId || !employeeName || !designation || !salary || !joinDate || !birthDay || !number || !address) {
            Alert.alert('Error', 'Please fill out all fields.');
            return;
        }

        try {
            const newEmployee = {
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
                body: JSON.stringify(newEmployee),
            });
            console.log(response);

            // if (response.ok) {
            clearFormFields();
            Alert.alert("Employee Created");
            // } else {
            //     Alert.alert('Error', 'Failed to add employee. Please try again later.');
            // }
        } catch (error) {
            console.error('Failed to add employee', error);
            Alert.alert('Error', 'Failed to add employee. Please try again later.');
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
        <ScrollView style={styles.container} className="bg-white overflow-y-auto">
            <View style={styles.header}>
                <Ionicons onPress={() => navigation.goBack()} name="arrow-back-circle-outline" size={34} color="black" />
                <Text style={styles.headerText}>
                    <AntDesign name="adduser" size={24} color="black" /> Add New Employee
                </Text>
            </View>
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
            <View className="flex-row space-x-4 justify-between pr-3">
                <Text style={styles.label}>Active Employee :</Text>
                <Switch
                    value={activeEmployee}
                    onValueChange={setActiveEmployee}
                    trackColor={{ true: '#3fc2896c', false: '#ccc' }}
                    thumbColor={activeEmployee ? '#3FC28A' : '#f4f3f4'}
                    style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
                />
            </View>
            <Button title="Submit"
                onPress={handleSubmit}
            />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        marginTop: 0,
        marginBottom: 20
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5,
        marginTop: 10,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    label: {
        marginTop: 10,
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

export default NewEmployee;