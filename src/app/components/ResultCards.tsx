"use client";
import React from "react";
import ResultCard from "./ResultCard";

export default  function ResultCards({cardsData}){

  var { ids } = cardsData;
  var { rs } = cardsData;
  
  // const ResultCardsData = parsedData.ids.map((item: any) => ({
  //   code: item.code,
  //   ai: item.ai,
  //   bin: item.bin,
  //   image1: "data:image/png;base64," + item.image1,
  //   image2: "data:image/png;base64," + item.image2,
  //   image3: "data:image/png;base64," + item.image3
  // })); 
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
