import type { NextPage } from "next";
import TableSearch from "./components/TableSearch";

const Home: NextPage = () => {
  return (
    <div className={`w-full flex-none text-sm font-medium text-slate-700 gap-4 bg-gray-100 min-h-screen`}>
      <div>Navbar</div>
      <TableSearch />
    </div>
  );
};

export default Home;
