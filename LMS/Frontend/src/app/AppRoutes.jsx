import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Courses from "@/pages/Courses";
import Home from "@/pages/Home";
import {Navbar,Footer,CourseDetails} from "@/components/components";
import Admin from "@/dashbords/Admin";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course/:id" element={<CourseDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
