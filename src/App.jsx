import Header from "./components/Header";
import Footer from "./components/Footer";
import Accueil from "./pages/Accueil";
import ListeDesPlats from "./pages/ListeDesPlats";
import Contacts from "./pages/Contacts";
import { Routes, Route } from "react-router-dom";

function App() {

  return (
    <div
      style={{
        backgroundColor: "#000",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Georgia, serif",
      }}
    >
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/plats" element={<ListeDesPlats />} />
        <Route path="/contact" element={<Contacts />} />
      </Routes>
     
      <Footer />
    </div>
  );
}

export default App;
