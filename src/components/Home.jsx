import React from "react";
import Navbar from "./Navbar";
import Cards from "./Cards";
import Search from "./Search";
import Footer from "./Footer";

function Home() {
  const cardsData = [
    {
      src: "./tshirts/tshirt1.png",
      title: "Puma",
      desc: "tshirt",
      originalPrice: "700",
      discountedPrice: "450",
    },
    {
      src: "./tshirts/tshirt2.png",
      title: "Nike",
      desc: "tshirt",
      originalPrice: "600",
      discountedPrice: "400",
    },
    {
      src: "./tshirts/tshirt3.png",
      title: "Zara",
      desc: "tshirt",
      originalPrice: "800",
      discountedPrice: "550",
    },
    {
      src: "./tshirts/tshirt4.png",
      title: "Armani",
      desc: "tshirt",
      originalPrice: "900",
      discountedPrice: "700",
    },
    {
      src: "./jeans/jeans1.png",
      title: "Pepe",
      desc: "jeans",
      originalPrice: "1200",
      discountedPrice: "950",
    },
    {
      src: "./jeans/jeans2.png",
      title: "Levis",
      desc: "jeans",
      originalPrice: "1500",
      discountedPrice: "1200",
    },
    {
      src: "./jeans/jeans3.png",
      title: "Spykar",
      desc: "jeans",
      originalPrice: "2200",
      discountedPrice: "1900",
    },
    {
      src: "./jeans/jeans4.png",
      title: "Ginja",
      desc: "jeans",
      originalPrice: "1800",
      discountedPrice: "1750",
    },
    {
      src: "./shoes/shoes1.png",
      title: "Nike",
      desc: "shoes",
      originalPrice: "5000",
      discountedPrice: "3750",
    },
    {
      src: "./shoes/shoes2.png",
      title: "Asian",
      desc: "shoes",
      originalPrice: "1200",
      discountedPrice: "750",
    },
    {
      src: "./shoes/shoes3.png",
      title: "Puma",
      desc: "shoes",
      originalPrice: "3000",
      discountedPrice: "2750",
    },
    {
      src: "./shoes/shoes4.png",
      title: "H&M",
      desc: "shoes",
      originalPrice: "2000",
      discountedPrice: "1700",
    },
  ];
  return (
    <>
      <Navbar />
      <Search cardsData={cardsData} />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
