import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';

const ProfileDetails = () => {
    const navigation = useNavigation();

    const profile = {
        image: 'https://img.freepik.com/free-photo/smiling-young-male-professional-standing-with-arms-crossed-while-making-eye-contact-against-isolated-background_662251-838.jpg?t=st=1717610140~exp=1717613740~hmac=8541be04d476941a3796eb89ccff5717a63dc001a70b1c619cc322ee986b7f33&w=740',
        name: 'John Doe',
        designation: 'Software Engineer',
        dateOfBirth: '1990-01-01',
        joinDate: '2020-01-01',
        study: 'B.Tech in Computer Science',
        experience: '5 years',
        achievement: 'Employee of the Year 2021',
        salary: '$100,000',
        documents: 'Passport, Driving License',
        marks10: '95%',
        marks12: '90%',
        graduationMarks: '85%',
        gender: 'Male',
        mobileNo: '+1234567890',
        address: '123 Main Street, City, Country'
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#F3F4F6', paddingTop: 40 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16 }}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <AntDesign name="left" size={18} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Profile Details</Text>
            </View>
            <ScrollView contentContainerStyle={styles.container} className="-mt-2">
                <View style={styles.profileHeader}>
                    <Image source={{ uri: profile.image }} style={styles.profileImage} />
                    <Text style={styles.profileName}>{profile.name}</Text>
                    <Text style={styles.profileDesignation}>{profile.designation}</Text>
                </View>
                <View style={styles.profileDetails}>
                    <ProfileDetail label="Date of Birth" value={profile.dateOfBirth} />
                    <ProfileDetail label="Join Date" value={profile.joinDate} />
                    <ProfileDetail label="Study" value={profile.study} />
                    <ProfileDetail label="Experience" value={profile.experience} />
                    <ProfileDetail label="Achievement" value={profile.achievement} />
                    <ProfileDetail label="Salary" value={profile.salary} />
                    <ProfileDetail label="Documents" value={profile.documents} />
                    <ProfileDetail label="Marks in 10th" value={profile.marks10} />
                    <ProfileDetail label="Marks in 12th" value={profile.marks12} />
                    <ProfileDetail label="Graduation Marks" value={profile.graduationMarks} />
                    <ProfileDetail label="Gender" value={profile.gender} />
                    <ProfileDetail label="Mobile No" value={profile.mobileNo} />
                    <ProfileDetail label="Address" value={profile.address} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const ProfileDetail = ({ label, value }) => (
    <View style={styles.detailContainer}>
        <Text style={styles.detailLabel}>{label}</Text>
        <Text style={styles.detailValue}>{value}</Text>
    </View>
);

const styles = {
    container: {
        paddingHorizontal: 16,
        paddingVertical: 24,
    },
    backButton: {
        padding: 5,
        backgroundColor: '#3B82F6',
        borderRadius: 8,
        // width: 32,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 16,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        flex: 1,
    },
    profileHeader: {
        alignItems: 'center',
        marginBottom: 24,
    },
    profileImage: {
        width: 128,
        height: 128,
        borderRadius: 64,
        marginBottom: 12,
    },
    profileName: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#1F2937',
    },
    profileDesignation: {
        fontSize: 16,
        color: '#6B7280',
    },
    profileDetails: {
        backgroundColor: '#FFFFFF',
        borderRadius: 8,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4,
    },
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 12,
        paddingVertical: 8,
        paddingHorizontal: 12,
        backgroundColor: '#F9FAFB',
        borderRadius: 8,
    },
    detailLabel: {
        fontSize: 16,
        fontWeight: '600',
        color: '#4B5563',
    },
    detailValue: {
        fontSize: 16,
        color: '#6B7280',
    },
};

export default ProfileDetails;
