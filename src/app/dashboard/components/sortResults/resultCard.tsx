import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { useLang } from "@/lib/providers/LangProvider";
import { SortName, sorts } from "@/lib/sorts";
import timeCalculate from "@/lib/time";
import Description from "./description";
import { sortDescriptions } from "@/constants/descriptions";

interface ResultCardProps {
  sortName: SortName;
  input: number[];
}
const ResultCard = ({ sortName, input }: ResultCardProps) => {
  const sortFunc = sorts[sortName];
  const { result, duration } = timeCalculate(sortFunc, input);
  const { language } = useLang();

  return (
    <Card className="mt-4 py-4">
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem
            value={sortName}
            className="w-full text-lg font-semibold"
          >
            <AccordionTrigger className=" text-lg font-semibold">
              {sortName}
            </AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <p>
                {language === "en" ? "Comparisons" : "비교 횟수"}:{" "}
                {result.comparisonCount}
              </p>
              <p>
                {language === "en" ? "Swaps" : "교환 횟수"}: {result.swapCount}
              </p>
              <p>
                {language === "en" ? "Duration" : "소요 시간"}: {duration}ms
              </p>
              <Description
                sortName={sortName}
                description={sortDescriptions[sortName]}
              />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
};
export default ResultCard;
