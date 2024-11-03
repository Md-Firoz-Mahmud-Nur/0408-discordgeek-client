const Navbar = () => {
  return (
    <div className="bg-[#092334] h-[332px]">
      <div className="w-full flex justify-end">
        <button className="py-[9px] bg-[#3B9DDD] px-5 rounded-[5px] mt-9 mr-24 flex text-lg">
          Login With Discord
        </button>
      </div>
      <div className="flex flex-col items-center">
        <h1 className="text-white  mt-[34px] text-7xl h-full  ">DiscordGeek</h1>
        <p className="text-[22px] text-[#FFFFFFB2]">
          Number 1 Skythz Marketplace
        </p>
      </div>
    </div>
  );
};

export default Navbar;
