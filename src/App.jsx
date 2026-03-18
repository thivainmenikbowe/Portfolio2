import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Internship from "./pages/Internship";
import InternshipDetails from "./pages/InternshipDetails";
import Projects from "./pages/Projects";
import Veille from "./pages/Veille";

export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/internship" element={<Internship />} />
        <Route path="/internship/details/:id" element={<InternshipDetails />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/veille" element={<Veille />} />
      </Routes>
      <Footer />
    </>
  );
}
