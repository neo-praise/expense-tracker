import Navbar from "../components/Navbar";
import Form from "../components/Form";
import Validation from "../components/Validation";
import DescriptionModal from "../components/DescriptionModal";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function AddExpenses({
  formData,
  setFormData,
  error,
  setError,
  expenses,
  setExpenses,
  showDesc,
  setShowDesc,
  edit,
  setEdit,
}) {
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (formData.title.trim() === "" || !isNaN(formData.title)) {
      setShowDesc(true);
      setError("Title is required, please insert a valid title.");
      return;
    }

    if (!formData.category) {
      setShowDesc(true);
      setError("Please add a category.");
      return;
    }

    if (Number(formData.amount) < 0 || Number(formData.amount) === 0) {
      setShowDesc(true);
      setError("Please add an amount");
      return;
    }

    if (!formData.date) {
      setShowDesc(true);
      setError("Please include a date for this expense");
      return;
    }

    if (formData.description.trim() === "" || !isNaN(formData.description)) {
      setShowDesc(true);
      setError("Please add a description to your expense");
      return;
    }

    const newExpenses = {
      ...formData,
      id: Date.now(),
    };

    if (edit === null) {
      setExpenses([newExpenses, ...expenses]);
      setError(null);

      setFormData({
        title: "",
        category: "",
        amount: "",
        date: "",
        description: "",
      });

      navigate("/expenses");
      return;
    }

    const updatedExpenses = expenses.map((expense) => {
      if (expense.id === edit) {
        return newExpenses;
      }
      return expense;
    });

    setExpenses(updatedExpenses);
    setEdit(null);
    setFormData({
      title: "",
      category: "",
      amount: "",
      date: "",
      description: "",
    });
    navigate("/expenses");
  }

  function cancelUpload() {
    setEdit(null);
    setFormData({
      title: "",
      category: "",
      amount: "",
      date: "",
      description: "",
    });
    navigate("/expenses");
  }

  return (
    <>
      <section className="w-full h-auto min-h-screen bg-[#f6f2fe] pb-22 md:pb-10">
        <Navbar />
        <div className="w-full h-auto p-3 flex flex-col items-center gap-1">
          <div className="w-full h-10 flex items-center justify-center">
            <span className="text-[21px] font-bold">
              {edit === null ? "Add New Expense" : "Update Expense"}
            </span>
          </div>
          <form
            className="w-full h-auto mt-3 flex flex-col gap-3 md:items-center"
            onSubmit={handleSubmit}
          >
            <Form formData={formData} setFormData={setFormData} edit={edit} />
          </form>

          {/* Cancel (if there's an editID) */}
          {edit === null ? (
            ""
          ) : (
            <button
              className="w-full md:w-[30%] h-10 rounded-lg bg-gray-500 text-[#f2ecf9] font-semibold cursor-pointer hover:bg-gray-600 transition flex justify-center items-center gap-2"
              onClick={cancelUpload}
            >
              CANCEL
            </button>
          )}
        </div>
      </section>
      {showDesc && (
        <DescriptionModal onClose={() => setShowDesc(false)} error={error} />
      )}
    </>
  );
}
