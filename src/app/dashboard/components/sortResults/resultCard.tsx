import { Card, CardContent } from "@/components/ui/card";
import { SortName, sorts } from "@/lib/sorts";

interface ResultCardProps {
  sortName: SortName;
  input: number[];
}
const ResultCard = ({ sortName, input }: ResultCardProps) => {
  const sortFunc = sorts[sortName];
  const { results, comparisonCount, swapCount } = sortFunc(input);
  return (
    <Card className="mt-4 p-4">
      <CardContent>
        <h3 className="text-lg font-semibold">{sortName}</h3>
        <p>Sorted: {results.join(", ")}</p>
        <p>Comparisons: {comparisonCount}</p>
        <p>Swaps: {swapCount}</p>
      </CardContent>
    </Card>
  );
};
export default ResultCard;
