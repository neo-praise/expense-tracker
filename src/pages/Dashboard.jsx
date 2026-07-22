import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RecentTransactions from "../components/RecentTransactions";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

export default function Dashboard() {
  return (
    <section className="w-full h-auto bg-[#f6f2fe] pb-15">
      <Header />

      <div className="w-[100%] h-auto p-3 flex flex-col gap-3">
        <div className="w-full h-33 flex gap-3">
          <div className="w-1/2 h-[100%] bg-[#b9e8da] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Total Expenses
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <GiTakeMyMoney />
              </span>
            </div>
            <div className="w-full h-5 flex justify-center flex-col pl-2">
              <font className="text-2xl font-bold">0</font>
              <font className="text-sm">21st July 2026</font>
            </div>
          </div>

          <div className="w-1/2 h-[100%] bg-[#4f8edb] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Highest Expense
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <FaArrowUp />
              </span>
            </div>
            <div className="w-full h-5 flex justify-center flex-col pl-2">
              <font className="text-2xl font-bold">$0</font>
              <font className="text-sm leading-[15px]">
                Max spent on 15 May
              </font>
            </div>
          </div>
        </div>

        <div className="w-full h-33 flex gap-3">
          <div className="w-1/2 h-[100%] bg-[#f77348] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Lowest Expense
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <FaArrowDown />
              </span>
            </div>
            <div className="w-full h-5 flex justify-center flex-col pl-2">
              <font className="text-2xl font-bold">$0</font>
              <font className="text-sm leading-[15px]">
                Min spent on 08 May
              </font>
            </div>
          </div>

          <div className="w-1/2 h-[100%] bg-[#ddcaf6] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Total Amount
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <GiWallet />
              </span>
            </div>
            <div className="w-full h-5 flex justify-center flex-col pl-2">
              <font className="text-2xl font-bold">$0</font>
              <font className="text-sm leading-[15px]">
                Total Spent this month
              </font>
            </div>
          </div>
        </div>
      </div>

      <RecentTransactions />

      <Navbar />
    </section>
  );
}
