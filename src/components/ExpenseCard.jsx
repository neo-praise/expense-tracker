import DescriptionModal from "./DescriptionModal";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";

export default function ExpenseCard({ showDesc, setShowDesc }) {
  return (
    <>
      <div className="w-full h-22 rounded-2xl bg-[#fefffe] shadow-xl flex">
        {/* Icon */}
        <div className="w-[18%] h-full flex justify-center items-center">
          <div className="w-14 h-14 rounded-full bg-[#dff5ee] flex justify-center items-center">
            🍔
          </div>
        </div>

        {/* Details */}
        <div className="w-[47%] h-full flex flex-col justify-center">
          <span
            className="font-bold text-lg"
            onClick={(e) => setShowDesc(true)}
          >
            Trader Joe's
          </span>
          <span className="text-sm text-gray-500">Food $ Drink</span>
        </div>

        {/* Amount */}
        <div className="w-[20%] h-full flex flex-col justify-center items-end">
          <span className="font-bold text-lg">₦8,000</span>
          <span className="text-sm text-gray-500">Jul 21</span>
        </div>

        {/* Actions */}
        <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
          <span className="cursor-pointer text-4xl text-green-700">
            <CiEdit />
          </span>

          <span className="cursor-pointer text-3xl text-red-700">
            <MdOutlineDeleteOutline />
          </span>
        </div>
      </div>
      {showDesc && (
        <DescriptionModal
          description="Bought from shoprite"
          onClose={() => setShowDesc(false)}
        />
      )}
    </>
  );
}
