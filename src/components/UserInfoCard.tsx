import Link from "next/link";
import { UserResult } from "../services/users/types";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { useState } from "react";

type UserInfoCardProps = {
  user: UserResult | null;
  closeEvent: ()=>void
};

export default function UserInfoCard({ user,closeEvent }: UserInfoCardProps) {

    const [isCopied,setIsCopied] = useState(false)
    
    if(!user) return <></>
    
    return (
        <div className="min-w-[450px] max-w-[80%] bg-white flex flex-col min-h-[400px] max-h-[80%] relative" 
            onClick={(event)=>event.stopPropagation()}
        >
            <div className="flex justify-center absolute top-[-65px] w-full ">
                <img 
                        className={`w-36 rounded-full`}
                        src={user.picture.large}
                        alt={user.name.first+" profile image"}
                />
            </div>
            <span className="absolute right-[10px] top-[2px] text-xl font-semibold cursor-pointer" 
                    onClick={closeEvent}
            >x</span>
            <div className={`flex flex-col mt-[70px] items-center gap-4 p-4`}>
                <h1>{user.name.title} {user.name.first} {user.name.last}</h1>
                <div className={`flex flex-col  gap-4 p-4`}>
                    <p>Email: {user.email}</p>
                    <p>Gênero: {user.gender}</p>
                    <p>Data de nascimento: {new Date(user.dob.date).toLocaleDateString()}</p>
                    <p>Telefone: {user.phone}</p>
                    <p>Nacionalidade {user.location.country}</p>
                    <p>Endereço: {user.location.street.name} {user.location.street.number}</p>
                    <p>Id: {user.login.uuid}</p>
                    {isCopied ? <span className="text-blue-500 text-center">Copied.</span> : (
                        <CopyToClipboard text={`https://challenger-frontend-desenv-software-unifor.vercel.app//dashboard?login=${user.login.username}&page=${user.info.page}&seed=${user.info.seed}&results=${user.info.results}`}
                            onCopy={() => setIsCopied(true)}>
                            <button  className="bg-blue-600 text-white p-4 rounded-xl">Copy URL profile</button>
                        </CopyToClipboard>
                    )}
                </div>
            </div>
        </div>
    )
    
}
