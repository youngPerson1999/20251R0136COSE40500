import { Card, CardContent } from "@/components/ui/card";
import { Meta } from ".";
import { useLang } from "@/lib/providers/LangProvider";

interface GeneratedNumbersProps {
  meta: Meta;
  results: number[];
}

const GeneratedNumbers = ({ results, meta }: GeneratedNumbersProps) => {
  const { language } = useLang();
  const title = language === "ko" ? "생성 난수" : "Generated Numbers";
  const description =
    language === "ko"
      ? `생성난수는 ${meta.count}개이고, 최소 ${meta.min}에서 최대 ${meta.max}`
      : `Generated ${meta.count} random numbers between ${meta.min} and ${meta.max}`;
  return (
    <>
      {results.length > 0 && (
        <div className="w-full flex flex-col">
          <h2 className="text-lg font-semibold">{title}</h2>
          <Card className="mt-4 p-4">
            <CardContent>
              <div className="mb-2">{description}:</div>
              <div>{results.join(", ")}</div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
export default GeneratedNumbers;
