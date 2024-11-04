import { useState } from "react";
import AdTopAndBottom from "./AdTopAndBottom";
import Navbar from "./Navbar";
import { IoIosSearch } from "react-icons/io";

const Home = () => {
  const [query, setQuery] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    console.log("Searching for:", query);
  };
  return (
    <div>
      <Navbar></Navbar>
      <div className="flex bg-[#EBF4FF] pb-44 pl-60 pr-[60px] pt-10">
        {/* left part  */}
        <div className="h-screen w-[396px] border border-red-400">side bar</div>
        {/* middle part */}
        <div className="">
          <AdTopAndBottom></AdTopAndBottom>
          <form onSubmit={handleSearch} className="mt-10">
            <div className="flex h-[52.27px] w-[1016.98px] items-center justify-start rounded-[10px] bg-white p-[14px] shadow">
              <IoIosSearch className="relative h-6 w-6 text-black/70" />
              <input
                type="text"
                name="query"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-2.5 font-['Karla'] text-lg font-normal text-black/70 outline-none"
                placeholder="Search"
              />
            </div>
          </form>
        </div>
        {/* right part */}
      </div>
    </div>
  );
};

export default Home;
