import React from 'react';


const bestDressed = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen px-4 lg:px-16 bg-white">
       <div className="lg:w-1/2 w-full text-center lg:text-left mb-10 lg:mb-0">
      <h2 className="text-xl font-medium mb-4 transition-transform duration-500 hover:scale-100 translate-x-0 hover:translate-x-2">The Best Dress</h2>
       <p className="text-gray-600 mb-6">Its a fabulous dress of our store.Enjoy it!</p>
           <button className="border border-black rounded hover:bg-black hover:text-white px-5 py-2 transition">Shop Now</button>
           </div>
         <div className="lg:w-1/2 w-full flex justify-center">
            <img
            src="/images/dress2.avif"
            alt="Best Dress"
            className="w-full max-w-md object-cover transition-transform duration-500 hover:scale-110 rounded"
            />

          </div>



    </div>
  )
}

export default bestDressed;