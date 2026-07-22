import Navbar from "../components/Navbar";
import { CiCirclePlus } from "react-icons/ci";

export default function AddExpenses() {
  return (
    <section className="w-full h-auto min-h-screen bg-[#f6f2fe] pb-22">
      <div className="w-full h-auto p-3">
        <div className="w-full h-10 flex items-center justify-center">
          <span className="text-[21px] font-bold">Add New Expense</span>
        </div>

        <form className="w-full h-auto mt-3 flex flex-col gap-3">
          {/* Title */}
          <div className="w-full h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
            <label htmlFor="title" className="text-[#7c67a0] font-bold">
              Title
            </label>
            <input
              type="text"
              id="title"
              placeholder="Enter expense title..."
              className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
            />
          </div>
          {/* Category */}
          <div className="w-full h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
            <label htmlFor="category" className="text-[#7c67a0] font-bold">
              Category
            </label>
            <select
              id="category"
              className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
            >
              <option>Select Category</option>
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
          {/* Amount */}
          <div className="w-full h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
            <label htmlFor="amount" className="text-[#7c67a0] font-bold">
              Amount (₦)
            </label>
            <input
              type="number"
              id="amount"
              placeholder="₦0.00"
              className="w-full h-12 mt-2 rounded-lg border outline-none px-3 text-2xl"
            />
          </div>
          {/* Date */}
          <div className="w-full h-auto bg-white rounded-xl p-3 shadow-xl">
            <label htmlFor="date" className="text-[#7c67a0] font-bold">
              Date
            </label>
            <input
              type="date"
              id="date"
              className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
            />
          </div>
          {/* Description */}
          <div className="w-full h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
            <label htmlFor="description" className="text-[#7c67a0] font-bold">
              Description
            </label>
            <textarea
              id="description"
              rows="5"
              placeholder="Add notes..."
              className="w-full mt-2 rounded-lg border outline-none p-3 resize-none"
            ></textarea>
          </div>
          {/* Button */}
          <button className="w-full h-12 rounded-lg bg-[#ac95e5] text-[#f2ecf9] font-semibold cursor-pointer hover:bg-[#9e7ef2] transition flex justify-center items-center gap-2">
            ADD EXPENSE{" "}
            <span className="text-[white]">
              <CiCirclePlus />
            </span>
          </button>
        </form>
      </div>
      <Navbar />
    </section>
  );
}
