import { GiCoffeeCup } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";

export default function RecentTransactions() {
  return (
    <div className="w-full h-auto p-3">
      <div className="w-full h-[10%]">
        <span className="font-bold text-xl">Recent Transactions</span>
      </div>
      <div className="w-full h-[90%]">
        <div className="w-full h-[60px] flex items-center">
          <div className="w-[20%] h-[80%] flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
              <span className="text-black text-[24px]">
                <GiCoffeeCup />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
            <font className="font-bold">Coffee</font>
            <font className="text-sm">Pastry Shop</font>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
            <font className="font-bold">$15</font>
            <font className="text-[10px]">May 22, 10:30AM</font>
          </div>
        </div>

        <div className="w-full h-[60px] flex items-center">
          <div className="w-[20%] h-[80%] flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
              <span className="text-black text-[24px]">
                <FaCartShopping />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
            <font className="font-bold">Groceries</font>
            <font className="text-[10px]">Supermarket</font>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
            <font className="font-bold">$85</font>
            <font className="text-[10px]">May 22, 10:30AM</font>
          </div>
        </div>

        <div className="w-full h-[60px] flex items-center">
          <div className="w-[20%] h-[80%] flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
              <span className="text-black text-[24px]">
                <FaCar />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
            <font className="font-bold">Transportation</font>
            <font className="text-[10px]">Ride Share</font>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
            <font className="font-bold">$22</font>
            <font className="text-[10px]">May 22, 10:30AM</font>
          </div>
        </div>

        <div className="w-full h-[60px] flex items-center">
          <div className="w-[20%] h-[80%] flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
              <span className="text-black text-[24px]">
                <FaCar />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
            <font className="font-bold">Transportation</font>
            <font className="text-[10px]">Ride Share</font>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
            <font className="font-bold">$22</font>
            <font className="text-[10px]">May 22, 10:30AM</font>
          </div>
        </div>

        <div className="w-full h-[60px] flex items-center">
          <div className="w-[20%] h-[80%] flex justify-center items-center">
            <div className="w-[45px] h-[45px] bg-[#deccf7] rounded-full flex justify-center items-center">
              <span className="text-black text-[24px]">
                <FaCar />
              </span>
            </div>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center">
            <font className="font-bold">Transportation</font>
            <font className="text-[10px]">Ride Share</font>
          </div>
          <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
            <font className="font-bold">$22</font>
            <font className="text-[10px]">May 22, 10:30AM</font>
          </div>
        </div>
      </div>
    </div>
  );
}
