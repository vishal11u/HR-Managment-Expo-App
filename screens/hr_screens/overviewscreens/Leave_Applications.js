import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { leaveApplications } from '../../../services/hrservices/LeaveApplications';

const Leave_Applications = () => {
    const navigation = useNavigation();
    const [filter, setFilter] = useState('Waiting');

    const filteredTasks = leaveApplications.filter(task =>
        filter === 'Waiting' ? true : task.application === filter
    );

    return (
        <View className="py-4 bg-gray-800 h-[150vh]">
            <View className="flex-row items-center px-3 pb-5 pt-10">
                <TouchableOpacity className="p-1 bg-white w-7 rounded-md" onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="black" />
                </TouchableOpacity>
                <Text className="text-center w-[89%] text-white font-semibold text-[18px]">Leave Application</Text>
            </View>
            <ScrollView className="bg-white h-[100vh] px-3">
                <View className="flex-row items-center justify-between px-1 pt-5 pb-3">
                    {['Waiting', 'Approved', 'Cancelled'].map(status => (
                        <TouchableOpacity
                            key={status}
                            onPress={() => setFilter(status)}
                            className={`rounded-2xl px-7 py-1.5 ${filter === status ? 'bg-gray-700' : 'bg-gray-100'}`}
                        >
                            <Text className={`${filter === status ? 'text-white' : 'text-gray-500'} font-medium`}>{status}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
                {filteredTasks.map((list) => (
                    <View style={styles.leaveApplicationItem} key={list.id}>
                        <View style={styles.leaveApplicationInfo}>
                            <Image
                                source={{ uri: list.img }}
                                style={styles.leaveApplicationImage}
                            />
                            <View style={styles.leaveApplicationText}>
                                <Text style={styles.leaveApplicantName}>{list.name}</Text>
                                <Text style={styles.leaveDates}>{list.date}</Text>
                                <Text style={styles.leaveType}>{list.type}</Text>
                            </View>
                        </View>
                        <View style={styles.leaveActions}>
                            <TouchableOpacity style={styles.cancelButton}>
                                <Text style={styles.cancelButtonText}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.approveButton}>
                                <Text style={styles.approveButtonText}>Approve</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View >
    )
}

export default Leave_Applications;

const styles = StyleSheet.create({
    leaveApplicationItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 8,
        marginTop: 8,
    },
    leaveApplicationInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    leaveApplicationImage: {
        height: 64,
        width: 64,
        borderRadius: 32,
    },
    leaveApplicationText: {
        marginLeft: 8,
        justifyContent: 'center',
        gap: 2
    },
    leaveApplicantName: {
        fontSize: 16,
        fontWeight: '600',
    },
    leaveDates: {
        fontSize: 12,
        color: '#A0AEC0',
        fontWeight: '500',
    },
    leaveType: {
        fontSize: 12,
        fontWeight: '500',
        color: '#E53E3E',
    },
    leaveActions: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cancelButton: {
        backgroundColor: '#FED7D7',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 30,
        marginBottom: 8,
    },
    cancelButtonText: {
        color: '#E53E3E',
        fontSize: 13,
        fontWeight: '500',
    },
    approveButton: {
        backgroundColor: '#C6F6D5',
        borderRadius: 20,
        paddingVertical: 6,
        paddingHorizontal: 27,
    },
    approveButtonText: {
        color: '#38A169',
        fontSize: 13,
        fontWeight: '500',
    },
})