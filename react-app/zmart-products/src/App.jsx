import React from "react";
import { Routes, Route } from "react-router-dom";
import Az_clone from "./pages/Az_clone.jsx";
import Groceries from "./pages/Groceries.jsx";
import Gadgets from "./pages/Gadgets.jsx";
import Books from "./pages/Books.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Az_clone />} />
      <Route path="/groceries" element={<Groceries />} />
      <Route path="/gadgets" element={<Gadgets />} />
      <Route path="/books" element={<Books />} />
    </Routes>
  );
}

export default App;
