import { useQuery, UseQueryOptions } from "react-query"
import api from "../global/api";
import { createUseUserIdKey, createUseUserKey } from "./keys"
import { UserResult } from "./types";

export const useUserList = (options?:UseQueryOptions<Array<UserResult>>) =>{
    return useQuery(createUseUserKey(),
                    async () => getUsers(),
                    options
                    )
} 

export const useUserById = (login:string,seed:string,page:string,results:string,
                            options?:UseQueryOptions<UserResult>) =>{
    return useQuery(createUseUserIdKey(login),
                    async () => getUserById(login,seed,page,results),
                    options
                    )
} 

async function getUsers():Promise<Array<UserResult>>{
    let listResults:Array<UserResult> = []
    const { data } = await api.get("/?results=50")
    for(let i = 0; i<data.results.length; i++ ){
        listResults.push({...data.results[i],info:data.info})
    }
    
    return listResults as Array<UserResult>;
}

async function getUserById(login:string,seed:string,page:string,results:string):Promise<UserResult>{
    const {data} = await api.get(`/?seed=${seed}&page=${page}&results=${results}`)
    const user = data.results.filter((x:UserResult)=>x.login.username == login)[0]

    return {...user,info:data.info} as UserResult
}
    