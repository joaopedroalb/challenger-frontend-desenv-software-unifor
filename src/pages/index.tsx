import type { NextPage } from "next";
import { type } from "os";
import { useEffect, useState } from "react";
import api from "../services/global/api";
import { useUser } from "../services/users";
import { UserResult } from "../services/users/types";
import TableSearch from "./components/TableSearch";

type User = {
  firstName:string
  LastName:string
}

const Home: NextPage = () => {

  const [userList,setUserList] = useState<Array<UserResult>>([])
  const [filterName,setFilterName] = useState('')
  
  const {data:listUser,isLoading,refetch, isFetching} = useUser({
                                            refetchOnWindowFocus: false,
                                            enabled: false
                                          })
  
   useEffect(()=>{
    if(listUser)
      setUserList(current=>[...current,...listUser])
  },[listUser])


  const getNewData = () =>{
    refetch()
  }


  if(isLoading){
    return(
      <div>Loading...</div>
    )
  }

  return (
    <div className={`w-full flex-none text-sm font-medium 
                  text-slate-700 bg-gray-100 flex flex-col
                  min-h-screen gap-8 pb-8`}>
      <div>Navbar</div>
      <TableSearch listUsers={userList}/>
      <div className="w-full flex items-center justify-center">
        {
          isFetching?(
            <p>Loading</p>
          ):(
            <button className="p-4 bg-gray-500 text-yellow-50"
            onClick={getNewData}
            >
              Loading more
            </button>
          )
        }
      </div>
    </div>
  );
};

export default Home;
