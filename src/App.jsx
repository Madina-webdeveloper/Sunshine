import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Destination from "./components/Destination";
import LastSection from "./components/LastSection";
import Footer from "./components/Footer"


function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Experience />
        <Destination />
        <LastSection />

      </main>
      <Footer/>
    </>
  );
}

export default App;
