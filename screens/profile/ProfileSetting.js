import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const ProfileSetting = () => {
    const [profileImage, setProfileImage] = useState(null);
    const [name, setName] = useState('');
    const [designation, setDesignation] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [study, setStudy] = useState('');
    const [experience, setExperience] = useState('');
    const [achievement, setAchievement] = useState('');
    const [salary, setSalary] = useState('');
    const [documents, setDocuments] = useState('');
    const [marks10, setMarks10] = useState('');
    const [marks12, setMarks12] = useState('');
    const [graduationMarks, setGraduationMarks] = useState('');
    const [gender, setGender] = useState('');
    const [mobileNo, setMobileNo] = useState('');
    const [address, setAddress] = useState('');

    const handleImageUpload = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (permissionResult.granted === false) {
            alert('Permission to access camera roll is required!');
            return;
        }

        const pickerResult = await ImagePicker.launchImageLibraryAsync();
        console.log('Picker Result:', pickerResult);
        if (!pickerResult.cancelled) {
            console.log('Selected Image URI:', pickerResult.uri);
            setProfileImage(pickerResult.uri);
        }
    };


    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
            <View style={{ alignItems: 'center', paddingHorizontal: 20, paddingVertical: 40 }}>
                <TouchableOpacity onPress={handleImageUpload} style={{ marginBottom: 20 }}>
                    {profileImage ? (
                        <Image source={{ uri: profileImage }} style={{ width: 150, height: 150, borderRadius: 75 }} />
                    ) : (
                        <View style={{ width: 150, height: 150, borderRadius: 75, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center' }}>
                            <AntDesign name="plus" size={40} color="#6B7280" />
                        </View>
                    )}
                </TouchableOpacity>

                <TextInput
                    placeholder="Name"
                    style={styles.input}
                    value={name}
                    onChangeText={setName}
                />
                <TextInput
                    placeholder="Designation"
                    style={styles.input}
                    value={designation}
                    onChangeText={setDesignation}
                />
                <TextInput
                    placeholder="Date of Birth"
                    style={styles.input}
                    value={dateOfBirth}
                    onChangeText={setDateOfBirth}
                />
                <TextInput
                    placeholder="Study"
                    style={styles.input}
                    value={study}
                    onChangeText={setStudy}
                />
                <TextInput
                    placeholder="Experience"
                    style={styles.input}
                    value={experience}
                    onChangeText={setExperience}
                />
                <TextInput
                    placeholder="Achievement"
                    style={styles.input}
                    value={achievement}
                    onChangeText={setAchievement}
                />
                <TextInput
                    placeholder="Salary"
                    style={styles.input}
                    value={salary}
                    onChangeText={setSalary}
                />
                <TextInput
                    placeholder="Documents"
                    style={styles.input}
                    value={documents}
                    onChangeText={setDocuments}
                />
                <TextInput
                    placeholder="Marks in 10th"
                    style={styles.input}
                    value={marks10}
                    onChangeText={setMarks10}
                />
                <TextInput
                    placeholder="Marks in 12th"
                    style={styles.input}
                    value={marks12}
                    onChangeText={setMarks12}
                />
                <TextInput
                    placeholder="Graduation Marks"
                    style={styles.input}
                    value={graduationMarks}
                    onChangeText={setGraduationMarks}
                />
                <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
                    <Text style={{ marginRight: 20 }}>Gender:</Text>
                    <TouchableOpacity onPress={() => setGender('Male')} style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                        <Text style={{ marginRight: 5 }}>Male</Text>
                        <AntDesign name={gender === 'Male' ? 'checkcircle' : 'checkcircleo'} size={24} color="#3B82F6" />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setGender('Female')} style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ marginRight: 5 }}>Female</Text>
                        <AntDesign name={gender === 'Female' ? 'checkcircle' : 'checkcircleo'} size={24} color="#3B82F6" />
                    </TouchableOpacity>
                </View>
                <TextInput
                    placeholder="Mobile No"
                    style={styles.input}
                    value={mobileNo}
                    onChangeText={setMobileNo}
                />
                <TextInput
                    placeholder="Address"
                    style={[styles.input, { marginBottom: 40 }]}
                    value={address}
                    onChangeText={setAddress}
                />
                <TouchableOpacity
                    style={styles.saveButton}
                >
                    <Text style={styles.saveButtonText}>Save Changes</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
}

const styles = {
    input: {
        marginBottom: 20,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderWidth: 1,
        borderColor: '#D1D5DB',
        borderRadius: 8,
        width: '100%',
    },
    saveButton: {
        backgroundColor: '#3B82F6',
        paddingVertical: 12,
        // paddingHorizontal: 24,
        borderRadius: 8,
        marginTop: 0,
        width: '100%',
    },
    saveButtonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
};

export default ProfileSetting;