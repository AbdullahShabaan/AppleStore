import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Modal from "./components/Modal";

const App = () => {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Highlights />
      <Modal />
      <Footer />
    </main>
  );
};

export default App;
