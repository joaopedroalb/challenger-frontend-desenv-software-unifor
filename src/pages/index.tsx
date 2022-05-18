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

const TECHNOLOGY_LIST = [
  {name:"Typescript",url:"https://www.typescriptlang.org/docs/"},
  {name:"HTML",url:"https://developer.mozilla.org/pt-BR/docs/Web/HTML"},
  {name:"ReactJS",url:"https://pt-br.reactjs.org/docs/getting-started.html"},
  {name:"NextJS",url:"https://nextjs.org/docs"},
  {name:"Tailwind",url:"https://tailwindcss.com/"},
  {name:"react-query",url:"https://react-query.tanstack.com/"},
  {name:"react-copy-to-clipboard",url:"https://www.npmjs.com/package/react-copy-to-clipboard"},
]

const Home: NextPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start gap-12 py-8 bg-black text-white">
      
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

      <div className={`w-full flex flex-col justify-center items-center gap-8 flex-wrap`}>
        <h1 className={`text-6xl font-sans font-bold text-center`}>
          Tecnologias Usadas
        </h1>
        <div className="flex flex-col gap-6 items-center">
          {
            TECHNOLOGY_LIST.map((tec,index)=>{
              return <a key={index}
                        className={`text-2xl font-extralight hover:text-blue-400 transition-colors`}
                        href={tec.url}
                        target="_blank" 
                        rel="noreferrer"
                      >
                        {index+1}. {tec.name}
                      </a>
            })
          }
        </div>
      </div>
      <div className="flex gap-4 flex-wrap">
        <a href="https://lab.coodesh.com/public-challenges/front-end-challenge-2021" target="_blank" rel="noreferrer">
            <button className={`bg-white text-black p-4 rounded-xl transition-colors
                                hover:bg-black hover:text-white border-2 border-white duration-500 font-semibold`}>
              Desafio proposto
            </button>
        </a>
        <Link href="/dashboard">
          <button className={`bg-white text-black p-4 rounded-xl transition-colors font-semibold
                            hover:bg-black hover:text-white border-2 border-white duration-500`}>
            Go to challenger
          </button>
        </Link>
      </div>
    </div>
  )
};

export default Home;
