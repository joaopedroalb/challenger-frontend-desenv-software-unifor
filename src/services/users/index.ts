import { useQuery, UseQueryOptions } from "react-query"
import api from "../global/api";
import { createUseUserKey } from "./keys"
import { UserResult } from "./types";

export const useUser = (options?:UseQueryOptions<Array<UserResult>>) =>{
    return useQuery(createUseUserKey(),
                    async () => getUser(),
                    options
                    )
} 

async function getUser():Promise<Array<UserResult>>{
    let listResults = []
    for(let i = 0; i <10; i++){
        const { data } = await api.get("/")
        listResults.push(data.results[0])
    }
    
    return listResults as Array<UserResult>;
}
    