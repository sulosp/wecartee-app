import {
  HiViewGrid,
  HiLibrary,
  HiCog,
  HiOfficeBuilding,
  HiShoppingCart,
  HiChatAlt2,
  HiLogout,
} from "react-icons/hi";

export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: <HiViewGrid />,
  },

  {
    key: "businessDirectory",
    label: "Business Directory",
    path: "/businessDirectory",
    icon: <HiLibrary />,
  },

  {
    key: "socialZone",
    label: "Social Zone",
    path: "/socialZone",
    icon: <HiCog />,
  },

  {
    key: "savedBusinesses",
    label: "Saved Businesses",
    path: "/savedBusinesses",
    icon: <HiOfficeBuilding />,
  },

  {
    key: "cart",
    label: "Cart",
    path: "/cart",
    icon: <HiShoppingCart />,
  },

  {
    key: "chat",
    label: "Chat",
    path: "/chat",
    icon: <HiChatAlt2 />,
  },
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: "settings",
    label: "Settings",
    path: "/settings",
    icon: <HiCog />,
  },

  {
    key: "logout",
    label: "Logout",
    path: "/",
    icon: <HiLogout />,
  },
];


