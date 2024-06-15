import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, Image, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

// Placeholder images (replace with actual image paths)
const placeholderImage = 'https://www.nordstudio.ch/wp/wp-content/uploads/2018/02/mitarbeiter-business-fotos_06.jpg';

// Sample data
const teamsData = [
    {
        id: 1, name: 'Team A', leaderName: 'John Doe', points: 450, members: [
            { id: 1, name: 'John Doe', image: { uri: placeholderImage }, designation: 'Developer', points: 250 },
            { id: 2, name: 'Jane Smith', image: { uri: placeholderImage }, designation: 'Designer', points: 200 }
        ]
    },
    {
        id: 2, name: 'Team B', leaderName: 'Michael Johnson', points: 480, members: [
            { id: 3, name: 'Michael Johnson', image: { uri: placeholderImage }, designation: 'Manager', points: 300 },
            { id: 4, name: 'Emily Brown', image: { uri: placeholderImage }, designation: 'Tester', points: 180 }
        ]
    },
];

const Teams = () => {
    const [selectedTeam, setSelectedTeam] = useState(null);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.teamItem} onPress={() => setSelectedTeam(item)}>
            <View style={styles.initialCircle}>
                <Text style={styles.initialText}>{item.name.charAt(0)}</Text>
            </View>
            <View style={styles.teamDetails}>
                <Text style={styles.teamName}>{item.name}</Text>
                <Text style={styles.teamLeader}>Leader: {item.leaderName}</Text>
                <View className="flex-row items-center space-x-5">
                    <Text style={styles.teamPoints}>Points: {item.points}</Text>
                    <View style={styles.memberCount}>
                        <Ionicons name="people" size={16} color="gray" />
                        <Text style={styles.memberCountText}>{item.members.length} Members</Text>
                    </View>
                </View>
            </View>
            <AntDesign name="right" size={18} color="black" />
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Teams</Text>
            <FlatList
                data={teamsData}
                renderItem={renderItem}
                keyExtractor={item => item.id.toString()}
            />
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
        backgroundColor: '#f8f8f8',
        paddingHorizontal: 20,
        paddingTop: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#333',
    },
    teamItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginBottom: 10,
    },
    initialCircle: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#6200EE',
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    initialText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    teamDetails: {
        flex: 1,
    },
    teamName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    teamLeader: {
        fontSize: 14,
        color: '#666',
    },
    teamPoints: {
        fontSize: 14,
        color: '#666',
    },
    memberCount: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    memberCountText: {
        marginLeft: 5,
        fontSize: 14,
        color: '#666',
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
        color: '#333',
    },
    memberItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 10,
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
        color: '#333',
    },
    memberDesignation: {
        fontSize: 16,
        color: '#666',
    },
    memberPoints: {
        fontSize: 16,
        color: '#666',
    },
    closeButton: {
        backgroundColor: '#6200EE',
        paddingVertical: 15,
        alignItems: 'center',
        borderRadius: 10,
        marginBottom: 20,
        marginTop: 0,
    },
    closeButtonText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default Teams;
