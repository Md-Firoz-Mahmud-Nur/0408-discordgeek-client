const DeveloperDashboard = () => {
  return (
    <div className="h-screen w-full bg-[#ebf4ff]">
      <div className="pt-12 flex justify-center gap-8 font-['Karla'] text-lg">
        <button className="rounded-lg bg-[#d6e9ff] px-6 py-4 font-bold text-[#092334]">
          My Resources
        </button>
        <button className="text-[#092334] opacity-70">Profile Settings</button>
        <button className="text-[#092334] opacity-70">
          Request Payout ($981.82)
        </button>
      </div>

      <div className="mx-auto my-8 w-[50%] border-t border-black/30"></div>

      <div className="mx-auto max-w-[845px] rounded-lg bg-white p-4 shadow-lg">
        <div className="flex items-center justify-between text-lg font-bold text-[#092334]">
          <div>Name</div>
          <div>Price</div>
          <div>Sold</div>
          <div>Total Profit</div>
          <div>Action</div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="text-black/70">Auto-Moderator</div>
          <div className="text-black/70">$18.99</div>
          <div className="text-black/70">127</div>
          <div className="text-black/70">$2411.73</div>
          <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666]">
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="text-black/70">Auto-Moderator</div>
          <div className="text-black/70">$18.99</div>
          <div className="text-black/70">127</div>
          <div className="text-black/70">$2411.73</div>
          <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666]">
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="text-black/70">Auto-Moderator</div>
          <div className="text-black/70">$18.99</div>
          <div className="text-black/70">127</div>
          <div className="text-black/70">$2411.73</div>
          <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666]">
            Edit
          </button>
        </div>
        <div className="flex items-center justify-between border-t border-gray-200 py-4">
          <div className="text-black/70">Auto-Moderator</div>
          <div className="text-black/70">$18.99</div>
          <div className="text-black/70">127</div>
          <div className="text-black/70">$2411.73</div>
          <button className="rounded-lg bg-[#d6e9ff] px-4 py-1 text-[#666666]">
            Edit
          </button>
        </div>

        <div className="mt-4 flex justify-center">
          <button className="rounded-lg border-2 border-[#092334]/25 px-6 py-2 font-medium text-[#092334]/75">
            New
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeveloperDashboard;
