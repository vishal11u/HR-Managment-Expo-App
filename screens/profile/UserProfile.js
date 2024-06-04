import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { PaySlip, Reimbursment } from '../../assets';
import { Entypo } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="pt-10 bg-white">
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity className="flex-row items-center space-x-1 bg-black rounded-md py-1 px-2" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={18} color="white" />
          <Text className="text-[17px] font-semibold text-white" >
            Back
          </Text>
        </TouchableOpacity>
        {/* <View className="flex-row items-center space-x-2 py-1 px-2 bg-red-500 rounded-md">
          <Text className="text-[17px] font-semibold text-white">
            Logout
          </Text>
          <MaterialCommunityIcons name="logout" size={20} color="white" />
        </View> */}
      </View>
      {/* ---------------------------- */}
      <View className="p-5 mt-">
        <View className="h-32 w-32 bg-gray-100 rounded-full p-1.5 z-10 left-[40%] absolute">
          <Image
            source={{ uri: 'https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?t=st=1717328137~exp=1717331737~hmac=6c62d659733e221d1e95715bd236563bea66bccef2e710377b3e11597780177b&w=360'}}
            className="h-full w-full object-cover rounded-full"
          />
        </View>
        <View className="bg-gray-100 rounded-md space-y-1 py-7 top-[15%] z-0 relative">
          <Text className="text-center mt-10 -mb-2 text-[25px] font-semibold">
            Ali Husain
          </Text>
          <View className="py-4 flex-row items-center justify-between px-2">
            <View className="flex-row items-center -ml-1 ">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-center text-[15px] font-medium text-gray-500">
                Part Time
              </Text>
            </View>
            <View className="flex-row items-center ">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-center text-[15px] font-medium text-gray-500">
                UI/UX Designer
              </Text>
            </View>
            <View className="flex-row items-center mr-1">
              <Entypo name="dot-single" size={24} color="black" />
              <Text className="text-center text-[15px] font-medium text-gray-500">
                Join 2024
              </Text>
            </View>
          </View>
          <TouchableOpacity className="bg-gray-600 py-4 px-4 mb-1 rounded-md mx-4 flex-row items-center justify-between">
            <View className="flex-row items-center space-x-2">
              <AntDesign name="star" size={24} color="white" />
              <Text className="text-[24px] text-white font-semibold">
                20.345pt
              </Text>
            </View>
            <View className="flex-row items-center space-x-1">
              <Text className="text-white pb-1">
                Exchange
              </Text>
              <AntDesign name="right" size={15} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------------------ */}
      <View className="p-5 mt-7 border-black">
        <View className="bg-indigo-50 rounded-md flex-row items-center p-4 justify-between">
          <View className="border-r border-gray-300 flex-1">
            <Text className="text-center text-gray-500 text-[15px]">Time of</Text>
            <Text className="text-center text-[27px] font-semibold">02</Text>
          </View>
          <View className="border-r border-gray-300 flex-1">
            <Text className="text-center text-gray-500 text-[15px]">Attendace</Text>
            <Text className="text-center text-[27px] font-semibold">31</Text>
          </View>
          <View className="  flex-1">
            <Text className="text-center text-gray-500 text-[15px]">OverTime</Text>
            <Text className="text-center text-[27px] font-semibold">12</Text>
          </View>
        </View>
      </View>
      {/* ------------------------------------ */}
      <View className="p-4 mt-0 space-y-5">
        <TouchableOpacity className="px-4 py-2 flex-row items-center justify-between rounded-md border-gray-300 border">
          <View className="items-center flex-row space-x-3">
            <View className="h-11 w-11 rounded-full bg-green-100 p-1.5">
              <Image
                source={PaySlip}
                className="h-full w-full object-cover rounded-full"
              />
            </View>
            <Text className="text-center text-[17px] font-semibold">
              My PaySlip
            </Text>
          </View>
          <View className="">
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
        {/* ---------------------------------------- */}
        <TouchableOpacity className="px-4 py-2 flex-row items-center justify-between rounded-md border-gray-300 border">
          <View className="items-center flex-row space-x-3">
            <View className="h-11 w-11 rounded-full bg-red-100 p-1.5">
              <Image
                source={Reimbursment}
                className="h-full w-full object-cover rounded-full"
              />
            </View>
            <Text className="text-center text-[17px] font-semibold">
              Reimbursment
            </Text>
          </View>
          <View className="">
            <AntDesign name="right" size={20} color="black" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default UserProfile;