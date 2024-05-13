import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <>
      <div className="flex justify-around flex-wrap">
        <Card
          src="./tshirts/tshirt1.png"
          title="Puma"
          desc="tshirt"
          originalPrice="700"
          discountedPrice="450"
        />
        <Card
          src="./tshirts/tshirt2.png"
          title="Nike"
          desc="tshirt"
          originalPrice="600"
          discountedPrice="400"
        />
        <Card
          src="./tshirts/tshirt3.png"
          title="Zara"
          desc="tshirt"
          originalPrice="800"
          discountedPrice="550"
        />
        <Card
          src="./tshirts/tshirt4.png"
          title="Armani"
          desc="tshirt"
          originalPrice="900"
          discountedPrice="700"
        />
      </div>
      <div className="flex justify-around flex-wrap">
        <Card
          src="./jeans/jeans1.png"
          title="Pepe"
          desc="jeans"
          originalPrice="1200"
          discountedPrice="950"
        />
        <Card
          src="./jeans/jeans2.png"
          title="Levis"
          desc="jeans"
          originalPrice="1500"
          discountedPrice="1200"
        />
        <Card
          src="./jeans/jeans3.png"
          title="Spykar"
          desc="jeans"
          originalPrice="2200"
          discountedPrice="1900"
        />
        <Card
          src="./jeans/jeans4.png"
          title="Ginja"
          desc="jeans"
          originalPrice="1800"
          discountedPrice="1750"
        />
      </div>
      <div className="flex justify-around flex-wrap">
        <Card
          src="./shoes/shoes1.png"
          title="Nike"
          desc="shoes"
          originalPrice="5000"
          discountedPrice="3750"
        />
        <Card
          src="./shoes/shoes2.png"
          title="Asian"
          desc="shoes"
          originalPrice="1200"
          discountedPrice="750"
        />
        <Card
          src="./shoes/shoes3.png"
          title="Puma"
          desc="shoes"
          originalPrice="3000"
          discountedPrice="2750"
        />
        <Card
          src="./shoes/shoes4.png"
          title="H&M"
          desc="shoes"
          originalPrice="2000"
          discountedPrice="1700"
        />
      </div>
    </>
  );
}

export default Cards;
