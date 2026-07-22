import { IoSearch } from "react-icons/io5";

export default function Header() {
  return (
    <div className="w-full h-[110px]">
      <div className="w-full h-[60%] flex justify-between p-3 items-center">
        <font className="font-bold">Expense Tracker</font>
        <div className="w-[60%] h-[85%] flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-[80%] h-full bg-white rounded-l-2xl p-2 outline-none"
          />
          <div className="w-[20%] h-full bg-[#ece4fc] flex items-center justify-center rounded-r-2xl">
            <IoSearch className="text-xl" />
          </div>
        </div>
      </div>
      <div className="w-full h-[40%] flex flex-col pl-3 ">
        <font className="font-bold text-lg">Good Morning!😊</font>
        <span className="text-sm">21st July 2026</span>
      </div>
    </div>
  );
}
