"use client";

import { useState } from "react";
import RandomNumberGenerator from "./components/randomNumbers";

const DashboardPage = () => {
  const [results, setResults] = useState<number[]>([]);

  return (
    <div className="p-4 bg-gray-100 min-h-screen flex flex-col items-center">
      <RandomNumberGenerator results={results} setResults={setResults} />
    </div>
  );
};

export default DashboardPage;
