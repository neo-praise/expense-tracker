import { Routes, Route } from "react-router";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AddExpenses from "./pages/AddExpenses";
import Expenses from "./pages/Expenses";
import { RiNumbersFill } from "react-icons/ri";

function App() {
  const [expenses, setExpenses] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    amount: "",
    date: "",
    description: "",
    icon: "",
  });
  const [showDesc, setShowDesc] = useState(false);
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState();
  return (
    <main className="Layout">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route
          path="/addExpenses"
          element={
            <AddExpenses
              formData={formData}
              setFormData={setFormData}
              error={error}
              setError={setError}
              expenses={expenses}
              setExpenses={setExpenses}
              showDesc={showDesc}
              setShowDesc={setShowDesc}
            />
          }
        />
        <Route
          path="/expenses"
          element={<Expenses showDesc={showDesc} setShowDesc={setShowDesc} />}
        />
      </Routes>
    </main>
  );
}

export default App;
