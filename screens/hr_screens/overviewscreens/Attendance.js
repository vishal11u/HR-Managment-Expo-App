import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Modal, StyleSheet, Image } from 'react-native';
import moment from 'moment';

const Attendance = () => {
  const employees = [
    { id: 1, name: 'Employee 1', designation: 'Developer', attendance: 'present', image: 'https://via.placeholder.com/100' },
    { id: 2, name: 'Employee 2', designation: 'Designer', attendance: 'half-day', image: 'https://via.placeholder.com/100' },
    { id: 3, name: 'Employee 3', designation: 'Manager', attendance: 'absent', image: 'https://via.placeholder.com/100' },
  ];

  const [showHistoryModal, setShowHistoryModal] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState('January');
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const toggleHistoryModal = (employee) => {
    setSelectedEmployee(employee);
    setShowHistoryModal(!showHistoryModal);
  };

  const handleMonthPress = (month) => {
    setSelectedMonth(month);
  };

  const getDaysInMonth = (month) => {
    const year = moment().year();
    const monthNumber = moment().month(month).format('MM');
    return moment(`${year}-${monthNumber}-01`).daysInMonth();
  };

  const renderCalendarDays = (month) => {
    const daysInMonth = getDaysInMonth(month);
    return [...Array(daysInMonth).keys()].map(day => (
      <View key={day} style={[styles.daySquare, { backgroundColor: getStatusColor(['present', 'half-day', 'absent'][Math.floor(Math.random() * 3)]) }]}>
        <Text style={styles.dayText}>{day + 1}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Employee Attendance</Text>
      <ScrollView style={styles.employeeList}>
        {employees.map(employee => (
          <View key={employee.id} style={styles.employeeCard}>
            <Image source={{ uri: employee.image }} style={styles.employeeImage} />
            <View style={styles.employeeInfo}>
              <Text style={styles.employeeName}>{employee.name}</Text>
              <Text style={styles.employeeDesignation}>{employee.designation}</Text>
            </View>
            <TouchableOpacity style={styles.historyButton} onPress={() => toggleHistoryModal(employee)}>
              <Text style={styles.historyButtonText}>History</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
      <Modal
        visible={showHistoryModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => toggleHistoryModal(null)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.historyHeader}>History</Text>
          {selectedEmployee && (
            <>
              <Text style={styles.employeeHistoryName}>{selectedEmployee.name}</Text>
              <ScrollView horizontal style={styles.monthScroll}>
                {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(month => (
                  <TouchableOpacity key={month} style={[styles.monthButton, selectedMonth === month && styles.selectedMonthButton]} onPress={() => handleMonthPress(month)}>
                    <Text style={[styles.monthButtonText, selectedMonth === month && styles.selectedMonthButtonText]}>{month}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
              <View style={styles.calendarContainer}>
                {renderCalendarDays(selectedMonth)}
              </View>
            </>
          )}
        </View>
      </Modal>
    </View>
  );
};

const getStatusColor = (status) => {
  switch (status) {
    case 'present':
      return '#4CAF50';
    case 'half-day':
      return '#FFC107';
    case 'absent':
      return '#F44336';
    default:
      return 'gray';
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  employeeList: {
    marginBottom: 20,
  },
  employeeCard: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  employeeImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 15,
  },
  employeeInfo: {
    flex: 1,
  },
  employeeName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  employeeDesignation: {
    fontSize: 14,
    color: '#666',
  },
  historyButton: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
  historyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    marginTop: 50,
  },
  historyHeader: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  employeeHistoryName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  monthScroll: {
    marginBottom: 20,
  },
  monthButton: {
    marginRight: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  selectedMonthButton: {
    borderBottomWidth: 2,
    borderBottomColor: '#007bff',
  },
  monthButtonText: {
    fontSize: 16,
    color: '#333',
  },
  selectedMonthButtonText: {
    color: '#007bff',
    fontWeight: 'bold',
  },
  calendarContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 5,
  },
  daySquare: {
    width: '13%', // Adjusted to fit 7 columns with spacing
    aspectRatio: 1, // Make square
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
    borderRadius: 5,
    margin: 2,
    backgroundColor: '#e0e0e0', // Default background color
  },
  dayText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default Attendance;
