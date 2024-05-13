import React from "react";
import { useState } from "react";
import Card from "./Card";

function Search({ cardsData }) {
  const [input, setInput] = useState("");
  const [matchedCards, setMatchedCards] = useState([]);
  const [searched, setSearched] = useState(false);

  const search = () => {
    const matched = cardsData.filter(
      (card) =>
        card.title.toLowerCase().includes(input.toLowerCase()) ||
        card.desc.toLowerCase().includes(input.toLowerCase())
    );
    setMatchedCards(matched);
    setSearched(true);
  };
  return (
    <>
      <div className="flex justify-center items-center my-10">
        <input
          type="text"
          placeholder="Search for products..."
          className="border rounded-md w-1/2 text-center shadow-inner shadow-rose-300 p-2"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button className="ml-5" onClick={search}>
          <img src="/search.svg" alt="" />
        </button>
      </div>
      <div className="flex justify-center space-x-2">
        {searched && matchedCards.length === 0 ? (
          <p className="mb-5 text-rose-500 text-xl font-semibold">
            No matching data found!
          </p>
        ) : (
          matchedCards.map((card) => (
            <Card
              key={card.title} // Assuming title is unique
              src={card.src}
              title={card.title}
              desc={card.desc}
              originalPrice={card.originalPrice}
              discountedPrice={card.discountedPrice}
            />
          ))
        )}
      </div>
    </>
  );
}

export default Search;
