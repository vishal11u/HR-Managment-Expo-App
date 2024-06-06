import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AntDesign } from '@expo/vector-icons';
import { AttendanceData } from '../../components/AttendanceObj';

const History = () => {
  const navigation = useNavigation();
  const [filter, setFilter] = useState('All');

  const filteredTasks = AttendanceData.filter(task =>
    filter === 'All' ? true : task.att === filter
  );

  return (
    <ScrollView className="pt-12 px-5 bg-blue-50 h-full">
      <View className="flex-row items-center">
        <TouchableOpacity className="p-1 bg-blue-400 w-7 rounded-md" onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={18} color="white" />
        </TouchableOpacity>
        <Text className="text-center w-[85%] font-semibold text-[18px]">Attendance</Text>
      </View>
      {/* ---------------------------------------------------------------------------- */}
      <View className="flex-row items-center justify-between py-5 mt-3">
        {['All', 'Weekly', 'Monthly', 'Yearly'].map(status => (
          <TouchableOpacity
            key={status}
            onPress={() => setFilter(status)}
            className={`rounded-md px-4 py-2 ${filter === status ? 'bg-blue-200' : 'bg-blue-50'}`}
          >
            <Text className="text-[#00a2e4] font-medium">{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
      {/* ---------------------------------------------------------------------------- */}
      <View className="px-4 py-3 bg-blue-100 rounded-md flex-row items-center justify-between">
        <View className="">
          <Text className="text-[16px] font-semibold">Attendace For</Text>
          <Text className="text-[14px] font-medium text-[#00a2e4]">February</Text>
        </View>
        <View className="">
          <Text className="text-[16px] font-semibold">Total Hours</Text>
          <Text className="text-right text-[14px] font-medium text-[#00a2e4]">410</Text>
        </View>
      </View>
      {/* ----------------------------------------------------------------------------- */}
      <SafeAreaView className="space-y-4 mt-5">
        {filteredTasks && filteredTasks.map((list) => (
          <TouchableOpacity key={list.id} className="bg-white p-2.5 rounded-lg flex-row items-center justify-between">
            <View className="flex-row space-x-3 pl-1">
              <View className="h-10 w-10 p-1.5 rounded-lg bg-[#00a3e417]">
                <Image
                  source={list.image}
                  className="h-full w-full object-cover"
                />
              </View>
              <View className="space-y-0.5">
                <Text className="text-[15px] font-semibold">{list.shifttype}</Text>
                <Text className="text-[11px] font-medium text-gray-400">{list.date}</Text>
              </View>
            </View>
            <View className="space-y-0.5 pr-1">
              <Text className="font-semibold">{list.time}</Text>
              <Text className="text-right text-[12px] font-medium text-gray-400">{list.status}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </SafeAreaView>
    </ScrollView>
  )
}

export default History;