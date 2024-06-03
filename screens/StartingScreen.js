import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { OverTimeEnd, OverTimeStart, CheckIn, CheckOut } from '../assets';
import { Feather } from '@expo/vector-icons';

const StartingScreen = () => {
  const navigation = useNavigation();

  return (
    <View className="pt-8 bg-gray-100 h-[120vh]">
      <View className="px-5 py-4 flex-row justify-between items-center">
        <View className="flex-row items-center space-x-4">
          {/* <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Feather name="menu" size={28} color="black" />
          </TouchableOpacity> */}
          <View className="space-y-0">
            <Text className="text-[22px] font-semibold">
              Morning Ali Husain
            </Text>
            <Text className="text-gray-500 font-semibold text-[16px]">
              5 June 2024
            </Text>
          </View>
        </View>
        <TouchableOpacity className="h-16 w-16 bg-white rounded-full p-1" onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image
            source={{ uri: 'https://img.freepik.com/free-photo/front-view-man-posing_23-2148364843.jpg?t=st=1717328137~exp=1717331737~hmac=6c62d659733e221d1e95715bd236563bea66bccef2e710377b3e11597780177b&w=360' }}
            className="h-full w-full object-cover rounded-full"
          />
        </TouchableOpacity>
      </View>
      {/* --------------------- */}
      <View className="px-5 pt-2 pb-6 space-y-3">
        <View className="flex-row justify-between items-center space-x-3">
          <View className="flex-1 h-[15vh] bg-white rounded-md ">
            <View className="p-3 flex-row items-center space-x-2">
              <Image
                source={CheckIn}
                className="h-8 w-8 object-cover"
              />
              <Text className="text-gray-500 font-semibold">
                Check In
              </Text>
            </View>
            <View className="pl-3">
              <Text className="text-[20px] font-semibold">
                10:30 AM
              </Text>
            </View>
            <View className="px-3 flex-row justify-between items-center mt-2">
              <Text className="font-medium text-gray-500">
                On Time
              </Text>
              <Text className="font-semibold text-green-600">
                +150 pt
              </Text>
            </View>
          </View>

          <View className="flex-1 h-[15vh] bg-white rounded-md">
            <View className="p-3 flex-row items-center space-x-2">
              <Image
                source={CheckOut}
                className="h-8 w-8 object-cover"
              />
              <Text className="text-gray-500 font-semibold">
                Check Out
              </Text>
            </View>
            <View className="pl-3">
              <Text className="text-[20px] font-semibold">
                05:45 PM
              </Text>
            </View>
            <View className="px-3 flex-row justify-between items-center mt-2">
              <Text className="font-medium text-gray-500">
                On Time
              </Text>
              <Text className="font-semibold text-green-600">
                +100 pt
              </Text>
            </View>
          </View>
        </View>

        <View className="flex-row justify-between items-center space-x-3">
          <View className="flex-1 h-[15vh] bg-white rounded-md">
            <View className="p-3 flex-row items-center space-x-2">
              <Image
                source={OverTimeStart}
                className="h-8 w-8 object-cover"
              />
              <Text className="text-gray-500 font-semibold">
                Start OverTime
              </Text>
            </View>
            <View className="pl-3">
              <Text className="text-[20px] font-semibold">
                06:01 PM
              </Text>
            </View>
            <View className="px-3  mt-2">
              <Text className="font-medium text-gray-500">
                Project revision form...
              </Text>
            </View>
          </View>
          <View className="flex-1 h-[15vh] bg-white rounded-md">
            <View className="p-3 flex-row items-center space-x-2">
              <Image
                source={OverTimeEnd}
                className="h-8 w-8 object-cover"
              />
              <Text className="text-gray-500 font-semibold">
                End OverTime
              </Text>
            </View>
            <View className="pl-3">
              <Text className="text-[20px] font-semibold">
                11:10 PM
              </Text>
            </View>
            <View className="px-3 flex-row justify-between items-center mt-2">
              <Text className="font-medium text-gray-500">
                5h 00m
              </Text>
              <Text className="font-semibold text-green-600">
                +$120.00
              </Text>
            </View>
          </View>
        </View>
      </View>
      {/* --------------------- */}
      <View className="p-5 bg-white h-full w-full">
        <View className="flex-row items-center justify-between mt-1">
          <Text className="text-[21px] flex-1 font-semibold">
            Recent Activity
          </Text>
          <View className="flex-row items-center space-x-1.5">
            <Text className="text-gray-500 text-right text-[15px] font-semibold ">
              See more
            </Text>
            <AntDesign name="rightcircleo" size={18} color="gray" className="ml-2" />
          </View>
        </View>
        {/* --------------------- */}
        <View className="w-full space-y-7 h-full">
          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row items-center space-x-2">
              <Image
                source={CheckIn}
                className="h-12 w-12 object-cover"
              />
              <View className="flex-col">
                <Text className="font-semibold text-[19px]">
                  Check In
                </Text>
                <Text className="text-gray-500 font-semibold">
                  23 Feb 2024
                </Text>
              </View>
            </View>
            {/* --------------------- */}
            <View className="flex-col">
              <Text className="font-semibold text-[18px]">
                10:30 AM
              </Text>
              <View className="flex-row items-center space-x-2 text-right justify-end">
                <Text className="font-semibold  text-[13px] text-gray-500">
                  Late *
                </Text>
                <Text className="font-semibold text-[13px] text-green-600">
                  +5pt
                </Text>
              </View>
            </View>
          </View>
          {/* ------------------------------- */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-2">
              <Image
                source={CheckOut}
                className="h-12 w-12 object-cover"
              />
              <View className="flex-col">
                <Text className="font-semibold text-[19px]">
                  Check Out
                </Text>
                <Text className="text-gray-500 font-semibold">
                  23 Feb 2024
                </Text>
              </View>
            </View>
            {/* --------------------- */}
            <View className="flex-col">
              <Text className="font-semibold text-[18px] text-right">
                05:03 PM
              </Text>
              <View className="flex-row items-center space-x-2 text-right justify-end">
                <Text className="font-semibold  text-[13px] text-gray-500">
                  Overtime *
                </Text>
                <Text className="font-semibold text-[13px] text-green-600">
                  +100pt
                </Text>
              </View>
            </View>
          </View>
          {/* ------------------------------- */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-2">
              <Image
                source={OverTimeStart}
                className="h-12 w-12 object-cover"
              />
              <View className="flex-col">
                <Text className="font-semibold text-[19px]">
                  OverTime
                </Text>
                <Text className="text-gray-500 font-semibold">
                  22 Feb 2024
                </Text>
              </View>
            </View>
            {/* --------------------- */}
            <View className="flex-col">
              <Text className="font-semibold text-[18px]">
                06:01 - 10:59 PM
              </Text>
              <View className="flex-row items-center space-x-2 text-right justify-end">
                <Text className="font-semibold  text-[13px] text-gray-500">
                  5h 30m *
                </Text>
                <Text className="font-semibold text-[13px] text-green-600">
                  +$120.00
                </Text>
              </View>
            </View>
          </View>
          {/* ------------------------------- */}
          <View className="flex-row justify-between items-center">
            <View className="flex-row items-center space-x-2">
              <Image
                source={OverTimeEnd}
                className="h-12 w-12 object-cover"
              />
              <View className="flex-col">
                <Text className="font-semibold text-[19px]">
                  OverTime
                </Text>
                <Text className="text-gray-500 font-semibold">
                  22 Feb 2024
                </Text>
              </View>
            </View>
            {/* --------------------- */}
            <View className="flex-col">
              <Text className="font-semibold text-[18px]">
                06:01 - 10:59 PM
              </Text>
              <View className="flex-row items-center space-x-2 text-right justify-end">
                <Text className="font-semibold  text-[13px] text-gray-500">
                  5h 30m *
                </Text>
                <Text className="font-semibold text-[13px] text-green-600">
                  +$120.00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

export default StartingScreen;