import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import TopHeader from "./components/TopHeader";
import Footer from "./components/Footer";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <div>
      <TopHeader />
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} /> 
        <Route path="/signup" element={<SignUp />} /> 
        <Route path="/login" element={<Login />} /> 
        <Route path="*" element={<ErrorPage />} /> 
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
