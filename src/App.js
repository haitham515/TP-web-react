import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import First from "./pages/First";
import Second from "./pages/Second";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/users" />} />
        <Route path="/users" element={<First />} />
        <Route path="/users/:id" element={<Second />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;