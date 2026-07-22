import { FaHome } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router";

export default function Navbar() {
  return (
    <nav className="w-full h-13 bg-[#fffeff] fixed bottom-0 p-2 flex items-center justify-between">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "text-[#9478e5]" : " ")}
      >
        <div className="w-20 h-10 flex items-center justify-center flex-col">
          <FaHome className="text-3xl" />
          <span className="text-[15px]">Home</span>
        </div>
      </NavLink>

      <div className="w-25 h-10 pb-0.6 flex items-center justify-end flex-col relative">
        <NavLink
          to="/addExpenses"
          className={({ isActive }) => (isActive ? "text-[#9478e5]" : "")}
        >
          <div className="w-17 h-17 rounded-full bg-[#f6f2fe] absolute bottom-5 flex justify-center items-center left-4">
            <div className="w-[90%] h-[90%] rounded-full bg-[#b9e8dd] relative bottom-1 flex justify-center items-center">
              <IoIosAdd className="text-5xl font-bold" />
            </div>
          </div>
          <span className="text-[15px] text-center leading-tight">
            Add Expenses
          </span>
        </NavLink>
      </div>

      <NavLink
        to="/expenses"
        className={({ isActive }) => (isActive ? "text-[#9478e5]" : "")}
      >
        <div className="w-20 h-10 flex flex-col justify-center items-center">
          <GiReceiveMoney className="text-3xl" />
          <span className="text-[15px]">Expenses</span>
        </div>
      </NavLink>
    </nav>
  );
}
