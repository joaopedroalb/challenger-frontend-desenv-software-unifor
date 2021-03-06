import { useContext, useState } from "react";
import { UserListContext } from "../context/UserListContext";
import { UserResult } from "../services/users/types";

type TableSearchProps = {
  seeUserHandle: (user:UserResult)=>void
}


export default function TableSearch({seeUserHandle}:TableSearchProps) {

  const {userList} = useContext(UserListContext)
  const [filterName, setFilterName] = useState('')

  const getLisUser = ():Array<UserResult> =>{
    const resultList = userList.filter(x=>getFullName(x).toLowerCase().includes(filterName.toLowerCase()))

    return resultList
  }

  const getFullName = (user:UserResult):string =>{
    return `${user.name.title} ${user.name.first} ${user.name.last}`
  }

  return (
    <div className={`w-100 flex flex-col items-center justify-center`}>
      <div className="w-4/5 mb-4">
        <label htmlFor="table-search" className="sr-only">
          Search
        </label>
        <div className="relative mt-1 w-100">
          <div className="absolute inset-y-0 right-4 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                clipRule="evenodd"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            id="table-search"
            className="w-full p-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 "
            placeholder="Search for items"
            onChange={({target})=>setFilterName(target.value)}
          />
        </div>
      </div>

      <table className="w-4/5 text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-300 ">
          <tr>
            <th scope="col" className="md:px-6 px-2 md:py-4 py-3">
              Name
            </th>
            <th scope="col" className="md:px-6 px-2 md:py-4 py-3">
              Gender
            </th>
            <th scope="col" className="md:px-6 px-2 md:py-4 py-3">
              Birth
            </th>
            <th scope="col" className="md:px-6 px-2 md:py-4 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {
            userList&&getLisUser().map((user,index:number)=>{
              return (
                <tr className="bg-white border-b hover:bg-gray-50 text-gray-900" key={index}>
                  <td scope="row" className="px-6 md:py-4 sm:px-3 font-medium">
                    {getFullName(user)}
                  </td>
                  <td className="md:px-6 px-2 md:py-4 py-3">{user.gender}</td>
                  <td className="md:px-6 px-2 md:py-4 py-3">{new Date(user.dob.date).toLocaleDateString()}</td>
                  <td className="md:px-6 px-2 md:py-4 py-3">
                    <button className="font-medium text-blue-600 hover:underline" onClick={()=>seeUserHandle(user)}>
                      See
                    </button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}
