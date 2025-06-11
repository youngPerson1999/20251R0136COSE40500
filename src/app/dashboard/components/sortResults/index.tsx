import { sortNames } from "@/lib/sorts";
import ResultCard from "./resultCard";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/providers/LangProvider";

interface SortResultsProps {
  results: number[];
}
const SortResults = ({ results }: SortResultsProps) => {
  const names = sortNames;
  const sortedResults = results.slice().sort((a, b) => a - b);
  const { language } = useLang();
  const title = language === "ko" ? "정렬 결과" : "Sort Results";
  return (
    <div className="mt-8 border-t w-full flex flex-col p-2 max-w-[800px]">
      <h2 className="text-lg font-semibold mb-4">{title}</h2>
      <Card>
        <CardContent>
          <div className="font-semibold">{title}: </div>
          <div>{sortedResults.join(", ")}</div>
        </CardContent>
      </Card>
      {names.map((sortName) => (
        <ResultCard key={sortName} sortName={sortName} input={results} />
      ))}
    </div>
  );
};

export default SortResults;
