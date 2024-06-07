import { OverTimeEnd, OverTimeStart, CheckIn, CheckOut } from '../assets';

export const data = [
    {
        id: 1,
        title: 'Customer Service',
        date: 'March 25 - 12 PM',
        description: 'To Take Care of Customers Every Evening',
    },
    {
        id: 2,
        title: 'Customer Service',
        date: 'March 25 - 12 PM',
        description: 'To Take Care of Customers Every Evening',
    },
    {
        id: 3,
        title: 'Customer Service',
        date: 'March 25 - 12 PM',
        description: 'To Take Care of Customers Every Evening',
    },
];

export const ShiftData = [
    {
        id: 1,
        check: "Check In",
        time: "10:30 AM",
        InTime: "On Time",
        image: CheckIn
    },
    {
        id: 2,
        check: "Check Out",
        time: "05:05 PM",
        InTime: "On Time",
        image: CheckOut
    },
]

export const ShiftData2 = [
    {
        id: 1,
        check: "Start OvertTime",
        time: "06:01 PM",
        InTime: "Project revision form...",
        image: OverTimeStart
    },
    {
        id: 2,
        check: "Close OvertTime",
        time: "11:10 PM",
        InTime: "5h 00m",
        image: OverTimeEnd
    },
]

export const recentData = [
    {
        id: 1,
        title: "Start Shift",
        date: "23 Feb 2024",
        attendance: "Late",
        image: CheckIn,
        time: "9:12 AM"
    },
    {
        id: 2,
        title: "End Shift",
        date: "23 Feb 2024",
        attendance: "Ontime",
        image: CheckOut,
        time: "5:30 PM"
    },
    {
        id: 3,
        title: "Overtime",
        date: "Leave",
        attendance: "Pending",
        image: OverTimeStart,
        time: "12 Mar to 14 Mar"
    },
]