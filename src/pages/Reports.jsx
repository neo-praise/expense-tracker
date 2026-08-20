import Navbar from "../components/Navbar";

export default function Reports({ expenses }) {
  const today = new Date();
  const thisMonth = today.toLocaleString("en-US", {
    month: "long",
  });
  const thisYear = today.toLocaleString("en-US", {
    year: "numeric",
  });
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  // get expenses for the current month
  const currentMonthExpenses = expenses.filter((expense) => {
    const expenseDate = new Date(expense.date);

    return (
      expenseDate.getMonth() === currentMonth &&
      expenseDate.getFullYear() === currentYear
    );
  });

  // barchart weekly spending
  const weeklySpending = currentMonthExpenses.reduce((weeks, expense) => {
    const expenseDate = new Date(expense.date);

    const dayOfMonth = expenseDate.getDate();

    const weekNumber = Math.ceil(dayOfMonth / 7);

    if (!weeks[weekNumber]) {
      weeks[weekNumber] = 0;
    }

    weeks[weekNumber] += expense.amount;

    return weeks;
  }, {});

  const weeklyChartData = Object.entries(weeklySpending).map(
    ([week, amount]) => ({
      week: `Week ${week}`,
      amount,
    }),
  );

  // calculate total spent this month
  const totalCurrentAmount = currentMonthExpenses.reduce((total, expense) => {
    return total + expense.amount;
  }, 0);

  // count expenses this month
  const currentMonthExpenseCount = currentMonthExpenses.length;

  //Group ALL expenses by month
  const monthlyGroups = expenses.reduce((months, expense) => {
    const expenseDate = new Date(expense.date);

    const month = expenseDate.getMonth();
    const year = expenseDate.getFullYear();

    const key = `${year}-${month}`;

    if (!months[key]) {
      months[key] = {
        month,
        year,
        expenses: [],
      };
    }

    months[key].expenses.push(expense);

    return months;
  }, {});

  //Calculate the total and expense count for each month
  const monthlyHistory = Object.values(monthlyGroups).map((month) => {
    const total = month.expenses.reduce((total, expense) => {
      return total + expense.amount;
    }, 0);

    const expenseCount = month.expenses.length;

    const monthName = new Date(month.year, month.month).toLocaleString(
      "en-US",
      {
        month: "long",
      },
    );

    return {
      monthName,
      year: month.year,
      total,
      expenseCount,
      month: month.month,
    };
  });

  // Category spending for current month
  const categorySpending = currentMonthExpenses.reduce(
    (categories, expense) => {
      const category = expense.category;

      if (!categories[category]) {
        categories[category] = 0;
      }

      categories[category] += expense.amount;

      return categories;
    },
    {},
  );

  // Convert the object into an array for JSX
  const categoryChartData = Object.entries(categorySpending).map(
    ([category, amount]) => ({
      category,
      amount,
    }),
  );

  return (
    <>
      <section className="w-full min-h-screen h-auto bg-[#f6f2fe] pb-24">
        <Navbar />

        <div className="w-full h-auto p-3 flex flex-col gap-6 md:flex md:items-center">
          {/* Page Heading */}
          <div className="w-full flex flex-col items-center">
            <span className="text-[21px] font-bold">Reports</span>
            <span className="text-sm text-gray-500">{`${thisMonth} ${thisYear}`}</span>
          </div>

          {/* ================= SPENDING CHART ================= */}
          <div className="w-full md:w-[85%]">
            <div className="w-full mb-3">
              <span className="text-lg font-bold">Spending Chart</span>
              <p className="text-sm text-gray-500">
                Your spending throughout August
              </p>
            </div>

            <div className="w-full bg-white rounded-2xl shadow-xl p-4">
              {/* Chart Header */}
              <div className="w-full flex justify-between items-center mb-6">
                <div>
                  <span className="text-sm text-gray-500">Total spending</span>

                  <p className="text-2xl font-bold">
                    ₦{totalCurrentAmount.toLocaleString()}
                  </p>
                </div>

                <span className="text-sm font-semibold text-gray-500">
                  {`${thisMonth} ${thisYear}`}
                </span>
              </div>

              {/* Simple Bar Chart */}
              <div className="w-full h-52 flex items-end gap-2 sm:gap-4 border-b border-gray-200 pb-1">
                {weeklyChartData.map((week) => {
                  return (
                    <div
                      className="h-full flex-1 flex flex-col justify-end items-center gap-2"
                      key={week.week}
                    >
                      <p className="text-[11px]">
                        ₦{week.amount.toLocaleString()}
                      </p>
                      <div
                        className="w-full max-w-8 h-[30%] bg-[#b9e8da] rounded-t-md"
                        style={{ height: `${week.amount / 1000}rem` }}
                      ></div>
                      <span className="text-[10px] text-gray-500">
                        {week.week}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ================= CATEGORIES ================= */}
          <div className="w-full md:w-[85%]">
            <div className="w-full mb-3">
              <span className="text-lg font-bold">Categories</span>
              <p className="text-sm text-gray-500">
                How much you spent in each category
              </p>
            </div>

            <div className="w-full bg-white rounded-2xl shadow-xl p-4 flex flex-col gap-5">
              {categoryChartData.map((category) => {
                const width =
                  totalCurrentAmount > 0
                    ? (category.amount / totalCurrentAmount) * 100
                    : 0;

                return (
                  <div key={category.category} className="w-full">
                    <div className="w-full flex justify-between items-center mb-2">
                      <span className="text-sm font-semibold">
                        {category.category}
                      </span>

                      <span className="text-sm font-semibold">
                        ₦{category.amount.toLocaleString()}
                      </span>
                    </div>

                    <div className="w-full h-3 bg-[#f0edf8] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-[#b9e8da] rounded-full"
                        style={{ width: `${width}%` }}
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* ================= MONTHLY HISTORY ================= */}
          <div className="w-full md:w-[85%]">
            <div className="w-full mb-3">
              <span className="text-lg font-bold">Monthly History</span>
              <p className="text-sm text-gray-500">
                Your spending from previous months
              </p>
            </div>

            <div className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* August */}
              {monthlyHistory.map((month) => {
                return (
                  <div
                    className="w-full p-4 border-b border-gray-100 flex justify-between items-center"
                    key={`${month.year}-${month.month}`}
                  >
                    <div>
                      <span className="font-bold">
                        {month.monthName} {month.year}
                      </span>
                      <p className="text-sm text-gray-500">
                        {month.expenseCount}{" "}
                        {month.expenseCount === 1 ? "expense" : "expenses"}
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="font-bold">
                        ₦{month.total.toLocaleString()}
                      </span>
                      <span className="text-xl text-gray-400">›</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
