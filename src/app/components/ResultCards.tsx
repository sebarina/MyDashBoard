"use client";
import React from "react";
import ResultCard from "./ResultCard";
import { list } from "postcss";

export default  function ResultCards({cardsData} : { cardsData: {ids:[]; rs:[]}} ) {

  var { ids } = cardsData;
  var { rs } = cardsData;
  
  if (!ids) {
    ids = [];
  }
  if (!rs) {
    rs = [];
  }
  
  return (
    <>
      <h1 className="text-lg font-semibold line-clamp-2">ids search result</h1>
      <div className="grid grid-cols-12 gap-30">
        {ids.map((item: { code: string; ai: string; bin: string; image1: string ; image2: string ; image3: string; }, i: React.Key | null | undefined) => (
          <ResultCard cardData={item}/>   
        ))}
      </div>

      <h2 className="text-lg my-6 group-hover:text-primary line-clamp-2">rs search result</h2>
      <div className="grid grid-cols-12 gap-30 mb-4">
        {rs.map((item: { code: string; ai: string; bin: string; image1: string ; image2: string ; image3: string; }, i: React.Key | null | undefined) => (
          <ResultCard cardData={item}/>   
        ))}
      </div>
    </>
  );
};

// export default ResultCards;
