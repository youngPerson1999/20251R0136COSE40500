import { sortNames } from "@/lib/sorts";
import ResultCard from "./resultCard";

interface SortResultsProps {
  results: number[];
}
const SortResults = ({ results }: SortResultsProps) => {
  const names = sortNames;
  return (
    <div className="mt-8 border-t w-full flex flex-col p-2">
      <h2 className="text-lg font-semibold">Sort Results</h2>
      {names.map((sortName) => (
        <ResultCard key={sortName} sortName={sortName} input={results} />
      ))}
    </div>
  );
};

export default SortResults;
