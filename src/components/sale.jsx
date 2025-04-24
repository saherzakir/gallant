import React from 'react';
import { FaFilter, FaChevronDown } from "react-icons/fa";


const products =[
   {
     id:1,
     image:"/images/bag.jpg",
     brand:"Stylo",
     name:"Mini Bag for Girls",
     originalPrice:"Rs/-4000",
     discountedPrice:"Rs/-3500",
     discount:"30%",
   },
   {
    id:2,
    image:"/images/bag2.jpg",
    brand:"Stylo",
    name:"Bag for Girls",
    originalPrice:"Rs/-2000",
    discountedPrice:"Rs/-1500",
    discount:"30%",
  },
  {
    id:3,
    image:"/images/dress.jpg",
    brand:"Sapphire",
    name:"Dress for Girls",
    originalPrice:"Rs/-10,000",
    discountedPrice:"Rs/-8500",
    discount:"30%",
  },
  {
    id:4,
    image:"/images/shoes.jpg",
    brand:"Heels",
    name:"Heels for Girls",
    originalPrice:"Rs/-8,000",
    discountedPrice:"Rs/-6500",
    discount:"30%",
  },
  {
    id:5,
    image:"/images/shoes2.jpg",
    brand:"Stylo",
    name:"Sneakers for Girls",
    originalPrice:"Rs/-3500",
    discountedPrice:"Rs/-3000",
    discount:"30%",
  },
  {
   id:6,
   image:"/images/accessories.avif",
   brand:"Stylo",
   name:"Acessories for Girls",
   originalPrice:"Rs/-1500",
   discountedPrice:"Rs/-1000",
   discount:"30%",
 },
 {
   id:7,
   image:"/images/glassess.avif",
   brand:"Sapphire",
   name:"Glassess",
   originalPrice:"Rs/-3000",
   discountedPrice:"Rs/-2500",
   discount:"30%",
 },
 {
   id:8,
   image:"/images/rings.webp",
   brand:"Heels",
   name:"Rings",
   originalPrice:"Rs/-1000",
   discountedPrice:"Rs/-700",
   discount:"30%",
 },
];


export default function GallantSale () {

  return (
    <div className="max-w-full p-2 mx-auto text-left">
       
        <nav className="text-sm text-gray-500 mb-4">
          <span>Women Wear</span> <span className="font-semibold">Sale</span>
        </nav>
        
        <h1 className="text-4xl font-bold mb-6 text-left">The Gallant Sale for Women</h1>
       
        <div className="mb-4 flex gap-6 text-lg font-semibold">
            <span className="text-black">Women Shop</span>
            <span className="text-black">Men Shop</span>
            <span className="text-black">Kids Shop</span>
    </div>
       
        <div className="flex justify-between items-center mb-6">
            
             <div className="flex flex-wrap gap-3">
                 
                 <button className="flex items-center px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200 transition">
                   <FaFilter className="w-4 h-4 mr-2"/>
                   All Filters
                 </button>
                 {[
                    "Clothing",
                    "Bags",
                    "Shoes",
                    "Accessories",
                    "Jewellery",
                 ].map((filter,index)=>(
                 <button 
                 key={index}
                 className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-200"
                 >
                    {filter}
                 </button>
                )
                
            )
                }
                
             </div>
             <button className="flex items-center text-gray-700 text-lg">
                Sort By  <FaChevronDown className="w-5 h-5 ml-1"/>
             </button>
        </div>
             
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-start w-full">
              {products.map((product)=>(
                  <div
                   key={product.id}
                   className="relative bg-white rounded-lg p-4 text-left"
                  >

                    <div className="w-full flex items-center justify-center h-[250px]">
                       <img
                        src={product.image} 
                        className="w-full h-full object-contain"
                       />
                      </div>
                    
                    <div className="mt-4 text-left">
                    <p className="text-gray-500 text-sm">{product.brand}</p>
                      <p className="text-gray-500 text-sm">{product.name}</p>
                      </div>

                    <div className="flex items-center space-x-2 mt-1">
                      <span className="text-gray-400 line-through text-sm">{product.originalPrice}</span>
                      <span className="text-red-600 font-semibold">{product.discountedPrice}</span>
                    </div>
                    
                    <span className="text-xs rounded-lg bg-red-500 text-white px-2 py-1 mt-1 inline-block">
                      {product.discount}
                    </span>
                    </div>
               

              ))

              }
            </div>
          <div className="mt-12">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Recommendations</h2>
                <button className="px-5 py-2 text-sm border border-gray-400 rounded-full hover:bg-gray-200 hover:text-black">Shop Now</button>
              </div>
          <div className="relative flex justify-center mt-8">
             <div className="flex gap-6 w-max px-1 custom-scrollbar"
               style={{
                     maxWidth:"75%",
                     overflowX:"auto",
                     scrollbarWidth:"thin",
                     scrollbarColor:"black transparent",
                     marginTop:"20px",
               }}
             >
                 {products.slice(0,8).map((item)=>(
                  <div key={item.id} className="min-w-[220px] max-w-[220px] bg-white p-3 flex flex-col hover:shadow-md transition">
                      <div className="justify-center items-center flex w-full h-[200px]">
                        <img className="object-contain h-full max-h[180ox]" alt={item.name} src={item.image}/>
                       </div>

                 <div className="text-sm mt-4">
                   <p className="text-black font-semibold">{item.brand}</p>
                   <p className="text-gray-600">{item.name}</p>
                   <p className="text-red-600 font-bold mt-1">{item.discountedPrice}</p>

                  </div>
             </div>

            ))}
          </div>
         </div>
             <style jsx>
              {`
                 .custom-scrollbar::-webkit-scrollbar{
                   height:6px;
                 }
                   .custom-scrollbar::-webkit-scrollbar-track{
                     background:transparent;
                   }
                  .custom-scrollbar::-webkit-scrollbar-thumb{
                  background-color: black;
              }
                  .custom-scrollbar::-webkit-scrollbar-thumb-hover{
                  background-color:#222;
              }
              `}

             </style>



          </div>
    
    </div>
  )
}
