
type CardGitPersonProps = {
    name:string
    profile:string
    enroll:string
}

export default function CardGitPerson({name,profile,enroll}:CardGitPersonProps) {
  return (
    <a href={`https://github.com/${profile}`} target="_blank" rel="noreferrer">
        <div className={`flex flex-col items-center p-8 transition-colors duration-200 transform 
                        cursor-pointer group hover:bg-blue-600 rounded-xl border-2 border-solid border-white
                        max-w-[15rem] text-center h-80 hover:scale-105 transition-transform`}>
            <img    className="object-cover w-32 h-32 rounded-full ring-4 ring-gray-300 grayscale-[100%] group-hover:grayscale-0" 
                    src={`https://github.com/${profile}.png`} 
                    alt="" />
            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{name}</h1>
            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{enroll}</p>
            
            <div className="flex mt-3 -mx-2">
                
            </div>
        </div>
    </a>
  )
}
