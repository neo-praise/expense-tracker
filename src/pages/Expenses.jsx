import Navbar from "../components/Navbar";
import NoData from "../components/NoData";
import ExpenseCard from "../components/ExpenseCard";
import { CiSearch } from "react-icons/ci";

export default function Expenses({
  showDesc,
  setShowDesc,
  expenses,
  setExpenses,
  validation,
  setValidation,
  selectedID,
  setSelectedID,
  edit,
  setEdit,
  setFormData,
}) {
  return (
    <>
      <Navbar />
      <section
        className={
          expenses.length === 0
            ? "w-full h-screen bg-[#f6f2fe] pb-24 flex justify-center items-center md:h-[calc(100vh-53px)]"
            : "w-full min-h-screen bg-[#f6f2fe] pb-24 md:pb-7"
        }
      >
        {expenses.length === 0 ? (
          <NoData />
        ) : (
          <div className="w-full h-auto p-3 md:flex md:flex-col md:items-center">
            {/* Page Title */}
            <div className="w-full md:w-[60%] h-10 flex justify-center items-center">
              <span className="text-2xl font-bold">Expenses</span>
            </div>
            {/* Search */}
            <div className="w-full md:w-[45%] h-12 mt-3 bg-[#eff1fc] rounded-full shadow-2xl flex items-center px-3 sticky top-0 md:top-0">
              <span className="text-gray-400 text-xl">
                <CiSearch />
              </span>
              <input
                type="text"
                placeholder="Search expenses..."
                className="w-full h-full px-3 outline-none bg-transparent text-[#111]"
              />
            </div>
            {/* Category */}
            <div className="w-full md:w-[80%] h-auto flex justify-between mt-4 sticky top-12 md:top-13 bg-[#f6f2fe]">
              <div className="w-[48%] pt-2">
                <p className="text-sm mb-1 font-semibold">Category</p>
                <select className="w-full h-11 rounded-full outline-none px-3 bg-[#ecf8f8]">
                  <option>All Categories</option>
                  <option value="Food">Food</option>
                  <option value="Supermarket">Supermarket</option>
                  <option value="Transport">Transport</option>
                  <option value="Bills">Bills</option>
                  <option value="Shopping">Shopping</option>
                  <option value="Entertainment">Entertainment</option>
                  <option value="Health">Health</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Sort By  */}
              <div className="w-[48%] pt-2">
                <p className="text-sm mb-1 font-semibold">Sort By</p>
                <select className="w-full h-11 rounded-full outline-none px-3 bg-[#e5dbfb]">
                  <option>Newest</option>
                  <option>Oldest</option>
                  <option>Highest Amount</option>
                  <option>Lowest Amount</option>
                </select>
              </div>
            </div>

            {/* Expense List */}
            <div className="w-full md:w-[80%] h-auto flex flex-col gap-1.5 pt-3">
              {/* Expense Card */}
              <ExpenseCard
                showDesc={showDesc}
                setShowDesc={setShowDesc}
                expenses={expenses}
                setExpenses={setExpenses}
                validation={validation}
                setValidation={setValidation}
                selectedID={selectedID}
                setSelectedID={setSelectedID}
                edit={edit}
                setEdit={setEdit}
                setFormData={setFormData}
              />
            </div>
          </div>
        )}
      </section>
    </>
  );
}
