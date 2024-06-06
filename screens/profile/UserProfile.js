import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { PaySlip, Reimbursment, Profile } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const UserProfile = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="pt-10 bg-blue-50 h-full">
      <View className="flex-row items-center justify-between p-4">
        <TouchableOpacity className="flex-row items-center space-x-1 bg-blue-400 rounded-md py-1 px-1" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={18} color="white" />
        </TouchableOpacity>
      </View>
      {/* ---------------------------- */}
      <View className="p-5 -top-8">
        <View className="h-32 w-32 bg-white rounded-full p-1.5 z-10 left-[40%] absolute">
          <Image
            source={{ uri: 'https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?t=st=1717328137~exp=1717331737~hmac=6c62d659733e221d1e95715bd236563bea66bccef2e710377b3e11597780177b&w=360' }}
            className="h-full w-full object-cover rounded-full"
          />
        </View>
        <View className="bg-white rounded-lg space-y-1 py-8 top-[15%] z-0 relative">
          <Text className="text-center mt-10 text-[25px] font-semibold text-[#00a2e4]">
            Vishal Rawat
          </Text>
          <View className="py-2 flex-row items-center justify-center px-2">
            <Text className="text-center text-[15px] font-medium text-gray-500">
              Backend Developer
            </Text>
          </View>
          <TouchableOpacity className="bg-[#00a2e4] py-3 rounded-lg mx-4" onPress={() => navigation.navigate("PaySlip")}>
            <View className="flex-row items-center space-x-2 justify-center">
              <Ionicons name="wallet-outline" size={24} color="white" />
              <Text className="text-[18px] text-white font-semibold">
                Earning :
              </Text>
              <Text className="text-white text-[16px] font-medium">
                $1520
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {/* ------------------------------------ */}
      <View className="px-5 mt-0.5">
        <View className="bg-indigo-100 rounded-lg flex-row items-center p-4 justify-between">
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
      <View className="px-4 mt-5 space-y-4">
        <TouchableOpacity className="px-4 py-2 flex-row items-center justify-between rounded-lg border-gray-300 bg-white" onPress={() => navigation.navigate("ProfileDetails")}>
          <View className="items-center flex-row space-x-1.5">
            <View className="h-8 w-8 rounded-full flex-row items-center justify-center overflow-hidden">
              <Image
                source={Profile}
                className="h-6 w-6 object-cover"
              />
            </View>
            <Text className="text-center text-[16px] font-semibold">
              Profile Details
            </Text>
          </View>
          <View className="">
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="px-4 py-2 flex-row items-center justify-between rounded-lg border-gray-300 bg-white" onPress={() => navigation.navigate("PaySlip")}>
          <View className="items-center flex-row space-x-1.5">
            <View className="h-8 w-8 rounded-full ">
              <Image
                source={PaySlip}
                className="h-full w-full object-cover rounded-full"
              />
            </View>
            <Text className="text-center text-[16px] font-semibold">
              My PaySlip
            </Text>
          </View>
          <View className="">
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity>
        {/* ----------- */}
        {/* <TouchableOpacity className="px-4 py-2 flex-row items-center justify-between rounded-lg border-gray-300 bg-white" onPress={() => navigation.navigate("ProfileSetting")}>
          <View className="items-center flex-row space-x-1.5">
            <View className="h-8 w-8 rounded-full">
              <Image
                source={Reimbursment}
                className="h-7 w-7 object-cover rounded-full"
              />
            </View>
            <Text className="text-center text-[16px] font-semibold">
              Setting
            </Text>
          </View>
          <View className="">
            <AntDesign name="right" size={18} color="black" />
          </View>
        </TouchableOpacity> */}
      </View>
      {/* --------------------------------------------------- */}
      <TouchableOpacity className="mx-4 mt-20 border p-3.5 rounded-lg border-blue-400 bg-blue-100 ">
        <Text className="text-center text-blue-500 font-medium">
          Logout
        </Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

export default UserProfile;