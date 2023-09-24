import {DashboardItem, DashboardType} from "../types/dashboard";
import Tracking from "../components/Tracking";
import {USER_ROLE} from "../types";
import Dashboard from "../components/Dashboard/Dashboard";

const navBarItems : DashboardItem[] = [
    {
        name:'MapView',
        component:Tracking(),
        route:'/map',
        id:'map-view',
        isUsableAbove:USER_ROLE.TEAM_MEMBER
    },
    {
        name:'Dashboard',
        component: Dashboard(),
        route: '/dashboard',
        id:'dashboard',
        isUsableAbove:USER_ROLE.TEAM_MEMBER
    },
    {
        name:'Requests',
        component: null,
        route:'/requests',
        id: 'requests',
        isUsableAbove: USER_ROLE.FIRST_ADMIN
    }
]

const tabItems : DashboardItem[] = [

]

export const dashboardConfig : DashboardType= {
    navBar:navBarItems,
    tabs: []
}