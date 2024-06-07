import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { TimeOffData } from '../../../services/TimeOffObj';
import { useNavigation } from '@react-navigation/native';

const TimeOff = () => {
  const navigate = useNavigation();
  const [filter, setFilter] = useState('All');

  const filteredTasks = TimeOffData.filter(task =>
    filter === 'All' ? true : task.status === filter
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return { backgroundColor: 'orange' };
      case 'Accepted':
        return { backgroundColor: '#008000' };
      case 'Submited':
        return { backgroundColor: '#0000FF' };
      case 'Rejected':
        return { backgroundColor: '#FFA500' };
      default:
        return { backgroundColor: 'gray' };
    }
  };

  return (
    <ScrollView className="pt-12 px-5 h-full bg-blue-50">
      <View className="flex-row items-center justify-between">
        <Text className="text-[20px] font-semibold">Time Off</Text>
        <TouchableOpacity className="bg-white rounded-full p-0.5" onPress={() => navigate.navigate("Send_Timeoff_Form")}>
          <Feather name="plus-circle" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center justify-between py-4">
        {['All', 'Accepted', 'Submited', 'Rejected'].map(status => (
          <TouchableOpacity
            key={status}
            onPress={() => setFilter(status)}
            className={`rounded-md px-4 py-2 ${filter === status ? 'bg-blue-200' : 'bg-blue-50'}`}
          >
            <Text className="text-[#00a2e4] font-medium">{status}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View className="space-y-5 mt-2">
        {filteredTasks.map((item) => (
          <View className="flex-row items-center w-[97%]" key={item.id}>
            <View style={getStatusStyle(item.status)} className="w-2 p-1 h-full rounded-tl-md rounded-bl-md"></View>
            <View className="bg-white p-2.5 w-full rounded-tr-md rounded-br-md flex-row items-center justify-between">
              <View className="">
                <Text className="text-[16px] font-medium">{item.title}</Text>
                <Text className="text-[12px] pt-1  text-gray-500">{item.fromdate}</Text>
                <Text className="text-[12px] text-gray-500">{item.todate}</Text>
              </View>
              <View>
                <Text className={`py-1 px-3 font-medium rounded-md text-white`} style={getStatusStyle(item.status)}>
                  {item.status}
                </Text>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

export default TimeOff;