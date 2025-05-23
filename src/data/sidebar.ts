import { RiDashboardFill, RiArrowUpDownFill } from "react-icons/ri";
import { FaCalendarAlt, FaPhoneAlt } from "react-icons/fa";
import { FaSquarePlus } from "react-icons/fa6";
import { MdOutlineAutoGraph, MdSettings } from "react-icons/md";
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";

export const title = {
  main: "Health",
  sub: "care.",
};

export const links = [
  {
    section: "General",
    items: [
      {
        name: "Dashboard",
        icon: RiDashboardFill,
      },
      {
        name: "History",
        icon: RiArrowUpDownFill,
      },
      {
        name: "Calendar",
        icon: FaCalendarAlt,
      },
      {
        name: "Appointments",
        icon: FaSquarePlus,
      },
      {
        name: "Statistics",
        icon: MdOutlineAutoGraph,
      },
    ],
  },
  {
    section: "Tools",
    items: [
      {
        name: "Chat",
        icon: IoChatbubbleEllipsesOutline,
      },
      {
        name: "Support",
        icon: FaPhoneAlt,
      },
    ],
  },
];

export const settings = {
  title: "Settings",
  icon: MdSettings,
};
