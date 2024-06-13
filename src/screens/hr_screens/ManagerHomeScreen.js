import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, FlatList, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { OverviewAllSections } from '../../services/hrservices/OverviewObj';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { EmployeesAttendance } from '../../services/hrservices/EmployeeAttendanceObj';

const ManagerHomeScreen = () => {
  const navigation = useNavigation();

  const getColorById = (id) => {
    switch (id) {
      case 1:
        return styles.bgGreen;
      case 2:
        return styles.bgOrange;
      case 3:
        return styles.bgRed;
      case 4:
        return styles.bgBlue;
      case 5:
        return styles.bgIndigo;
      case 6:
        return styles.bgYellow;
      default:
        return styles.bgGray;
    }
  };

  const renderFlatListItem = ({ item }) => (
    <TouchableOpacity style={[styles.itemContainer]} onPress={() => navigation.navigate(`${item.link}`)}>
      <View style={[styles.iconContainer, getColorById(item.id)]}>
        {item.icon}
      </View>
      <View>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemCount}>{item.count}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <MaterialCommunityIcons name="menu" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("NotificationHR")}>
            <Ionicons name="notifications-circle-outline" size={38} color="white" style={styles.relative} />
            <Text style={styles.notificationBadge}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.headerTextContainer}>
          <Text style={styles.headerText}>Hi Admin</Text>
          <Text style={styles.headerText}>Good Morning</Text>
        </View>
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.overviewHeader}>
          <Text style={styles.overviewTitle}>Overview</Text>
          <Text style={styles.date}>25 May 2024</Text>
        </View>
        <FlatList
          data={OverviewAllSections}
          style={styles.flatList}
          numColumns={3}
          renderItem={renderFlatListItem}
          keyExtractor={(item) => item.id.toString()}
        />
        <View style={styles.recentLeaveApplicationsContainer}>
          <View style={styles.recentLeaveHeader}>
            <Text style={styles.recentLeaveTitle}>Recent Leave Applications</Text>
            <TouchableOpacity onPress={() => navigation.navigate("LeaveApplications")}>
              <Text className="font-medium" style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.leaveApplicationItem}>
            <View style={styles.leaveApplicationInfo}>
              <Image
                source={{ uri: 'https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?t=st=1717936186~exp=1717939786~hmac=d2ea4877e478dba15ea3036dee1564a031bff3801c22df51b51fba1947283dff&w=996' }}
                style={styles.leaveApplicationImage}
              />
              <View style={styles.leaveApplicationText}>
                <Text style={styles.leaveApplicantName}>Alex Smith</Text>
                <Text style={styles.leaveDates}>15 Jan - 22 Jan 2024</Text>
                <Text style={styles.leaveType}>Sick Leave Request</Text>
              </View>
            </View>
            <View style={styles.leaveActions}>
              <TouchableOpacity style={styles.cancelButton}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.approveButton}>
                <Text style={styles.approveButtonText}>Approve</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.attendanceContainer} >
          <Text style={styles.attendanceTitle}>Total Attendance</Text>
          <View style={styles.attendanceList}>
            {EmployeesAttendance.map((list) => (
              <View style={styles.attendanceItem} key={list.id}>
                <View className={`h-16 w-16 flex-row items-center justify-center ${list.count > 50 ? 'bg-green-100' : list.count > 10 ? 'bg-orange-100' : 'bg-red-100'} mx-auto rounded-full`}>
                  <Text className={`text-[17px] ${list.count > 50 ? 'text-green-600' : list.count > 10 ? 'text-orange-400' : 'text-red-500'} font-medium`}>
                    {list.count}
                  </Text>
                </View>
                <Text style={styles.attendanceItemTitle} >{list.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#2D3748',
    flex: 1,
  },
  header: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 16,
  },
  relative: {
    position: 'relative',
  },
  notificationBadge: {
    position: 'absolute',
    backgroundColor: 'white',
    color: 'black',
    borderRadius: 50,
    height: 16,
    width: 16,
    textAlign: 'center',
    fontSize: 10,
    left: 25,
  },
  headerTextContainer: {
    paddingVertical: 8,
  },
  headerText: {
    color: 'white',
    fontSize: 23,
    fontWeight: '600',
  },
  contentContainer: {
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 12,
    height: '100vh'
  },
  overviewHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 8,
    paddingVertical: 8,
  },
  overviewTitle: {
    fontSize: 17,
    fontWeight: '600',
  },
  date: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: '500',
    borderRadius: 20,
    backgroundColor: '#CBD5E0',
  },
  flatList: {
    marginLeft: -8,
    marginTop: -4,
  },
  itemContainer: {
    backgroundColor: 'white',
    paddingVertical: 8,
    marginLeft: 12,
    marginTop: 12,
    paddingHorizontal: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    width: '30%',
  },
  iconContainer: {
    borderRadius: 50,
    // padding: 16,
    marginBottom: 8,
    alignSelf: 'center',
    height: 60,
    width: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemTitle: {
    textAlign: 'center',
    fontWeight: '500',
  },
  itemCount: {
    textAlign: 'center',
    color: '#38A169',
    fontWeight: '600'
  },
  recentLeaveApplicationsContainer: {
    paddingHorizontal: 8,
    marginTop: 20,
  },
  recentLeaveHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentLeaveTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  seeAll: {
    fontSize: 13,
    color: '#3182CE',
  },
  leaveApplicationItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    marginTop: 8,
  },
  leaveApplicationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  leaveApplicationImage: {
    height: 64,
    width: 64,
    borderRadius: 32,
  },
  leaveApplicationText: {
    marginLeft: 8,
    justifyContent: 'center',
  },
  leaveApplicantName: {
    fontSize: 16,
    fontWeight: '600',
  },
  leaveDates: {
    fontSize: 12,
    color: '#E53E3E',
    fontWeight: '500',
  },
  leaveType: {
    fontSize: 12,
    color: '#A0AEC0',
    fontWeight: '500',
  },
  leaveActions: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#FED7D7',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 30,
    marginBottom: 8,
  },
  cancelButtonText: {
    color: '#E53E3E',
    fontSize: 13,
    fontWeight: '500',
  },
  approveButton: {
    backgroundColor: '#C6F6D5',
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 27,
  },
  approveButtonText: {
    color: '#38A169',
    fontSize: 13,
    fontWeight: '500',
  },
  attendanceContainer: {
    paddingHorizontal: 8,
    paddingTop: 22,
    paddingBottom: 20
  },
  attendanceTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  attendanceList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  attendanceItem: {
    borderWidth: 1,
    borderColor: '#E2E8F0',
    borderRadius: 12,
    width: '30%',
    padding: 12,
    marginTop: 10,
  },
  attendanceIconContainer: {
    height: 64,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 32,
    alignSelf: 'center',
  },
  attendanceCount: {
    fontSize: 17,
    fontWeight: '500',
  },
  attendanceItemTitle: {
    textAlign: 'center',
    marginTop: 8,
    fontWeight: '500',
  },
  bgGreen: {
    backgroundColor: '#1fce0f',
  },
  bgOrange: {
    backgroundColor: '#e09021',
  },
  bgRed: {
    backgroundColor: '#ef4646',
  },
  bgBlue: {
    backgroundColor: '#5dddf4',
  },
  bgIndigo: {
    backgroundColor: '#9c84f5',
  },
  bgYellow: {
    backgroundColor: '#f5e025',
  },
  bgGray: {
    backgroundColor: '#EDF2F7',
  },
  textGreen: {
    color: '#38A169',
  },
  textOrange: {
    color: '#DD6B20',
  },
  textRed: {
    color: '#E53E3E',
  },
});

export default ManagerHomeScreen;