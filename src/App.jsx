import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Header from "./components/Navbar.jsx"

const App = () => {

  return (
    <div className="flex flex-col min-h-screen items-center">
      <Header/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App
