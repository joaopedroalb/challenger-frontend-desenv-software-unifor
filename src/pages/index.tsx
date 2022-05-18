import type { NextPage } from "next";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-black">
      <Link href="/dashboard">
        <button className="bg-white text-black p-4 rounded-xl">Go to dashboard</button>
      </Link>
    </div>
  )
};

export default Home;
