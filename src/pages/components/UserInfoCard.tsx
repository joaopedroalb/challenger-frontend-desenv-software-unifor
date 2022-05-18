import { UserResult } from "../../services/users/types";

type UserInfoCardProps = {
  user: UserResult | null;
  closeEvent: ()=>void
};

export default function UserInfoCard({ user,closeEvent }: UserInfoCardProps) {
    
    if(!user) return <></>
    
    return (
        <div className="w-[450px] max-w-[80%] bg-white flex flex-col h-[400px] max-h-[80%] relative" 
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
                <div>
                    <p>Email: {user.email}</p>
                    <p>Gênero: {user.gender}</p>
                    <p>Data de nascimento: {new Date(user.dob.date).toLocaleDateString()}</p>
                    <p>Telefone: {user.phone}</p>
                    <p>Nacionalidade {user.location.country}</p>
                    <p>Endereço: {user.location.street.name} {user.location.street.number}</p>
                    <p>URL {user.nat}</p>
                    <p>Id: {user.login.uuid}</p>
                </div>
            </div>
        </div>
    )
    
}