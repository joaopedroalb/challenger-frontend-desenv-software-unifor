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

const PICTURE_DEFAULT =
  "https://mrconfeccoes.com.br/wp-content/uploads/2018/03/default.jpg";
const PERSON_IMG_DEFAULT =
  "http://ibaseminario.com.br/novo/wp-content/uploads/2013/09/default-avatar.png";

const DashboardLayout = () => {
  const { setUserList } = useContext(UserListContext);

  const [isModalActive,setIsModalActive] = useState(false)
  const [selectedUser,setSelectedUser] = useState<UserResult|null>(null)

  useDisableBodyScroll(isModalActive)

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
    setIsModalActive(false)
    setSelectedUser(null)
  }

  const openModalUser = (user:UserResult) =>{
    setSelectedUser(user)
    setIsModalActive(true)
  }

  useEffect(() => {
    if (listUser) setUserList((current) => [...current, ...listUser]);
  }, [listUser, setUserList]);

  useEffect(() => {
    refetch();
  }, [refetch]);

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
        <div className="w-full bg-white flex justify-between p-6">
          <div className="flex items-center gap-2">
            <img
              className="object-scale-down h-10 rounded-sm"
              src={PICTURE_DEFAULT}
              alt="Blank Image"
            />
            <h1 className="font-bold text-2xl">Company</h1>
          </div>

          <img
            className="object-scale-down h-10 rounded-full"
            src={PERSON_IMG_DEFAULT}
            alt="Person image blank"
          />
        </div>
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

      <Modal isActive={isModalActive} handleCloseModal={closeModal}>
        <UserInfoCard user={selectedUser} closeEvent={closeModal}/>
      </Modal>
    </>
  );
};

export default DashboardLayout;
