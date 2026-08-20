import { FaHome } from "react-icons/fa";
import { IoIosAdd } from "react-icons/io";
import { GiReceiveMoney } from "react-icons/gi";
import { NavLink } from "react-router";

export default function Navbar({ edit }) {
  return (
    <nav className="w-full h-13 bg-[#fffeff] fixed bottom-0 flex md:sticky md:top-0 md:bg-[#a49ce7] md:px-3">
      <div className="hidden md:w-[70%] md:h-[100%] md:block md:flex md:items-center md:p-3">
        <font className="font-bold text-xl">Expense Tracker</font>
      </div>
      <div className="w-full md:w-[30%] h-[100%] p-2 flex items-center justify-between md:text-white md:justify-end md:gap-0 md:p-0">
        {/* Home  */}
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-[#9478e5] md:text-[#c0f2e6]" : " "
          }
        >
          <div className="w-20 h-10 flex items-center justify-center flex-col">
            <FaHome className="text-3xl md:text-sm" />
            <span className="text-[15px] md:text-sm">Home</span>
          </div>
        </NavLink>

        {/* Add Expenses  */}
        <div className="w-25 h-10 pb-0.6 flex items-center justify-end flex-col relative md:justify-center">
          <NavLink
            to="/addExpenses"
            className={({ isActive }) =>
              isActive ? "text-[#9478e5] md:text-[#c0f2e6]" : ""
            }
          >
            <div className="w-17 h-17 rounded-full bg-[#f6f2fe] absolute bottom-5 flex justify-center items-center left-4 md:hidden">
              <div className="w-[90%] h-[90%] rounded-full bg-[#b9e8dd] relative bottom-1 flex justify-center items-center">
                <IoIosAdd className="text-5xl font-bold" />
              </div>
            </div>
            <span className="text-[15px] text-center leading-tight md:flex md:flex-col md:justify-center md:items-center md:text-sm">
              <IoIosAdd className="hidden md:block text-xl md:text-sm" /> Add
              Expenses
            </span>
          </NavLink>
        </div>

        {/* Expenses  */}
        <NavLink
          to="/expenses"
          className={({ isActive }) =>
            isActive ? "text-[#9478e5] md:text-[#c0f2e6]" : ""
          }
        >
          <div className="w-20 h-10 flex flex-col justify-center items-center">
            <GiReceiveMoney className="text-3xl md:text-sm" />
            <span className="text-[15px] md:text-sm">Expenses</span>
          </div>
        </NavLink>
      </div>
    </nav>
  );
}
