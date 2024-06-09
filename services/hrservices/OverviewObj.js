import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

export const OverviewAllSections = [
    {
        id: 1,
        title: 'Requests',
        icon: <Ionicons name="mail-open-outline" size={34} color="white" />,
        count: 100
    },
    {
        id: 2,
        title: 'Leave Requests',
        icon: <MaterialCommunityIcons name="calendar-refresh" size={31} color="white" />,
        count: 24
    },
    {
        id: 3,
        title: 'Attendance',
        icon: <AntDesign name="calendar" size={31} color="white" />,
        count: 32
    },
    {
        id: 4,
        title: 'PaySlip',
        icon: <Ionicons name="receipt-outline" size={31} color="white" />,
        count: 16
    },
    {
        id: 5,
        title: 'Project Task',
        icon: <FontAwesome name="file-text-o" size={29} color="white" />,
        count: 8
    },
    {
        id: 6,
        title: 'Team',
        icon: <MaterialIcons name="groups" size={34} color="white" />,
        count: 11
    },
]