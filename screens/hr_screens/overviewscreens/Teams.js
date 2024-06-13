import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';

// const teamsData = [
//     {
//         id: 1, name: 'Team A', members: [
//             { id: 1, name: 'John Doe', image: require(''), designation: 'Developer', points: 250 },
//             { id: 2, name: 'Jane Smith', image: require(''), designation: 'Designer', points: 200 }
//         ]
//     },
//     {
//         id: 2, name: 'Team B', members: [
//             { id: 3, name: 'Michael Johnson', image: require(''), designation: 'Manager', points: 300 },
//             { id: 4, name: 'Emily Brown', image: require(''), designation: 'Tester', points: 180 }
//         ]
//     },
// ];

const Teams = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.teamItem} onPress={() => setSelectedTeam(item)}>
            <Text style={styles.teamName}>{item.name}</Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Teams</Text>
            {/* <FlatList
                data={teamsData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            /> */}
            {selectedTeam && (
                <TeamModal team={selectedTeam} visible={selectedTeam !== null} onClose={() => setSelectedTeam(null)} />
            )}
        </View>
    );
};

const TeamModal = ({ team, visible, onClose }) => (
    <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={onClose}
    >
        <View style={styles.modalContainer}>
            <Text style={styles.modalHeader}>{team.name} Members</Text>
            <FlatList
                data={team.members}
                renderItem={({ item }) => (
                    <View style={styles.memberItem}>
                        <Image source={item.image} style={styles.memberImage} />
                        <View style={styles.memberInfo}>
                            <Text style={styles.memberName}>{item.name}</Text>
                            <Text style={styles.memberDesignation}>{item.designation}</Text>
                            <Text style={styles.memberPoints}>Points: {item.points}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
            />
            <TouchableOpacity style={styles.closeButton} onPress={onClose}>
                <Text style={styles.closeButtonText}>Close</Text>
            </TouchableOpacity>
        </View>
    </Modal>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    teamItem: {
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    teamName: {
        fontSize: 18,
    },
    modalContainer: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 40,
    },
    modalHeader: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    memberImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
    },
    memberInfo: {
        flex: 1,
    },
    memberName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    memberDesignation: {
        fontSize: 16,
        color: '#666',
    },
    memberPoints: {
        fontSize: 16,
    },
    closeButton: {
        backgroundColor: '#f0f0f0',
        paddingVertical: 15,
        alignItems: 'center',
        marginTop: 20,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#333',
    },
});

export default Teams;
