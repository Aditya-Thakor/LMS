import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider } from "../context/AuthContext";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Navbar from "../components/Navbar";
import Courses from "@/pages/Auth/Courses";
import Home from "@/pages/Home";
import Footer from "@/components/Footer";
import CourseDetails from "@/components/CourseDetails";

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
        </Routes>
        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}
