import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Alert, Image, Modal, TouchableOpacity } from 'react-native';
import { Menu, MenuOptions, MenuOption, MenuTrigger, MenuProvider } from 'react-native-popup-menu';
import { MaterialIcons } from '@expo/vector-icons'; // Import MaterialIcons
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

const PaySlipofEmployee = () => {
    const [employees, setEmployees] = useState([
        { id: '1', name: 'John Doe', salary: 5000, designation: 'Software Engineer', status: 'Paid', image: 'https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/EyvF0jkPg/videoblocks-portrait-of-young-successful-female-employee-asian-woman-entrepreneur-worker-in-busy-office-looks-at-camera-smile_hajoj_fyz_thumbnail-1080_01.png' },
        { id: '2', name: 'Jane Smith', salary: 6000, designation: 'Product Manager', status: 'Pending', image: 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-855.jpg' },
        { id: '3', name: 'Michael Johnson', salary: 5500, designation: 'Designer', status: 'Paid', image: 'https://www.corporatephotographylondon.com/wp-content/uploads/2019/11/HKstrategies-846.jpg' },
    ]);

    const [selectedEmployee, setSelectedEmployee] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const generatePDF = async (employee) => {
        const currentDate = new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
        });

        const htmlContent = `
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { padding: 20px; }
            .header { text-align: center; margin-bottom: 40px; }
            .employee { margin-bottom: 20px; }
            .employee img { width: 100px; border-radius: 50%; }
            .name { font-size: 20px; font-weight: bold; }
            .details { font-size: 16px; margin-bottom: 10px; }
            .footer { margin-top: 40px; }
            .signature { margin-top: 50px; width: 150px; height: 50px; }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-top: 20px;
            }
            th, td {
                border: 1px solid #ddd;
                padding: 8px;
                text-align: left;
            }
            th {
                background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://i.imgur.com/6N6Nctd.png" alt="Company Logo"/>
              <h1>America Pvt. Ltd.</h1>
            </div>
            <hr/>
            <div class="employee">
              <img src="${employee.image}" alt="${employee.name}" height="100" width="120"/>
              <div class="name">${employee.name}</div>
              <div class="details">Designation: ${employee.designation}</div>
              <div class="details">Salary: $${employee.salary}</div>
              <div class="details">Status: ${employee.status}</div>
              <div class="details">Bank Details: ABC Bank, Account Number: 123456789</div>
              <div class="details">Taxes: $${(employee.salary * 0.2).toFixed(2)}</div>
              <div class="details">Net Salary: $${(employee.salary * 0.8).toFixed(2)}</div>
            </div>
            <table>
                <tr>
                    <th>Date</th>
                    <th>Sr No.</th>
                    <th>Name</th>
                    <th>Amount</th>
                    <th>Tax</th>
                    <th>Total Amount</th>
                    <th>Payed Amount</th>
                    <th>Status</th>
                </tr>
                <tr>
                    <td>${currentDate}</td>
                    <td>1</td>
                    <td>${employee.name}</td>
                    <td>$${employee.salary}</td>
                    <td>$${(employee.salary * 0.2).toFixed(2)}</td>
                    <td>$${(employee.salary * 1.2).toFixed(2)}</td>
                    <td>$${employee.salary}</td>
                    <td>${employee.status}</td>
                </tr>
            </table>
            <div class="footer">
              <div class="signature">Signature: <img src="https://pnghq.com/wp-content/uploads/signature-png-images-free-download-png-file.png" height="20" width="70" alt=""/></div>
            </div>
          </div>
        </body>
      </html>
    `;

        try {
            const { uri } = await Print.printToFileAsync({ html: htmlContent });
            await Sharing.shareAsync(uri);
        } catch (error) {
            Alert.alert('Error', 'Failed to generate PDF. Please try again.');
            console.error(error);
        }
    };

    const renderEmployeeItem = ({ item }) => (
        <View style={styles.employeeItem}>
            <Image source={{ uri: item.image }} style={styles.employeeImage} />
            <View style={styles.employeeDetails}>
                <Text style={styles.employeeName}>{item.name}</Text>
                <Text style={styles.employeeDesignation}>{item.designation}</Text>
                <Text style={styles.employeeSalary}>Salary: ${item.salary}</Text>
                <Text style={[styles.employeeStatus, item.status === 'Paid' ? styles.paid : styles.pending]}>
                    {item.status}
                </Text>
            </View>
            <Menu>
                <MenuTrigger customStyles={triggerStyles}>
                    <MaterialIcons name="more-vert" size={24} color="black" />
                </MenuTrigger>
                <MenuOptions>
                    <MenuOption onSelect={() => { setSelectedEmployee(item); setModalVisible(true); }}>
                        <View style={styles.menuOption}>
                            <MaterialIcons name="visibility" size={20} color="black" />
                            <Text style={styles.menuOptionText}>View Salary Slip</Text>
                        </View>
                    </MenuOption>
                    <MenuOption onSelect={() => generatePDF(item)}>
                        <View style={styles.menuOption}>
                            <MaterialIcons name="file-download" size={20} color="black" />
                            <Text style={styles.menuOptionText}>Download Slip</Text>
                        </View>
                    </MenuOption>
                    <MenuOption onSelect={() => generatePDF(item)}>
                        <View style={styles.menuOption}>
                            <MaterialIcons name="summary" size={20} color="black" />
                            <Text style={styles.menuOptionText}>PaySlip Summary</Text>
                        </View>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </View>
    );

    return (
        <MenuProvider>
            <View style={styles.container}>
                <Text style={styles.title}>PaySlip</Text>
                <FlatList
                    style={styles.employeeList}
                    data={employees}
                    renderItem={renderEmployeeItem}
                    keyExtractor={item => item.id}
                />

                {selectedEmployee && (
                    <Modal
                        visible={modalVisible}
                        animationType="slide"
                        onRequestClose={() => setModalVisible(false)}
                    >
                        <View style={styles.modalContainer}>
                            <Text style={styles.modalTitle}>PaySlip</Text>
                            <View style={styles.modalContent}>
                                <Image source={{ uri: selectedEmployee.image }} style={styles.modalImage} />
                                <Text style={styles.modalText}>Name: {selectedEmployee.name}</Text>
                                <Text style={styles.modalText}>Designation: {selectedEmployee.designation}</Text>
                                <Text style={styles.modalText}>Salary: ${selectedEmployee.salary}</Text>
                                <Text style={styles.modalText}>Status: {selectedEmployee.status}</Text>
                                <Text style={styles.modalText}>Bank Details: ABC Bank, Account Number: 123456789</Text>
                                <Text style={styles.modalText}>Taxes: ${(selectedEmployee.salary * 0.2).toFixed(2)}</Text>
                                <Text style={styles.modalText}>Net Salary: ${(selectedEmployee.salary * 0.8).toFixed(2)}</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.closeButton}
                                onPress={() => setModalVisible(false)}
                            >
                                <Text style={styles.closeButtonText}>Close</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                )}
            </View>
        </MenuProvider>
    );
};

const triggerStyles = {
    triggerTouchable: {
        padding: 10,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f0f0f0',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    employeeList: {
        width: '100%',
    },
    employeeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 5,
        borderRadius: 5,
        elevation: 3,
        position: 'relative',
    },
    employeeImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    employeeDetails: {
        flex: 1,
        marginLeft: 10,
    },
    employeeName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    employeeDesignation: {
        fontSize: 16,
        color: '#555',
    },
    employeeSalary: {
        fontSize: 16,
    },
    employeeStatus: {
        fontSize: 14,
        marginTop: 5,
        position: 'absolute',
        right: 10,
        top: 10,
        padding: 5,
        borderRadius: 5,
        overflow: 'hidden',
        color: '#fff',
    },
    paid: {
        backgroundColor: 'green',
    },
    pending: {
        backgroundColor: 'red',
    },
    menuOption: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
    },
    menuOptionText: {
        marginLeft: 10,
        fontSize: 16,
    },
    modalContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    modalTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalContent: {
        alignItems: 'center',
    },
    modalImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
    },
    modalText: {
        fontSize: 16,
        marginBottom: 10,
    },
    closeButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#4CAF50',
        borderRadius: 5,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default PaySlipofEmployee;
