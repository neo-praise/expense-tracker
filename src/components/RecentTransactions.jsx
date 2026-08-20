import { Link } from "react-router";
import { FaLongArrowAltRight } from "react-icons/fa";
import ReportChart from "./ReportChart";
import { formatDate } from "../utilities/formatDate";
import { PiBowlFood } from "react-icons/pi"; //Food
import { BsFillBasketFill } from "react-icons/bs"; //Supermarket
import { FaCar } from "react-icons/fa6"; //Transport
import { FaMoneyBillWave } from "react-icons/fa"; //Bills
import { FaCartShopping } from "react-icons/fa6"; //Shopping
import { PiMaskHappyThin } from "react-icons/pi"; //Entertainment
import { GiHealthNormal } from "react-icons/gi"; //Health
import { MdOutlineEmergency } from "react-icons/md"; //Other

export default function RecentTransactions({ expenses }) {
  const recentExpenses = expenses.slice(0, 5);

  const categoryIcons = {
    Food: PiBowlFood,
    Supermarket: BsFillBasketFill,
    Transport: FaCar,
    Bills: FaMoneyBillWave,
    Shopping: FaCartShopping,
    Entertainment: PiMaskHappyThin,
    Health: GiHealthNormal,
    Other: MdOutlineEmergency,
  };
  return (
    <div className="w-full h-auto p-3 md:flex md:flex-col md:items-center">
      {/* Recent Transactions Header */}
      <div className="w-full h-[10%] md:w-[90%]">
        <span className="font-bold text-xl">Recent Transactions</span>
      </div>

      {/* Parent  */}
      <div className="w-full h-auto md:block md:flex md:w-[90%] md:shadow-2xl md:gap-3">
        {/* Recent Transaction Data  */}
        <div className="w-full h-auto md:flex md:flex-col md:w-[50%] flex flex-col items-center pb-3 gap-2 md:gap-3">
          {recentExpenses.length === 0 ? (
            <span className="text-red-700 text-center">
              No transactions available.
            </span>
          ) : (
            <>
              {recentExpenses.map((expense) => {
                const Icon = categoryIcons[expense.category];
                return (
                  <div
                    className="w-full h-[60px] flex items-center shadow"
                    key={expense.id}
                  >
                    <div className="w-[20%] h-[80%] flex justify-center items-center">
                      <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
                        <span className="text-black text-[24px]">
                          <Icon />
                        </span>
                      </div>
                    </div>
                    <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
                      <font className="font-bold">{expense.title}</font>
                      <font className="text-sm text-gray-700">
                        {expense.category}
                      </font>
                    </div>
                    <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
                      <font className="font-bold">
                        ₦{expense.amount.toLocaleString()}
                      </font>
                      <font className="text-[12px] text-gray-700">
                        {formatDate(expense.date)}
                      </font>
                    </div>
                  </div>
                );
              })}
            </>
          )}

          {recentExpenses.length === 0 ? (
            ""
          ) : (
            <div className="flex justify-center items-center bg-[#8f72d9] w-[60%] text-white font-semibold rounded p-1 text-sm hover:bg-[#8063cd] h-6 md:h-8">
              <Link
                to="/expenses"
                className="flex gap-1 justify-center items-center"
              >
                View All Transactions <FaLongArrowAltRight />
              </Link>
            </div>
          )}
        </div>

        {/* Report Chart  */}
        <div className="w-full md:w-[50%] md:h-auto md:flex justify-center items-center md:shadow-xl md:rounded">
          <ReportChart expenses={expenses} />
        </div>
      </div>
    </div>
  );
}
