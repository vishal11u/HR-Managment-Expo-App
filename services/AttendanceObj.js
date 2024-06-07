import { OverTimeStart, CheckIn, CheckOut, Leave, HalfDay } from '../assets';

export const AttendanceData = [
    {
        id: 1,
        shifttype: 'Start Shift',
        date: 'Mon - 23 Feb 2024',
        image: CheckIn,
        time: '9:12 AM',
        status: 'Late',
        att: "Weekly"
    },
    {
        id: 2,
        shifttype: 'End Shift',
        date: 'Mon - 23 Feb 2024',
        image: CheckOut,
        time: '5:00 PM',
        status: 'Late',
        att: "Weekly"
    },
    {
        id: 3,
        shifttype: 'Half Day',
        date: 'Mon - 23 Feb 2024',
        image: HalfDay,
        time: '9:12 AM - 2:00 PM',
        status: '5h 00m',
        att: "Monthly"
    },
    {
        id: 4,
        shifttype: 'Leave',
        date: '23 Feb 2024',
        image: Leave,
        time: 'N/A',
        status: 'Leave',
        att: "Yearly"
    },
    {
        id: 5,
        shifttype: 'Overtime',
        date: '23 Feb 2023',
        image: OverTimeStart,
        time: '9:12 AM - 2:00 PM',
        status: '5h 00m',
        att: "Yearly"
    },
    {
        id: 6,
        shifttype: 'Half Day',
        date: 'Mon - 23 Feb 2024',
        image: HalfDay,
        time: '9:12 AM - 2:00 PM',
        status: '5h 00m',
        att: "Monthly"
    },
    {
        id: 7,
        shifttype: 'Leave',
        date: '23 Feb 2024',
        image: Leave,
        time: 'N/A',
        status: 'Leave',
        att: "Yearly"
    },
]