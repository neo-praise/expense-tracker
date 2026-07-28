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

    if (
      Number(formData.amount) < 0 ||
      Number(formData.amount) === 0 ||
      isNaN(Number(formData.amount))
    ) {
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
  }

  return (
    <>
      <section className="w-full h-auto min-h-screen bg-[#f6f2fe] pb-22">
        <Navbar />
        <div className="w-full h-auto p-3">
          <div className="w-full h-10 flex items-center justify-center">
            <span className="text-[21px] font-bold">Add New Expense</span>
          </div>
          <form
            className="w-full h-auto mt-3 flex flex-col gap-3 md:items-center"
            onSubmit={handleSubmit}
          >
            <Form formData={formData} setFormData={setFormData} />
          </form>
        </div>
      </section>
      {showDesc && (
        <DescriptionModal onClose={() => setShowDesc(false)} error={error} />
      )}
    </>
  );
}
