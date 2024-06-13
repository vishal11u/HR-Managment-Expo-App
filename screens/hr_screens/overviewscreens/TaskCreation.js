import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const TaskCreation = () => {
    const navigation = useNavigation();
    const [type, setType] = useState('');
    const [reason, setReason] = useState('');
    const [isFullDay, setIsFullDay] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [halfDayTime, setHalfDayTime] = useState('');
    const [selectedField, setSelectedField] = useState('');
    const [showDateTimePicker, setShowDateTimePicker] = useState(false);
    const [mode, setMode] = useState('date');

    const handleSend = () => {
        const requestData = {
            type,
            reason,
            isFullDay,
            startDate,
            endDate,
            halfDayTime
        };

        console.log(requestData);
        setType("");
        setReason("");
        setIsFullDay("");
        setStartDate("");
        setEndDate("");
        setHalfDayTime("");

        navigation.goBack();
    };

    const openDateTimePicker = (field, mode) => {
        setSelectedField(field);
        setMode(mode);
        setShowDateTimePicker(true);
    };

    const onChange = (event, selectedDate) => {
        setShowDateTimePicker(false);
        if (selectedDate) {
            if (selectedField === 'startDate') {
                setStartDate(selectedDate.toISOString().split('T')[0]);
            } else if (selectedField === 'endDate') {
                setEndDate(selectedDate.toISOString().split('T')[0]);
            } else if (selectedField === 'halfDayTime') {
                setHalfDayTime(selectedDate.toISOString());
            }
        }
    };

    return (
        <View style={styles.container} className="">
            <View style={styles.header} className="bg-gray-700 pt-11 pb-4 px-4">
                <TouchableOpacity className="bg-white" style={styles.backButton} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Task Creation</Text>
            </View>
            <View className="px-4">
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Select Team</Text>
                    <View style={styles.pickerWrapper}>
                        <RNPickerSelect
                            onValueChange={(value) => setType(value)}
                            items={[
                                { label: 'DesignTeam', value: 'DesignTeam' },
                                { label: 'DevTeam', value: 'DevTeam' },
                                { label: 'OpsTeam', value: 'OpsTeam' },
                                { label: 'QATeam', value: 'QATeam' },
                                { label: 'BackendTeam', value: 'BackendTeam' },
                            ]}
                            style={pickerSelectStyles}
                        />
                    </View>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Task Details</Text>
                    <TextInput
                        multiline
                        numberOfLines={8}
                        value={reason}
                        onChangeText={setReason}
                        style={styles.textInput}
                    />
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>From Time</Text>
                    <TouchableOpacity onPress={() => openDateTimePicker('halfDayTime', 'time')} style={styles.dateTimeButton}>
                        <Text>{halfDayTime ? new Date(halfDayTime).toLocaleTimeString() : 'Select Time'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>To Time</Text>
                    <TouchableOpacity onPress={() => openDateTimePicker('halfDayTime', 'time')} style={styles.dateTimeButton}>
                        <Text>{halfDayTime ? new Date(halfDayTime).toLocaleTimeString() : 'Select Time'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Date</Text>
                    <TouchableOpacity onPress={() => openDateTimePicker('startDate', 'date')} style={styles.dateTimeButton}>
                        <Text>{startDate ? startDate : 'Select Date'}</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
                    <Text style={styles.sendButtonText}>Submit</Text>
                </TouchableOpacity>
                {showDateTimePicker && (
                    <DateTimePicker
                        value={new Date()}
                        mode={mode}
                        display="default"
                        onChange={onChange}
                    />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },
    backButton: {
        width: 28,
        borderRadius: 5,
        padding: 4
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        width: '88%',
        textAlign: 'center',
        color: "#fff"
    },
    formGroup: {
        paddingVertical: 6,
        marginBottom: 5
    },
    label: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 5
    },
    textInput: {
        height: 150,
        // borderWidth: 1,
        borderColor: 'gray',
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 10
    },
    dateTimeButton: {
        // borderWidth: 1,
        padding: 15,
        borderRadius: 10,
        backgroundColor: '#fff'
    },
    sendButton: {
        backgroundColor: '#00a2e4',
        padding: 12,
        borderRadius: 10,
        marginTop: 20
    },
    sendButtonText: {
        color: 'white',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18
    },
    pickerWrapper: {
        // borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 10,
        backgroundColor: '#fff',
        overflow: 'hidden'
    }
});

const pickerSelectStyles = StyleSheet.create({
    inputIOS: {
        height: 50,
        paddingHorizontal: 10,
    },
    inputAndroid: {
        height: 50,
        paddingHorizontal: 10,
    }
});

export default TaskCreation;
