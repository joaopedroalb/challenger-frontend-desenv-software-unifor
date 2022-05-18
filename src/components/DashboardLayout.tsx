import Image from "next/image";
import { useContext, useEffect, useState } from "react";
import { useUser } from "../services/users";
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
  id:string|string[]|null|undefined
}

const DashboardLayout = ({id}:DashboardProps) => {
  const { setUserList, userList } = useContext(UserListContext);

  const [selectedUser,setSelectedUser] = useState<UserResult|null>(null)

  useDisableBodyScroll(selectedUser!=null)

  const {
    data: listUser,
    isLoading,
    refetch,
    isFetching,
  } = useUser({
    refetchOnMount: true,
    enabled: false,
  });

  const getNewData = () => {
    refetch();
  }

  const closeModal = () =>{
    setSelectedUser(null)
  }

  const openModalUser = (user:UserResult) =>{
    setSelectedUser(user)
  }

  useEffect(() => {
    if (listUser) setUserList((current) => [...current, ...listUser]);
  }, [listUser, setUserList]);

  useEffect(() => {
    if(userList.length==0){
      refetch()
    }

    if(id && userList.length>0){
      const userAux = userList.filter(u=>u.login.uuid == id)[0]
      if(userAux)
        setSelectedUser(userAux)
    }
    
  }, [refetch,id]);

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
          {isFetching ? (
            <Image
              src={loading}
              height={85}
              width={85}
              alt="Pacman loading gif"
            />
          ) : (
            <button
              className="p-4 bg-gray-500 text-yellow-50"
              onClick={getNewData}
            >
              Loading more
            </button>
          )}
        </div>
      </div>

      <Modal isActive={selectedUser!=null} handleCloseModal={closeModal}>
        <UserInfoCard user={selectedUser} closeEvent={closeModal}/>
      </Modal>
    </>
  );
};

export default DashboardLayout;
