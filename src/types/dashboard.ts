import {USER_ROLE} from "./user";

export type DashboardType = {
    navBar:DashboardItem[],
    tabs:DashboardItem[]
}

export type DashboardItem ={
    name:string,
    id:string,
    route:string,
    isUsableAbove:USER_ROLE,
    component:JSX.Element | null,
}