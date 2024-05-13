import React from "react";

function Card({
  src = "/tshirts/tshirt1.png",
  title = "tshirt",
  desc = "description",
  originalPrice = "1000",
  discountedPrice = "500",
}) {
  return (
    <>
      <div className="w-1/5 h-auto bg-rose-50 rounded my-1 flex flex-col p-3 mb-10 cursor-pointer">
        <img src={src} alt="image" className=" rounded object-center h-60" />
        <div>
          <h2 className="font-bold">{title}</h2>
          <p>Category: {desc}</p>
          <p>Original price: &#8377;{originalPrice}</p>
          <p>Discounted price: &#8377;{discountedPrice}</p>
        </div>
      </div>
    </>
  );
}

export default Card;
