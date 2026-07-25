import { CiCirclePlus } from "react-icons/ci";

export default function Form({ formData, setFormData }) {
  return (
    <>
      {/* Title */}
      <div className="w-full md:w-[60%] h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
        <label htmlFor="title" className="text-[#7c67a0] font-bold">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          placeholder="Enter expense title..."
          className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
        />
      </div>
      {/* Category */}
      <div className="w-full md:w-[60%] h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
        <label htmlFor="category" className="text-[#7c67a0] font-bold">
          Category
        </label>
        <select
          id="category"
          className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
          value={formData.category}
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
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
      <div className="w-full md:w-[60%] h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
        <label htmlFor="amount" className="text-[#7c67a0] font-bold">
          Amount (₦)
        </label>
        <input
          type="number"
          id="amount"
          placeholder="₦0.00"
          className="w-full h-12 mt-2 rounded-lg border outline-none px-3 text-2xl"
          value={formData.amount}
          onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
        />
      </div>
      {/* Date */}
      <div className="w-full md:w-[60%] h-auto bg-white rounded-xl p-3 shadow-xl">
        <label htmlFor="date" className="text-[#7c67a0] font-bold">
          Date
        </label>
        <input
          type="date"
          id="date"
          className="w-full h-12 mt-2 rounded-lg border outline-none px-3"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
      </div>
      {/* Description */}
      <div className="w-full md:w-[60%] h-auto bg-[#feffff] rounded-xl p-3 shadow-xl">
        <label htmlFor="description" className="text-[#7c67a0] font-bold">
          Description
        </label>
        <textarea
          id="description"
          rows="5"
          placeholder="Add notes..."
          className="w-full mt-2 rounded-lg border outline-none p-3 resize-none"
          value={formData.description}
          onChange={(e) =>
            setFormData({ ...formData, description: e.target.value })
          }
        ></textarea>
      </div>
      {/* Button */}
      <button className="w-full md:w-[30%] h-12 rounded-lg bg-[#ac95e5] text-[#f2ecf9] font-semibold cursor-pointer hover:bg-[#9e7ef2] transition flex justify-center items-center gap-2">
        ADD EXPENSE{" "}
        <span className="text-[white]">
          <CiCirclePlus />
        </span>
      </button>
    </>
  );
}
