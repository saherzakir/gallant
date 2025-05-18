import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const products =[
  {
    id:1,
    image:"/images/bag.jpg",
    brand:"Stylo",
    name:"Mini Bag for Girls",
    originalPrice:"Rs/-4000",
    discountedPrice:"Rs/-3500",
    discount:"30%",
    category:"Bags",
  },
  {
   id:2,
   image:"/images/bag2.jpg",
   brand:"Stylo",
   name:"Bag for Girls",
   originalPrice:"Rs/-2000",
   discountedPrice:"Rs/-1500",
   discount:"30%",
   category:"Bags",
 },
 {
   id:3,
   image:"/images/dress.jpg",
   brand:"Sapphire",
   name:"Dress for Girls",
   originalPrice:"Rs/-10,000",
   discountedPrice:"Rs/-8500",
   discount:"30%",
   category:"Clothing",
 },
 {
   id:4,
   image:"/images/shoes.jpg",
   brand:"Heels",
   name:"Heels for Girls",
   originalPrice:"Rs/-8,000",
   discountedPrice:"Rs/-6500",
   discount:"30%",
   category:"Shoes",
 },
 {
   id:5,
   image:"/images/shoes2.jpg",
   brand:"Stylo",
   name:"Sneakers for Girls",
   originalPrice:"Rs/-3500",
   discountedPrice:"Rs/-3000",
   discount:"30%",
   category:"Shoes",
 },
 {
  id:6,
  image:"/images/accessories.avif",
  brand:"Stylo",
  name:"Acessories for Girls",
  originalPrice:"Rs/-1500",
  discountedPrice:"Rs/-1000",
  discount:"30%",
  category:"Jewellery",
},
{
  id:7,
  image:"/images/glassess.avif",
  brand:"Sapphire",
  name:"Glassess",
  originalPrice:"Rs/-3000",
  discountedPrice:"Rs/-2500",
  discount:"30%",
  category:"Acessories",
},
{
  id:8,
  image:"/images/rings.webp",
  brand:"Heels",
  name:"Rings",
  originalPrice:"Rs/-1000",
  discountedPrice:"Rs/-700",
  discount:"30%",
  category:"Jewellery",
},
];

const Productpage = () => {
    

  const imagesList = [
    "/images/bag2.jpg",
    "/images/bag2.jpg",
    "/images/bag2.jpg",
    "/images/bag2.jpg",
  ];
  const [mainImage, setMainImage] = useState(imagesList[0]);

  return (
    <div className="bg-white text-gray-900 w-full min-h-screen">
      <div className="px-4 py-8 max-w-7x1 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {/*Left Side*/}
        {/*Product image */}
        <div className="space-y-4">
          <div className="w-full">
            <img
              src={mainImage}
              alt="Images"
              className="w-full max-h-[500px] object-contain rounded-lg"
            />
          </div>

          <div className="grid grid-cols-3 gap-4">
            {imagesList.slice(1).map((image, i) => (
              <div
                key={i}
                className="w-full max-h-[400px] aspect-square p-1 rounded-lg cursor-pointer"
              >
                <img
                  src={image}
                  alt={`image ${i + 1}`}
                  onClick={() => setMainImage(image)}
                />
              </div>
            ))}
          </div>
        </div>
        {/*Right Side*/}
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-semibold">Stylo</h2>
            <p className="text-sm text-gray-600">Its a Fabulous item</p>
          </div>
          {/*Price tags*/}
          <div className="flex items-center space-x-3">
            <span className="text-gray-400 line-through text-lg">Rs/-5000</span>
            <span className="text-red-600 text-xl font-bold">Rs/-2500</span>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">
              30%
            </span>
          </div>
          <div className="flex space-x-4">
            <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
            >
              Add To Bag
            </button>
            <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 flex text-center">
              Wishlist
            </button>
          </div>
          <p className="text-sm text-gray-500">
            Estimated delivery with 3-5 working days
          </p>
        </div>
      </div>
      {/*Additional info of product */}
      <section className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-12 text-sm text-gray-800">
        
        <div className="md-col-span-1 space-y-4">
          <h3 className=" text-xs text-semibold uppercase text-gray-500">The Details</h3>
          <div>
          <h4 className="font-semibold">Stylo</h4>
          <p className="mt-1 text-gray-700">Its a luxurious item of our store.It has so many new features.You will enjoy to wear it.</p>
        </div>
        <div>
        <h5 className="font-semibold mt-4 mb-1">Highlights</h5>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
             <li>Leather Strap</li>
             <li>Leather all sides</li>
             <li>Fine Zip</li>
             <li>3 Pockets</li>
          </ul>
         </div>
         </div>
             
             <div className="space-y-6">
               <div>
                <p className="font-semibold">Gallant Article</p>
                <p>234567890909</p>
               </div>
              </div>


         {/*Product Image */}
         <div className="space-y-6">
           <div>
            <p className="font-semibold">Gallant: 1345676</p>
            <p>Brand style ID:80SDFSADG</p>
           </div>
           <div className="mt-4"> 
             <img
               src="/images/bag2.jpg"
               alt="Product side view"
               className="w-full object-contain rounded-lg"
             />
            </div>
         </div>
      </section>

        {/*Recommendations*/}
            
        <div className="mt-12">
             <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Recommendations</h2>
                <button className="px-5 py-2 text-sm border border-gray-400 rounded-full hover:bg-gray-200 hover:text-black">Shop Now</button>
              </div>

              {/**Products */}
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
  );
};
export default Productpage;
 