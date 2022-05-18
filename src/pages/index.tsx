import type { NextPage } from "next";
import Image from 'next/image'
import { type } from "os";
import { useContext, useEffect, useState } from "react";
import api from "../services/global/api";
import { useUser } from "../services/users";
import { UserResult } from "../services/users/types";
import Loading from "./components/Loading";
import TableSearch from "./components/TableSearch";
import loading from '../assets/Loading.svg'
import { UserListContext } from "../context/UserListContext";

const PICTURE_DEFAULT = "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg"
const PERSON_IMG_DEFAULT = "http://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png"

const Home: NextPage = () => {

  const {userList,setUserList} = useContext(UserListContext)
  const [filterName,setFilterName] = useState('')
  
  const {data:listUser,isLoading,refetch, isFetching} = useUser({
                                            refetchOnMount: true,
                                            enabled: false
                                          })
  
   useEffect(()=>{
    if(listUser)
      setUserList(current=>[...current,...listUser])
  },[listUser])

  useEffect(()=>{
    refetch()
  },[refetch])


  const getNewData = () =>{
    refetch()
  }


  if(isLoading){
    return(
      <Loading/>
    )
  }

  return (
    <div className={`w-full flex-none text-sm font-medium 
                  text-slate-700 bg-gray-100 flex flex-col
                  min-h-screen gap-8 pb-8`}>
      <div className="w-full bg-white flex justify-between p-6">
        <div className="flex items-center gap-2">
          <img className="object-scale-down h-10 rounded-sm" src={PICTURE_DEFAULT} alt="Blank Image" />
          <h1 className="font-bold text-2xl">Company</h1>
        </div>

        <img className="object-scale-down h-10 rounded-full" src={PERSON_IMG_DEFAULT} alt="Person image blank" />
      </div>
      <TableSearch listUsers={userList}/>
      <div className="w-full flex items-center justify-center">
        {
          isFetching?(
            <Image src={loading} height={85} width={85} alt="Pacman loading gif" />
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
