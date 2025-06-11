import { sortNames } from "@/lib/sorts";
import ResultCard from "./resultCard";
import { Card, CardContent } from "@/components/ui/card";

interface SortResultsProps {
  results: number[];
}
const SortResults = ({ results }: SortResultsProps) => {
  const names = sortNames;
  const sortedResults = results.slice().sort((a, b) => a - b);
  return (
    <div className="mt-8 border-t w-full flex flex-col p-2 max-w-[800px]">
      <h2 className="text-lg font-semibold mb-4">Sort Results</h2>
      <Card>
        <CardContent>sorted result: {sortedResults.join(", ")}</CardContent>
      </Card>
      {names.map((sortName) => (
        <ResultCard key={sortName} sortName={sortName} input={results} />
      ))}
    </div>
  );
};

export default SortResults;
