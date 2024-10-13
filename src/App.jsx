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
    </main>
  );
};

export default App;
