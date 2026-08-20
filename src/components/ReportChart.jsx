import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router";
import { formatDate } from "../utilities/formatDate";
import Reports from "../pages/Reports";

export default function ReportChart({ expenses }) {
  const categoryTotals = expenses.reduce(
    (totals, expense) => {
      if (totals[expense.category] !== undefined) {
        totals[expense.category] += expense.amount;
      }

      return totals;
    },
    { Food: 0, Transport: 0, Bills: 0, Shopping: 0, Supermarket: 0 },
  );

  const highestTotal = Math.max(...Object.values(categoryTotals));
  const foodWidth = (categoryTotals.Food / highestTotal) * 100;
  const transportWidth = (categoryTotals.Transport / highestTotal) * 100;
  const billsWidth = (categoryTotals.Bills / highestTotal) * 100;
  const shoppingWidth = (categoryTotals.Shopping / highestTotal) * 100;
  const supermarketWidth = (categoryTotals.Supermarket / highestTotal) * 100;

  const now = new Date();
  const recentMonth = now.toLocaleString("en-US", {
    month: "long",
  });
  const recentYear = now.toLocaleString("en-US", {
    year: "numeric",
  });

  return (
    <div className="w-full p-3 flex flex-col gap-2">
      {/* Section heading */}
      <div className="w-full mb-3">
        <h2 className="text-lg font-bold">Monthly Spending</h2>
        <p className="text-sm text-gray-500">{`${recentMonth} ${recentYear}`}</p>
      </div>

      {/* Chart card */}
      <div className="w-full bg-white rounded-xl shadow-xl p-3 mt-3 flex flex-col gap-5">
        {/* Food  */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Food</span>

              <span className="text-sm font-semibold">
                ₦{categoryTotals.Food.toLocaleString()}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-4 bg-[#f0edf8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b9e8da] rounded-full"
                style={{ width: `${foodWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Transport  */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            {/* Category name + amount */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Transport</span>

              <span className="text-sm font-semibold">
                ₦{categoryTotals.Transport.toLocaleString()}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-4 bg-[#f0edf8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b9e8da] rounded-full"
                style={{ width: `${transportWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Supermarket  */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            {/* Category name + amount */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Supermarket</span>

              <span className="text-sm font-semibold">
                ₦{categoryTotals.Supermarket.toLocaleString()}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-4 bg-[#f0edf8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b9e8da] rounded-full"
                style={{ width: `${supermarketWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Bills  */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            {/* Category name + amount */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Bills</span>

              <span className="text-sm font-semibold">
                ₦{categoryTotals.Bills.toLocaleString()}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-4 bg-[#f0edf8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b9e8da] rounded-full"
                style={{ width: `${billsWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Shopping  */}
        <div className="flex flex-col gap-5">
          <div className="w-full">
            {/* Category name + amount */}
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold">Shopping</span>

              <span className="text-sm font-semibold">
                ₦{categoryTotals.Shopping.toLocaleString()}
              </span>
            </div>

            {/* Bar */}
            <div className="w-full h-4 bg-[#f0edf8] rounded-full overflow-hidden">
              <div
                className="h-full bg-[#b9e8da] rounded-full"
                style={{ width: `${shoppingWidth}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* View report button */}
        <div className="w-full flex items-center justify-center h-6 md:h-8">
          {expenses.length === 0 ? (
            <button className="w-1/2 h-full rounded bg-[#8f72d9] text-white font-semibold  cursor-pointer text-sm flex items-center justify-center gap-1">
              No Transaction
            </button>
          ) : (
            <Link
              to="/reports"
              className="flex items-center justify-center gap-2 w-full h-full"
            >
              <button className="w-[60%] h-full rounded bg-[#8f72d9] text-white font-semibold hover:bg-[#8063cd] transition cursor-pointer text-sm flex items-center justify-center gap-1">
                View Full Report <FaLongArrowAltRight />
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
