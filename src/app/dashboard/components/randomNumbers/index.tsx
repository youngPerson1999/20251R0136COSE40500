import { useState } from "react";
import Generator from "./generator";
import GeneratedNumbers from "./generatedNumbers";

interface RandomNumberGeneratorProps {
  results: number[];
  setResults: (results: number[]) => void;
}

export interface Meta {
  min: number;
  max: number;
  count: number;
}

const RandomNumberGenerator = ({
  results,
  setResults,
}: RandomNumberGeneratorProps) => {
  const [min, setMin] = useState<number>(1);
  const [max, setMax] = useState<number>(100);
  const [count, setCount] = useState<number>(1);
  const [meta, setMeta] = useState<Meta>({
    min,
    max,
    count,
  });
  const handleGenerate = (newResults: number[]) => {
    setResults(newResults);
    setMeta({ min, max, count });
  };

  return (
    <div className="flex flex-col gap-4 max-w-[800px] w-full ">
      <Generator
        min={min}
        max={max}
        count={count}
        setMin={setMin}
        setMax={setMax}
        setCount={setCount}
        handleGenerate={handleGenerate}
      />
      <GeneratedNumbers meta={meta} results={results} />
    </div>
  );
};
export default RandomNumberGenerator;
