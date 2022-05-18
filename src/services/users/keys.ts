import { QueryKey } from "react-query";

export const createUseUserKey = ():QueryKey => ["useUser"] 

export const createUseUserIdKey = (id:string):QueryKey => ["useUserId",id]