import Image from "next/image";
import { useCallback, useContext, useEffect, useState } from "react";
import { useUserList, useUserById } from "../services/users";
import { UserResult } from "../services/users/types";
import Loading from "./Loading";
import TableSearch from "./TableSearch";
import loading from "../assets/Loading.svg";
import { UserListContext } from "../context/UserListContext";
import Modal from "./Modal";
import { useDisableBodyScroll } from "../hooks/useDisableBodyScroll";
import UserInfoCard from "./UserInfoCard";
import Navbar from "./Navbar";

type DashboardProps ={
  login:string
  seed:string
  page:string
  results:string
}

const DashboardLayout = ({login,seed,page,results}:DashboardProps) => {
  const { setUserList, userList } = useContext(UserListContext);

  const [selectedUser,setSelectedUser] = useState<UserResult|null>(null)

  useDisableBodyScroll(selectedUser!=null)

  const {data:userById,refetch:refetchId} = useUserById(login,seed,page,results,{
                                                                      refetchOnMount: false,
                                                                      refetchOnReconnect:false,
                                                                      enabled: false,
                                                                    })

  const { data: listUser,isLoading,refetch,isFetching,} = useUserList({
                                                                    refetchOnMount: true,
                                                                    enabled: false,
                                                                  });

  const closeModal = () =>{
    setSelectedUser(null)
  }

  const openModalUser = (user:UserResult) =>{
    setSelectedUser(user)
  }

  const handleScroll = useCallback(
    async() => {
      if(window.innerHeight + document.documentElement.scrollTop + 2 < document.documentElement.offsetHeight)
      return
    
    refetch()
    },

    [refetch],
  );


  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll',handleScroll)
  },[handleScroll])

  useEffect(() => {
    if (listUser) setUserList((current) => [...current, ...listUser]);
  }, [listUser, setUserList]);

  useEffect(() => {
    if(login != '')
      refetchId()

    if(userList.length==0){
      refetch()
    }    
  }, [refetch,refetchId,login,seed,page,results]);

  useEffect(()=>{
    if(userById){
      console.log('userbyid')
      console.log({...userById})
      setSelectedUser(userById)
    }
        
  },[userById,login,seed,page,results])

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div
        className={`w-full flex-none text-sm font-medium 
                  text-slate-700 bg-gray-100 flex flex-col
                  min-h-screen gap-8 pb-8`}
      >
        <Navbar/>
        <TableSearch seeUserHandle={openModalUser}/>
        <div className="w-full flex items-center justify-center">
          {isFetching &&(
            <Image
              src={loading}
              height={85}
              width={85}
              alt="Pacman loading gif"
            />
            )
          }
        </div>
      </div>

      <Modal isActive={selectedUser!=null} handleCloseModal={closeModal}>
        <UserInfoCard user={selectedUser} closeEvent={closeModal}/>
      </Modal>
    </>
  );
};

export default DashboardLayout;
