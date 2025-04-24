import React from "react";
import { FaInstagram ,FaFacebook, FaTwitter ,FaSnapchat,FaYoutube} from "react-icons/fa";


const Footer=()=>{      
    return(
         <footer className="bg-black text-gray-300 text-sm">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                <div>
                        <h4 className="font-semibold text-lg mb-5 text-white">Customer Service</h4>
                        <ul className="space-y-3">
                            <li ><a href="#" className="hover:underline">Contact</a></li>
                            <li><a href="#" className="hover:underline">FAQ's</a></li>
                            <li><a href="#" className="hover:underline">Order and delivery</a></li>
                            <li><a href="#" className="hover:underline">Returns and Refunds</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semi-bold text-lg mb-5 text-white">About Gallant</h4>
                        <ul className="space-y-3 ">
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Gallant Partners</a></li>
                            <li><a href="#" className="hover:underline">Careers</a></li>
                        </ul>
                      </div>
                    <div>
                        <h4 className="font-semi-bold text-lg mb-5 text-white">Discount & Membership</h4>
                        <ul className="space-y-3 ">
                            <li><a href="#" className="hover:underline">Membership</a></li>
                            <li><a href="#" className="hover:underline">Discount Updates</a></li>
                            <li><a href="#" className="hover:underline">Affiliate progress</a></li>
                        </ul>   
                        <h4 className="font-semibold text-lg text-white mb-4">Follow us</h4>
                        <div className="flex space-x-4 ">
                            <a href="#" className="text-gray-300 hover:text-white text-xl"><FaInstagram/></a>
                            <a href="#"className="text-gray-300 hover:text-white text-xl"><FaFacebook/></a>
                            <a href="#"className="text-gray-300 hover:text-white text-xl"><FaSnapchat/></a>
                            <a href="#"className="text-gray-300 hover:text-white text-xl"><FaTwitter/></a>
                            <a href="#"className="text-gray-300 hover:text-white text-xl"><FaYoutube/></a>
                        </div>
                    </div>
                </div>
            </div>
              <div className="border-t border-gray-700">
                <div className="max-w-7xl  mx-auto px-6 py-6">
                   <div className="flex flex-wrap justify-center gap-x-6 text-xs text-white mb-5">
                   <a href="# " className="hover:underline">Privacy policy</a>
                   <a href="# "className="hover:underline">Terms and Condition</a>
                   <a href="# "className="hover:underline">Accessibility</a>
              </div>

              <p className="text-center text-xs  text-white mb-2">This is new setup having discount come and enjoy shopping! </p>
              <p className="text-center text-xs text-white">Copyright 2025 Gallant Pakistan Limited. All rights reserved.</p>
              </div>
              </div>
         </footer>   
          

              );

};


export  default Footer;