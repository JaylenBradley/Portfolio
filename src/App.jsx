import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Certifications from "./pages/Certifications.jsx";
import Contact from "./pages/Contact.jsx";
import Error from "./pages/Error.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";

const App = () => (
  <Router>
    <div className="flex flex-col min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<Error/>} />
      </Routes>
      <Footer />
    </div>
  </Router>
);

export default App;