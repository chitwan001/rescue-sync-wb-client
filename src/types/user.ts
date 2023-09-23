export type User = {
    email:string,
    role:USER_ROLE,
    name:string,
}

export enum USER_ROLE{
    SUPER_ADMIN,
    AGENCY_SUPER_ADMIN,
    AGENCY_ADMIN,
    AGENCY_EMPLOYEE,
    CITIZEN
}