import React from "react";

function Footer() {
  return (
    <div className="bottom-0 bg-rose-50 w-full flex justify-around items-center p-2">
      <ul>
        Our banking partners:
        <div className="flex space-x-5 font-semibold text-rose-700">
          <li className="cursor-pointer">HDFC</li>
          <li className="cursor-pointer">AXIS</li>
          <li className="cursor-pointer">SBI</li>
          <li className="cursor-pointer">PNB</li>
          <li className="cursor-pointer">KOTAK</li>
        </div>
      </ul>
      <div>
        <p>-- All rights reserved --</p>
        <p className="text-rose-700 font-semibold cursor-pointer">
          &copy; www.eshopping.com
        </p>
      </div>
    </div>
  );
}

export default Footer;
