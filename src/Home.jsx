import AdTopAndBottom from "./AdTopAndBottom";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="bg-[#EBF4FF] pb-44 pl-60 pr-[60px] pt-10 flex ">
        {/* left part  */}
        <div className="h-screen w-[396px] border border-red-400">side bar</div>
        {/* middle part */}
        <div className="">
          <AdTopAndBottom></AdTopAndBottom>
        </div>{" "}
        {/* right part */}
      </div>
    </div>
  );
};

export default Home;
