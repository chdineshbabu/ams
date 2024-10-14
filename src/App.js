import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Login from "./pages/Login";
import Admin from "./pages/Admin";

function App() {
  return (
    <div className="mx-36 my-12">
    <BrowserRouter>
      <Routes>
          <Route index element={<Login />} />
          <Route path="student" element={<Student />} />
          <Route path="teacher" element={<Teacher />} />
          <Route path="admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;