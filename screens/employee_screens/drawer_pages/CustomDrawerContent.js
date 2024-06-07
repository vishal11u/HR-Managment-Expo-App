import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { useNavigation } from '@react-navigation/native';

function CustomDrawerContent(props) {
    const navigate = useNavigation();

    return (
        <DrawerContentScrollView {...props}>
            <TouchableOpacity style={styles.profileContainer} className="mx-3 mb-3 bg-blue-50 rounded-lg border-gray-300" onPress={() => navigate.navigate("Profile")}>
                <Image
                    source={{ uri: 'https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?t=st=1717328137~exp=1717331737~hmac=6c62d659733e221d1e95715bd236563bea66bccef2e710377b3e11597780177b&w=360' }}
                    style={styles.profilePic}
                />
                <Text style={styles.username}>Vishal Rawat</Text>
                <Text className="text-gray-500 font-medium">Backend Developer</Text>
            </TouchableOpacity>
            <DrawerItemList {...props} />
        </DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    profileContainer: {
        padding: 20,
        alignItems: 'center',
        justifyContent: "center"
    },
    profilePic: {
        width: 100,
        height: 100,
        borderRadius: 60,
        marginBottom: 5,
    },
    username: {
        fontSize: 28,
        fontWeight: 'bold',
    },
});

export default CustomDrawerContent;
