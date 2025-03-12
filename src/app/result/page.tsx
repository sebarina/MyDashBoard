import React from "react";
import ResultCards from "../components/ResultCards";

const resultPage = () => {
  return (
    <>
      <h5 className="card-title mb-3">Search Result</h5>
        <div className="col-span-12">
          <ResultCards />
        </div>
    </>
  );
};

export default resultPage;
