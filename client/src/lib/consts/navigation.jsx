import {
  HiViewGrid,
  HiLibrary,
  HiCog,
  HiOfficeBuilding,
  HiShoppingCart,
  HiChatAlt2,
  HiLogout, HiCollection, HiCube, HiChartBar
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
    key: "buyerChat",
    label: "Chat",
    path: "/buyerchat",
    icon: <HiChatAlt2 />,
  },
];

export const SELLER_SIDEBAR_LINKS = [
  {
    key: "overview",
    label: "Overview",
    path: "/overview",
    icon: <HiChartBar />,
  },

  {
    key: "orders",
    label: "Orders",
    path: "/orders",
    icon: <HiShoppingCart />,
  },

  {
    key: "products",
    label: "Products",
    path: "/products",
    icon: <HiCube />,
  },

  {
    key: "storebuilder",
    label: "Store Builder",
    path: "/storebuilder",
    icon: <HiCollection />,
  },

  {
    key: "sellerChat",
    label: "Chat",
    path: "/sellerchat",
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
    path: "#",
    icon: <HiLogout />,
  },
];

export const SETTINGS_LINKS = [

  {
    key: "profile",
    label: "profile",
    path: "/settings/profile",
    icon: <HiLibrary />,
  },



];

