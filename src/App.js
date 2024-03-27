import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import Catalog from "./pages/Catalog";
import ShopCart from "./pages/ShopCart";

import "./App.css";
import "./my_styles.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <main className="main">
          <Routes>
            <Route exact path="/" element={<MainPage />} />
            <Route exact path="/catalog" element={<Catalog />} />
            <Route exact path="/shopcart" element={<ShopCart />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
