export type User = {
    email:string,
    role:USER_ROLE,
    name:string,
}

export enum USER_ROLE{
    TEAM_MEMBER,
    TEAM_LEADER,
    ADMIN,
    SUPER_ADMIN,
    FIRST_ADMIN
}