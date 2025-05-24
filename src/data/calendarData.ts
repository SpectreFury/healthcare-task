// filepath: src/data/calendarData.ts

export const calendarDays = [
  {
    currentDay: "Mon",
    date: 25,
    times: ["8:00", "9:00", "10:00"],
    isHighlighted: false,
  },
  {
    currentDay: "Tue",
    date: 26,
    times: ["8:00", "9:00", "10:00"],
    isHighlighted: true,
  },
  {
    currentDay: "Wed",
    date: 27,
    times: ["8:00", "⎯⎯", "10:00"],
    isHighlighted: false,
  },
  {
    currentDay: "Thu",
    date: 28,
    times: ["8:00", "9:00", "⎯⎯"],
    isHighlighted: false,
  },
  {
    currentDay: "Fri",
    date: 29,
    times: ["⎯⎯", "9:00", "10:00"],
    isHighlighted: false,
  },
];

export const mergedDays = {
  days: ["Sat", "Sun"],
  dates: [30, 31],
  times: [
    ["12:00", "9:00"],
    ["14:00", "10:00"],
    ["15:00", "11:00"],
  ],
};

export const cards = [
  {
    title: "Dentist",
    emoji: "🦷",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    isDark: true,
  },
  {
    title: "Physiotherapy Appointment",
    emoji: "💪",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djones",
    isDark: false,
  },
];

export const appointmentSchedule = [
  {
    day: "Thursday",
    appointments: [
      { title: "Health check complete", emoji: "💉", time: "11:00 AM" },
      { title: "Ophthalmologist", emoji: "👁️", time: "14:00 AM" },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      { title: "Cardiologist", emoji: "❤️", time: "11:00 AM" },
      { title: "Neurologist", emoji: "👨🏻‍⚕️", time: "14:00 AM" },
    ],
  },
];
