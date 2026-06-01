import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Teams from "./pages/Teams";
import Fixtures from "./pages/Fixtures";
import Points from "./pages/Points";
import Playoffs from "./pages/Playoffs";
import News from "./pages/News";

function App() {
  return (
    <BrowserRouter> 
    <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/teams" element={<Teams />} />
        <Route path="/fixtures" element={<Fixtures />} />
        <Route path="/points" element={<Points />} />
        <Route path="/playoffs" element={<Playoffs />} />
        <Route path="/news" element={<News />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;