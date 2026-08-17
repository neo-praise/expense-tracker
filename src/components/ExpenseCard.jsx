import DescriptionModal from "./DescriptionModal";
import { formatDate } from "../utilities/formatDate";
import Validation from "./Validation";
import { useNavigate } from "react-router";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { PiBowlFood } from "react-icons/pi"; //Food
import { BsFillBasketFill } from "react-icons/bs"; //Supermarket
import { FaCar } from "react-icons/fa6"; //Transport
import { FaMoneyBillWave } from "react-icons/fa"; //Bills
import { FaCartShopping } from "react-icons/fa6"; //Shopping
import { PiMaskHappyThin } from "react-icons/pi"; //Entertainment
import { GiHealthNormal } from "react-icons/gi"; //Health
import { MdOutlineEmergency } from "react-icons/md"; //Other

export default function ExpenseCard({
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
  const navigate = useNavigate();
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

  function requestDelete(id) {
    setValidation(true);
    setSelectedID(id);
  }

  function handleDelete(theID) {
    const updateExpenses = expenses.filter((expense) => {
      return expense.id !== theID;
    });

    setValidation(false);
    setSelectedID(null);
    setExpenses(updateExpenses);
  }

  function handleEdit(idToEdit) {
    navigate("/addExpenses");

    const expenseToEdit = expenses.find((expense) => {
      return expense.id === idToEdit;
    });

    setFormData(expenseToEdit);
    setEdit(idToEdit);
  }

  return (
    <>
      {expenses.map((expense) => {
        const Icon = categoryIcons[expense.category];
        return (
          <div
            className="w-full h-auto rounded-2xl bg-[#fefffe] shadow-2xl flex py-2 flex justify-center items-center"
            key={expense.id}
          >
            {/* Icon */}
            <div className="w-[18%] h-full flex justify-center items-center">
              <div className="w-14 h-14 rounded-full bg-[#dff5ee] flex justify-center items-center">
                <Icon className="md:text-3xl text-2xl" />
              </div>
            </div>
            {/* Details */}
            <div className="w-[47%] h-full flex flex-col justify-center gap-1">
              <span
                className="font-bold text-[16px] leading-[18px]"
                onClick={(e) => setShowDesc(true)}
              >
                {expense.title}
              </span>
              <span className="text-sm text-gray-500">{expense.category}</span>
            </div>

            {/* Amount */}
            <div className="w-[20%] h-full flex flex-col justify-center items-end">
              <span className="font-bold text-[15px]">₦{expense.amount}</span>
              <span className="text-[13px] text-gray-500">
                {formatDate(expense.date)}
              </span>
            </div>

            {/* Actions */}
            <div className="w-[15%] h-full flex flex-col justify-center items-center gap-2">
              <span
                className="cursor-pointer text-2xl text-green-700"
                onClick={() => handleEdit(expense.id)}
              >
                <CiEdit />
              </span>

              <span
                className="cursor-pointer text-xl text-red-700"
                onClick={() => requestDelete(expense.id)}
              >
                <MdOutlineDeleteOutline />
              </span>
            </div>
          </div>
        );
      })}

      {showDesc && (
        <DescriptionModal
          description="kdla"
          onClose={() => setShowDesc(false)}
          message="Expense deleted successfully"
        />
      )}

      {validation && (
        <Validation
          onClose={() => {
            setValidation(false);
            setSelectedID(null);
          }}
          title="Confirm Delete"
          message="Are you sure you want to delete this expense?"
          Okay="Yes"
          Close="No"
          onOk={() => handleDelete(selectedID)}
        />
      )}
    </>
  );
}
