import type { NextPage } from "next";
import Link from "next/link";
import CardGitPerson from "../components/CardGitPerson";

const PERSONS_LIST = [
  {
    name:"João Pedro Albuquerque",
    profile:"joaopedroalb",
    enroll:"1710589"
  },
  {
    name:"Patrick Martins",
    profile:"pattrickx",
    enroll:"1711010"
  },
  {
    name:"Edson Holanda",
    profile:"EdsonHTJ",
    enroll:"1710829"
  }
]

const Home: NextPage = () => {
  return (
    <div className="w-screen min-h-screen flex flex-col items-center justify-start gap-8 pt-8 bg-black text-white">
      
      <div className={`w-full flex flex-col justify-center items-center gap-8 flex-wrap`}>
        <h1 className={`text-7xl font-sans font-bold`}>
          Grupo
        </h1>
        <div className={`w-full flex justify-center gap-4 flex-wrap`}>
        {PERSONS_LIST.map(person=>{
          return <CardGitPerson
                    profile={person.profile}
                    name={person.name}
                    enroll={person.enroll}
                    key={person.enroll}
                  />
        })}
        </div>
      </div>
      
      <Link href="/dashboard">
        <button className="bg-white text-black p-4 rounded-xl hover:scale-[1.02] transition-transform">Go to challenger</button>
      </Link>
    </div>
  )
};

export default Home;
