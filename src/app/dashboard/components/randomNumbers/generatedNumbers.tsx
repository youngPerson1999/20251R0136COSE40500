import { Card, CardContent } from "@/components/ui/card";
import { Meta } from ".";

interface GeneratedNumbersProps {
  meta: Meta;
  results: number[];
}

const GeneratedNumbers = ({ results, meta }: GeneratedNumbersProps) => {
  return (
    <>
      {results.length > 0 && (
        <div className="w-full flex flex-col">
          <h2 className="text-lg font-semibold">Generated Numbers</h2>
          <Card className="mt-4 p-4">
            <CardContent>
              <div className="mb-2">
                Generated {meta.count} random numbers between {meta.min} and{" "}
                {meta.max}:
              </div>
              <div>{results.join(", ")}</div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};
export default GeneratedNumbers;
