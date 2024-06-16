import About from "./component/About";
import Footer from "./component/Footer";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Services from "./component/Services";
import Tours from "./component/Tours";

const App = ()=> {
  return ( 
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Tours/>
      <Footer/>
    </>
  );
}

export default App;
