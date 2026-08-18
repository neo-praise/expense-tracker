import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import AddExpenses from "./pages/AddExpenses";
import Expenses from "./pages/Expenses";
import { RiNumbersFill } from "react-icons/ri";

function App() {
  //States
  const [expenses, setExpenses] = useState(() => {
    const savedExpenses = localStorage.getItem("theExpenses");
    return savedExpenses ? JSON.parse(savedExpenses) : [];
  });

  //Save expenses to the Local Storage
  useEffect(() => {
    localStorage.setItem("theExpenses", JSON.stringify(expenses));
  }, [expenses]);

  const [formData, setFormData] = useState({
    id: "",
    title: "",
    category: "",
    amount: "",
    date: "",
    description: "",
  });
  const [showDesc, setShowDesc] = useState(false);
  const [validation, setValidation] = useState(false);
  const [error, setError] = useState();
  const [selectedID, setSelectedID] = useState(null);
  const [edit, setEdit] = useState(null);
  const [searchItem, setSearchItem] = useState("");
  const [categoryDisplay, setCategoryDisplay] = useState("");

  return (
    <main className="Layout">
      <Routes>
        <Route
          path="/"
          element={<Dashboard expenses={expenses} edit={edit} />}
        />
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
              edit={edit}
              setEdit={setEdit}
            />
          }
        />
        <Route
          path="/expenses"
          element={
            <Expenses
              showDesc={showDesc}
              setShowDesc={setShowDesc}
              expenses={expenses}
              setExpenses={setExpenses}
              validation={validation}
              setValidation={setValidation}
              selectedID={selectedID}
              setSelectedID={setSelectedID}
              edit={edit}
              setEdit={setEdit}
              setFormData={setFormData}
              searchItem={searchItem}
              setSearchItem={setSearchItem}
              categoryDisplay={categoryDisplay}
              setCategoryDisplay={setCategoryDisplay}
            />
          }
        />
      </Routes>
    </main>
  );
}

export default App;
