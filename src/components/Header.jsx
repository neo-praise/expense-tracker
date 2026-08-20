import { BsEmojiSunglasses } from "react-icons/bs";

export default function Header() {
  return (
    <div className="w-full h-[110px] md:flex md:flex-col md:justify-center md:items-center">
      {/* Expense Tracker and Search Bar  */}
      <div className="w-full h-[60%] flex justify-between p-3 items-center md:justify-center md:w-[90%]">
        <font className="font-bold md:hidden">Expense Tracker</font>
        <div className="w-[50%] h-[85%] flex items-center">
          <input
            type="text"
            placeholder="Built by codeKraft"
            className="w-[80%] h-full bg-white rounded-l-2xl p-2 outline-none text-[12px] md:text-lg text-gray-600"
            disabled
          />
          <div className="w-[20%] h-full bg-[#ece4fc] flex items-center justify-center rounded-r-2xl">
            <BsEmojiSunglasses />
          </div>
        </div>
      </div>
      {/* Greeting  */}
      <div className="w-full h-[40%] flex flex-col pl-3 md:w-[90%]">
        <font className="font-bold text-lg">Welcome!😊</font>
        <span className="text-sm"></span>
      </div>
    </div>
  );
}
