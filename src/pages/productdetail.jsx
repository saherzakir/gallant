import React, { useState } from "react";

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
                className="w-full aspect-square p-1 rounded-lg cursor-pointer"
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
        <span className="bg-red-500 text-white text-xs px-2 py-1 rounded">30%</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
          Add To Bag
        </button>
          <button className="border border-gray-300 px-6 py-2 rounded hover:bg-gray-100 flex text-center" >
            Wishlist
        </button>
     </div>
     <p className="text-sm text-gray-500">Estimated delivery with 3-5 working days</p>
        </div>
      </div>
    </div>
  );
};
export default Productpage;
