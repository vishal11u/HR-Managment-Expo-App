import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { EvilIcons } from '@expo/vector-icons';
import { TaskData } from '../../../services/DailyTaskObj';

const DailyTask = () => {
  const [filter, setFilter] = useState('All');

  const filteredTasks = TaskData.filter(task =>
    filter === 'All' ? true : task.status === filter
  );

  const getStatusStyle = (status) => {
    switch (status) {
      case 'Pending':
        return 'bg-orange-500';
      case 'Complete':
        return 'bg-green-500';
      case 'InProgress':
        return 'bg-blue-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusTextStyle = (status) => {
    switch (status) {
      case 'Pending':
        return '#FFA500';
      case 'Complete':
        return '#008000';
      case 'InProgress':
        return '#0000FF';
      default:
        return '#808080';
    }
  };

  return (
    <ScrollView className="pt-12 px-5 h-full bg-blue-50">
      <Text className="text-[20px] font-semibold">Task</Text>
      <View className="flex-row items-center justify-between py-4">
        {['All', 'Pending', 'InProgress', 'Complete'].map(status => (
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
            <View className={`w-2 p-1 h-full rounded-tl-md rounded-bl-md ${getStatusStyle(item.status)}`}></View>
            <View className="bg-white p-2.5 w-full rounded-tr-md rounded-br-md flex-row items-center justify-between">
              <View>
                <Text className="text-[15px] font-medium">{item.title}</Text>
                <View className="flex-row items-center space-x-0.5">
                  <EvilIcons name="calendar" size={22} color={getStatusTextStyle(item.status)} />
                  <Text className={`pt-0.5 text-[15px] font-medium`} style={{ color: getStatusTextStyle(item.status) }}>{item.date}</Text>
                </View>
                <Text className="text-[11px] text-gray-400 font-medium pt-0.5">{item.description}</Text>
              </View>
              <View>
                <Text className={`py-1 px-3 rounded-md text-white ${getStatusStyle(item.status)}`}>
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

export default DailyTask;