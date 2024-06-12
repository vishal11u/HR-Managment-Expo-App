import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { initialTasks } from '../../../services/hrservices/ProjectTask';
import { useNavigation } from '@react-navigation/native';

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const getCurrentWeekDates = () => {
    const now = new Date();
    return days.map((_, i) => {
        const day = new Date(now);
        day.setDate(now.getDate() - now.getDay() + i);
        return day.getDate();
    });
};

const getFormattedDate = () => {
    const now = new Date();
    const options = { month: 'long', day: '2-digit', year: 'numeric' };
    return now.toLocaleDateString('en-US', options);
};

const ProjectTasks = () => {
    const navigation = useNavigation();
    const weekDates = getCurrentWeekDates();
    const [tasks, setTasks] = useState(initialTasks);
    const [selectedDate, setSelectedDate] = useState('');

    const handleDateSelection = (day) => {
        setSelectedDate(day);
        const filteredTasks = day ? initialTasks.filter(task => task.date === day) : initialTasks;
        setTasks(filteredTasks);
    };

    const getDayContainerStyle = (day) => ({
        ...styles.dayContainer,
        borderBottomWidth: selectedDate === day ? 2 : 0,
        borderBottomColor: selectedDate === day ? 'white' : 'transparent',
    });

    const getStatusStyle = (status) => {
        switch (status) {
            case 'Urgent':
                return { color: 'orange' };
            case 'Running':
                return { color: 'green' };
            case 'Pending':
                return { color: 'red' };
            default:
                return { color: '#fff' };
        }
    };

    const getStatusColor = (status) => {
        switch (status) {
            case 'Urgent':
                return 'orange';
            case 'Running':
                return 'green';
            case 'Pending':
                return 'red';
            default:
                return 'gray';
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity className="bg-white rounded-md p-1" onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="black" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Project Tasks</Text>
                <TouchableOpacity onPress={() => alert('Add Task')}>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </View>
            <View style={styles.dateSection}>
                <Text style={styles.monthDateText}>{getFormattedDate()}</Text>
                {/* <Text style={styles.todayDateText}>Today: {weekDates[new Date().getDay()]}</Text> */}
            </View>
            <View style={styles.weekRow}>
                {days.map((day, index) => (
                    <TouchableOpacity
                        key={day}
                        style={getDayContainerStyle(day)}
                        onPress={() => handleDateSelection(day, index)}
                    >
                        <Text style={styles.dayText}>{day}</Text>
                        <Text style={styles.dateText}>{weekDates[index]}</Text>
                    </TouchableOpacity>
                ))}
            </View>
            <ScrollView style={styles.cardsContainer}>
                {tasks.map((task) => (
                    <View key={task.id} style={styles.card} className="border-l-[3px] bordr-[0.2px] border-white">
                        <View className="flex-row items-center pb-2 border-b border-gray-400">
                            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(task.status) }]} />
                            <Text style={[styles.status, getStatusStyle(task.status)]}>{task.status}</Text>
                        </View>
                        <Text style={styles.taskName}>{task.taskName}</Text>
                        <Text style={styles.assignedTeamText}>Assigned to: {task.assignedTeam}</Text>
                        <View style={styles.cardFooter}>
                            <View style={styles.footerItem}>
                                <AntDesign name="clockcircleo" size={15} color="white" />
                                <Text style={styles.timeRange}>{task.timeRange}</Text>
                            </View>
                            <View style={styles.footerItem}>
                                <MaterialIcons name="groups" size={22} color="white" />
                                <Text style={styles.peopleCount}>{task.peopleCount}</Text>
                            </View>
                            <TouchableOpacity onPress={() => alert('Delete Task')}>
                                <MaterialIcons name="delete-outline" size={24} color="white" />
                            </TouchableOpacity>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E1E1E',
        padding: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingTop: 35,
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff',
    },
    dateSection: {
        marginBottom: 10,
    },
    monthDateText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    todayDateText: {
        color: '#fff',
        fontSize: 14,
        marginTop: 5,
    },
    weekRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    dayContainer: {
        alignItems: 'center',
        padding: 10,
    },
    dayText: {
        color: '#fff',
        fontSize: 13,
    },
    dateText: {
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
    },
    cardsContainer: {
        flex: 1,
    },
    card: {
        backgroundColor: '#2E2E2E',
        padding: 15,
        borderRadius: 13,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
    },
    statusIndicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 8,
    },
    status: {
        fontWeight: 'bold',
        color: '#fff',
    },
    taskName: {
        color: '#fff',
        fontSize: 20,
        marginBottom: 2,
        fontWeight: '600',
        marginTop: 5
    },
    assignedTeamText: {
        color: '#fff',
    },
    cardFooter: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 10,
    },
    footerItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    timeRange: {
        marginLeft: 5,
        marginRight: 20,
        color: '#fff',
    },
    peopleCount: {
        marginLeft: 5,
        color: '#fff',
    },
});

export default ProjectTasks;