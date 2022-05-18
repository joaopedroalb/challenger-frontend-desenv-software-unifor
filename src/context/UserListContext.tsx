import { createContext, ReactNode, useState } from "react";
import { UserResult } from "../services/users/types";

type ProviderProps = {
    children:ReactNode
}

type ContextData = {
    userList:Array<UserResult>
    setUserList:React.Dispatch<React.SetStateAction<Array<UserResult>>>;
}

export const UserListContext = createContext({} as ContextData)

export default function UserListProvider({children}:ProviderProps){
    const [userList,setUserList] = useState<Array<UserResult>>([])


   return(
       <UserListContext.Provider value={{userList,setUserList}}>
           {children}
       </UserListContext.Provider>
   )
}