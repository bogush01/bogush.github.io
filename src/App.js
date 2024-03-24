import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/header";
import Footer from "./components/Footer";

import MainPage from "./pages/MainPage";
import Page2 from "./pages/page2";

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
            <Route exact path="/page2" element={<Page2 />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
