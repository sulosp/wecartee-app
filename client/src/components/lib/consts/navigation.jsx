import { HiViewGrid, HiLibrary, HiCog, HiOfficeBuilding, HiShoppingCart, HiChatAlt2 } from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
    {
    key: 'dashboard',
        label : 'Dashboard',
            path : '/',
                icon : <HiViewGrid />,
    },

{
    key: 'businessDirectory',
        label : 'Business Directory',
            path : '/businessDirectory',
                icon : <HiLibrary />,
    }
]