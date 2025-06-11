import { Card, CardContent } from "@/components/ui/card";
import { SortName, sorts } from "@/lib/sorts";
import timeCalculate from "@/lib/time";

interface ResultCardProps {
  sortName: SortName;
  input: number[];
}
const ResultCard = ({ sortName, input }: ResultCardProps) => {
  const sortFunc = sorts[sortName];
  const { result, duration } = timeCalculate(sortFunc, input);

  return (
    <Card className="mt-4 py-4">
      <CardContent>
        <h3 className="text-lg font-semibold">{sortName}</h3>
        <p>Comparisons: {result.comparisonCount}</p>
        <p>Swaps: {result.swapCount}</p>
        <p>Duration: {duration}ms</p>
      </CardContent>
    </Card>
  );
};
export default ResultCard;
