import Navbar from "../components/Navbar";
import Header from "../components/Header";
import RecentTransactions from "../components/RecentTransactions";
import { formatDate } from "../utilities/formatDate";
import { GiTakeMyMoney } from "react-icons/gi";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { GiWallet } from "react-icons/gi";

export default function Dashboard({ expenses, edit }) {
  //Total Expenses
  const totalExpense = expenses.reduce((total, eachExpense) => {
    return total + eachExpense.amount;
  }, 0);

  //Highest Expense
  const highestExpense =
    expenses.length === 0
      ? null
      : expenses.reduce((highest, eachExpense) => {
          if (eachExpense.amount > highest.amount) {
            return eachExpense;
          }
          return highest;
        });

  //Lowest Expense
  const lowestExpense =
    expenses.length === 0
      ? null
      : expenses.reduce((lowest, eachExpense) => {
          if (eachExpense.amount < lowest.amount) {
            return eachExpense;
          }
          return lowest;
        });

  return (
    <section className="w-full h-auto bg-[#f6f2fe] pb-18 md:pb-7 md:flex md:flex-col">
      <Navbar />
      <Header />

      <div className="w-[100%] h-auto p-3 flex flex-col gap-3 md:items-center">
        {/* First Row  */}
        <div className="w-full h-33 flex gap-3 md:w-[90%]">
          {/* Total Expenses  */}
          <div className="w-1/2 h-[100%] bg-[#b9e8da] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Total Expenses
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <GiTakeMyMoney />
              </span>
            </div>
            <div className="w-full h-8 md:h-5 flex justify-center flex-col pl-2">
              <font className="text-2xl font-bold">{expenses.length}</font>
              <font className="text-[12px] md:text-sm ">
                {formatDate(new Date(), true)}
              </font>
            </div>
          </div>
          {/* Highest Expense  */}
          <div className="w-1/2 h-[100%] bg-[#4f8edb] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Highest Expense
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <FaArrowUp />
              </span>
            </div>
            <div className="w-full h-8 md:h-5 flex justify-center flex-col pl-2">
              <font className="text-[19px] font-bold">
                ₦{highestExpense ? highestExpense.amount : "0"}
              </font>
              <font className="text-[12px] md:text-sm leading-[15px]">
                {highestExpense ? (
                  `Max spent on ${formatDate(highestExpense.date)}`
                ) : (
                  <span className="text-sm">No expenses yet</span>
                )}
              </font>
            </div>
          </div>
        </div>

        {/* Second Row  */}
        <div className="w-full h-33 flex gap-3 md:w-[90%]">
          {/* Lowest Expense  */}
          <div className="w-1/2 h-[100%] bg-[#f77348] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Lowest Expense
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <FaArrowDown />
              </span>
            </div>
            <div className="w-full h-8 md:h-5 flex justify-center flex-col pl-2">
              <font className="text-[19px] font-bold">
                ₦{lowestExpense ? lowestExpense.amount : "0"}
              </font>
              <font className="text-[12px] md:text-sm leading-[15px]">
                {lowestExpense ? (
                  `Min spent on ${formatDate(lowestExpense.date)}`
                ) : (
                  <span className="text-sm">No expenses yet</span>
                )}
              </font>
            </div>
          </div>
          {/* Total Amount  */}
          <div className="w-1/2 h-[100%] bg-[#ddcaf6] rounded-lg p-2">
            <div className="w-full h-10 font-bold flex items-center pl-2">
              Total Amount
            </div>
            <div className="w-full h-10 font-bold flex justify-end items-center pr-8">
              <span className="text-4xl">
                <GiWallet />
              </span>
            </div>
            <div className="w-full h-8 md:h-5 flex justify-center flex-col pl-2">
              <font className="text-[19px] font-bold">₦{totalExpense}</font>
              <font className="text-[12px] md:text-sm leading-[15px]">
                {expenses.length === 0 ? (
                  <span className="text-sm">No expenses yet</span>
                ) : (
                  "Total Spent this month"
                )}
              </font>
            </div>
          </div>
        </div>
      </div>

      <RecentTransactions />
    </section>
  );
}
