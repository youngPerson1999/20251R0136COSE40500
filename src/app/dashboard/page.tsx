"use client";

import { useState } from "react";
import RandomNumberGenerator from "./components/randomNumbers";
import SortResults from "./components/sortResults";

const DashboardPage = () => {
  const [results, setResults] = useState<number[]>([]);

  return (
    <div className="p-6 flex flex-col items-center">
      <RandomNumberGenerator results={results} setResults={setResults} />
      {results.length > 0 && <SortResults results={results} />}
    </div>
  );
};

export default DashboardPage;
