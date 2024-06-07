import { View, Text, Image, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { data, ShiftData, recentData, ShiftData2 } from '../../services/StartingScreenObj';
import { AllNotifications } from '../../services/Notifications';

const StartingScreen = () => {
  const navigation = useNavigation();
  const notifys = AllNotifications.length;

  return (
    <ScrollView className="pt-8 bg-blue-50 h-[120vh]">
      <View className="px-5 py-4 flex-row justify-between items-center">
        <View className="flex-row items-center space-x-3">
          <TouchableOpacity className="h-14 w-14 bg-white rounded-full p-[3px]" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image
              source={{ uri: 'https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?t=st=1717328137~exp=1717331737~hmac=6c62d659733e221d1e95715bd236563bea66bccef2e710377b3e11597780177b&w=360' }}
              className="h-full w-full object-cover rounded-full"
            />
          </TouchableOpacity>
          <View className="space-y-1">
            <Text className="text-[18px] font-semibold">
              Vishal Rawat
            </Text>
            <Text className="text-gray-500 font-semibold text-[13px]">
              5 June 2024
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("Notification")}>
          <Ionicons name="notifications-circle-outline" size={38} color="#00a2e4" className="relative" />
          <Text className="absolute bg-[#00a2e4] text-white rounded-full h-4 w-4 text-center text-[10px] left-[25px]">
            {notifys}
          </Text>
        </TouchableOpacity>
      </View>
      {/* --------------------- -----------------------------------------------------*/}
      <View className="px-5 pb-6 mt-1 space-y-3">
        <View className="flex-row justify-between items-center space-x-3">
          {ShiftData.map((shift) => (
            <View className="flex-1 h-[12vh] bg-white rounded-lg " key={shift.id}>
              <View className="p-2.5 flex-row items-center space-x-1">
                <Image
                  source={shift.image}
                  className="h-6 w-6 object-cover"
                />
                <Text className="text-gray-500 font-semibold">
                  {shift.check}
                </Text>
              </View>
              <View className="pl-3 -my-1">
                <Text className="text-[20px] font-semibold">
                  {shift.time}
                </Text>
              </View>
              <View className="px-3 flex-row justify-between items-center mt-2">
                <Text className="font-medium text-gray-500">
                  {shift.InTime}
                </Text>
              </View>
            </View>
          ))}
        </View>
        <View className="flex-row justify-between items-center space-x-3">
          {ShiftData2.map((shift) => (
            <View className="flex-1 h-[12vh] bg-white rounded-lg " key={shift.id}>
              <View className="p-2.5 flex-row items-center space-x-1">
                <Image
                  source={shift.image}
                  className="h-6 w-6 object-cover"
                />
                <Text className="text-gray-500 font-semibold">
                  {shift.check}
                </Text>
              </View>
              <View className="pl-3 -my-1">
                <Text className="text-[20px] font-semibold">
                  {shift.time}
                </Text>
              </View>
              <View className="px-3 flex-row justify-between items-center mt-2">
                <Text className="font-medium text-gray-500">
                  {shift.InTime}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
      {/* --------------------- --------------------------------------------------------*/}
      <View className="px-5">
        <View className="flex-row items-center justify-between">
          <Text className="font-semibold text-[18px]">
            Today's Task
          </Text>
          <TouchableOpacity className="flex-row items-center space-x-1" onPress={() => navigation.navigate("Task")}>
            <Text className="text-gray-500 text-right text-[14px] font-medium pb-0.5 ">
              See more
            </Text>
            <AntDesign name="rightcircleo" size={14} color="gray" className="ml-2" />
          </TouchableOpacity>
        </View>

        {data.length > 0 ? (
          <View className="mt-4 flex-row items-center space-x-4">
            {data && data.map((list) => (
              <View className="bg-white rounded-lg p-2.5 space-y-0.5 w-[80%]" key={list.id}>
                <Text className=" text-[15px] font-medium">
                  {list.title}
                </Text>
                <View className="flex-row items-center space-x-0.5">
                  <EvilIcons name="calendar" size={22} color="#00a2e4" />
                  <Text className="pt-0.5 text-[15px] font-medium text-[#00a2e4]">{list.date}</Text>
                </View>
                <Text className="text-[11px] text-gray-400 font-medium pt-0.5">{list.description}</Text>
              </View>
            ))}
          </View>

        ) : (
          <Text className="text-center mt-3 font-medium text-gray-500">No Task Available</Text>
        )}
      </View>
      {/* --------------------- --------------------------------------------------------*/}
      <View className="px-5">
        <View className="flex-row items-center justify-between py-5">
          <Text className="font-semibold text-[18px]">
            Recent Activity
          </Text>
          <TouchableOpacity className="flex-row items-center space-x-1" onPress={() => navigation.navigate("Attendance")}>
            <Text className="text-gray-500 text-right text-[14px] font-medium pb-0.5 ">
              View all
            </Text>
            <AntDesign name="rightcircleo" size={14} color="gray" className="ml-2" />
          </TouchableOpacity>
        </View>
        {recentData.length > 0 ? (
          <SafeAreaView className="space-y-4">
            {recentData && recentData.map((list) => (
              <TouchableOpacity key={list.id} className="bg-white p-2.5 rounded-lg flex-row items-center justify-between">
                <View className="flex-row space-x-3 pl-1">
                  <View className="h-10 w-10 p-1.5 rounded-lg bg-[#00a3e417]">
                    <Image
                      source={list.image}
                      className="h-full w-full object-cover"
                    />
                  </View>
                  <View className="space-y-0.5">
                    <Text className="text-[15px] font-semibold">{list.title}</Text>
                    <Text className="text-[11px] font-medium text-gray-400">{list.date}</Text>
                  </View>
                </View>
                <View className="space-y-0.5 pr-1">
                  <Text className="font-semibold">{list.time}</Text>
                  <Text className="text-right text-[12px] font-medium text-gray-400">{list.attendance}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
        ) : (
          <Text className="text-center mt-3 font-medium text-gray-500">No Activity Available</Text>
        )}
      </View>
    </ScrollView>
  )
}

export default StartingScreen;