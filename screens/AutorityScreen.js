import React from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
  Performance,
  Support,
  CostSaving,
  SuperFast,
  BarChart,
  CostChart
} from '../assets';

const AutorityScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView className="pt-8 bg-white h-[120vh]">
      <View className="w-full flex-row py-3.5 px-4 space-x-2.5">
        <View className='flex-1 w-full space-y-2.5'>
          <View className="h-[22vh] rounded-md bg-orange-50">
            <Image
              source={Support}
              className="h-24 w-24"
              resizeMode="cover"
            />
            <Text className="text-[22px] pl-5 font-semibold">
              Attendance{'\n'}
              Management
            </Text>
          </View>
          <View className="h-[30vh] rounded-md bg-indigo-50">
            <View className="py-3 px-4">
              <Image
                source={Performance}
                className="h-16 w-16 -ml-2"
                resizeMode="cover"
              />
              <Text className="text-[20px] pl-0 font-semibold">
                Increase Your{'\n'}
                Workflow
              </Text>
            </View>
            <View className="flex-row justify-center mt-3.5 space-x-6 items-center">
              <Text className="font-semibold text-[18px] text-gray-500">
                +200%
              </Text>
              <Image
                source={CostChart}
                className="h-16 w-16 "
                resizeMode="cover"
              />
            </View>
          </View>
        </View>
        <View className='flex-1 w-full space-y-2.5'>
          <View className="h-[30vh] rounded-md bg-lime-50">
            <View className="py-3 px-4">
              <Image
                source={CostSaving}
                className="h-16 w-16 -ml-2"
                resizeMode="cover"
              />
              <Text className="text-[20px] pl-0 font-semibold">
                Employee Cost{'\n'}
                Saving
              </Text>
            </View>
            <View className="flex-row justify-center mt-4 space-x-5 items-center">
              <Text className="font-semibold text-[18px] text-gray-500">
                -$10.5k
              </Text>
              <Image
                source={BarChart}
                className="h-16 w-16 "
                resizeMode="cover"
              />
            </View>
          </View>
          <View className="h-[22vh] space-y-2 px-3 rounded-md bg-gray-100">
            <Image
              source={SuperFast}
              className="h-16 w-16 mt-5"
              resizeMode="cover"
            />
            <Text className="text-[22px] pl-3 font-semibold">
              Enhance Data{'\n'}
              Accuracy
            </Text>
          </View>
        </View>
      </View>
      {/* ---------------------------------- */}
      <View className="p-3.5">
        <Text className='text-[36px] text-gray-900 font-semibold'>
          Reduce the Workloads of HR Management
        </Text>
        <Text className='pt-3 text-[16px] w-full font-medium text-gray-500'>
          Help you to improve Efficiency, Accuracy, Engagement and Cost saving for Employers.
        </Text>
      </View>
      <View className="p-3.5 mt-1 space-y-4">
        <TouchableOpacity className="py-3.5 bg-gray-700 rounded-md" onPress={() => navigation.navigate("ManagerLogin")}>
          <Text className="text-[17px] text-white text-center">
            I'm a Manager
          </Text>
        </TouchableOpacity>
        <TouchableOpacity className="border py-3 rounded-md" onPress={() => navigation.navigate("EmployeeLogin")}>
          <Text className="text-[17px] text-center">
            I'm an Employee
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default AutorityScreen;