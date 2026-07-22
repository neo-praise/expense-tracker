import { Routes, Route } from "react-router";
import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import AddExpenses from "./pages/AddExpenses";
import Expenses from "./pages/Expenses";

function App() {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <main className="Layout">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addExpenses" element={<AddExpenses />} />
        <Route
          path="/expenses"
          element={<Expenses showDesc={showDesc} setShowDesc={setShowDesc} />}
        />
      </Routes>
    </main>
  );
}

export default App;
