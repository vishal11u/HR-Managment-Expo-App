import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Platform, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNPickerSelect from 'react-native-picker-select';

const Send_Timeoff_Form = () => {
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
        <View style={styles.container} className="pt-12 px-4 bg-blue-50">
            <View style={styles.header}>
                <TouchableOpacity className="bg-blue-400" style={styles.backButton} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Time Off Request</Text>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Type</Text>
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        onValueChange={(value) => setType(value)}
                        items={[
                            { label: 'Vacation', value: 'Vacation' },
                            { label: 'Sick Leave', value: 'Sick Leave' },
                            { label: 'Maternity Leave', value: 'Maternity Leave' },
                            { label: 'Paternity Leave', value: 'Paternity Leave' },
                            { label: 'Other', value: 'Other' },
                        ]}
                        style={pickerSelectStyles}
                    />
                </View>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Reason</Text>
                <TextInput
                    multiline
                    numberOfLines={8}
                    value={reason}
                    onChangeText={setReason}
                    style={styles.textInput}
                />
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>Shift Type</Text>
                <View style={styles.pickerWrapper}>
                    <RNPickerSelect
                        onValueChange={(value) => setIsFullDay(value)}
                        items={[
                            { label: 'Full Day', value: 'Full Day' },
                            { label: 'Half Day', value: 'Half Day' },
                            { label: 'Holiday', value: 'Holiday' },
                        ]}
                        style={pickerSelectStyles}
                    />
                </View>
            </View>
            {isFullDay === 'Half Day' && (
                <View style={styles.formGroup}>
                    <Text style={styles.label}>Select Time</Text>
                    <TouchableOpacity onPress={() => openDateTimePicker('halfDayTime', 'time')} style={styles.dateTimeButton}>
                        <Text>{halfDayTime ? new Date(halfDayTime).toLocaleTimeString() : 'Select Time'}</Text>
                    </TouchableOpacity>
                </View>
            )}
            <View style={styles.formGroup}>
                <Text style={styles.label}>Start Date</Text>
                <TouchableOpacity onPress={() => openDateTimePicker('startDate', 'date')} style={styles.dateTimeButton}>
                    <Text>{startDate ? startDate : 'Select Date'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.formGroup}>
                <Text style={styles.label}>End Date</Text>
                <TouchableOpacity onPress={() => openDateTimePicker('endDate', 'date')} style={styles.dateTimeButton}>
                    <Text>{endDate ? endDate : 'Select Date'}</Text>
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
        textAlign: 'center'
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

export default Send_Timeoff_Form;
