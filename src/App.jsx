import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import WomenSale from "./components/sale";
import BestDressed from "./components/bestDressed";
import Productpage from "./pages/productdetail";
import Basket from "./pages/basket";

function App() {
  return (
    <Router>
      <div className="bg-white min-h-screen text-gray-900 w-full">
        <Header />
        <main className="w-full px-4 py-12">
          <Routes>
            <Route path="/" element={
                <>
                  <WomenSale />
                  <BestDressed />
                </>
              } />
              <Route path="/product/:id" element={<Productpage/>} />
              <Route path="/basket" element={<Basket/>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
