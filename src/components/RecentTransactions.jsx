import { GiCoffeeCup } from "react-icons/gi";
import { FaCartShopping } from "react-icons/fa6";
import { FaCar } from "react-icons/fa6";
import mobileImage from "../assets/mobile.png";

export default function RecentTransactions() {
  return (
    <div className="w-full h-auto p-3 md:flex md:flex-col md:items-center">
      {/* Recent Transactions Header */}
      <div className="w-full h-[10%] md:w-[90%]">
        <span className="font-bold text-xl">Recent Transactions</span>
      </div>

      {/* Parent  */}
      <div className="w-full h-auto md:block md:flex md:w-[90%]">
        {/* Recent Transaction Data  */}
        <div className="w-full h-auto md:flex md:flex-col md:w-[60%]">
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
              <font className="text-sm">Supermarket</font>
            </div>
            <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
              <font className="font-bold">$85</font>
              <font className="text-[10px]">May 21, 4:15PM</font>
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
              <font className="text-sm">Ride Share</font>
            </div>
            <div className="w-[40%] h-[80%] flex flex-col leading-[17px] justify-center items-end pr-5">
              <font className="font-bold">$22</font>
              <font className="text-[10px]">May 20, 8:00AM</font>
            </div>
          </div>
        </div>

        {/* Mobile Phone Image  */}
        <div className="hidden md:block md:w-[40%] md:h-auto md:flex justify-center items-center">
          <div className="md:w-[40%] md:h-auto md:flex md:justify-center md:items-center">
            <img src={mobileImage} alt="Mobile View" />
          </div>
        </div>
      </div>
    </div>
  );
}
