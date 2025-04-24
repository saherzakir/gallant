import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import WomenSale from "./components/sale";
import BestDressed from "./components/bestDressed";

function App() {
  
  return (
    <div className="bg-white min-h-screen text-gray-900 w-full"> 
           <Header/>
           
        <main className="w-full px-4 py-12">
            <WomenSale/>
             <BestDressed/> 

        </main>

          <Footer/>

    </div>  
   
 )
}

export default App;
