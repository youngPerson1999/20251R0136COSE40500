import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { randomNumbers } from "@/lib/utils";

interface GeneratorProps {
  min: number;
  max: number;
  count: number;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
  setCount: (count: number) => void;
  handleGenerate: (results: number[]) => void;
}

const Generator = ({
  min,
  max,
  count,
  setMin,
  setMax,
  setCount,
  handleGenerate,
}: GeneratorProps) => {
  const handleClick = () => {
    console.log(`Generating ${count} random numbers between ${min} and ${max}`);
    handleGenerate(randomNumbers(min, max, count));
  };
  return (
    <>
      <h2 className="text-lg font-semibold">Random Number Generator</h2>
      <p>
        최소값과 최대값을 입력하세요 (1~100), 그리고 생성할 난수의 개수를
        입력하세요 (50~70개).
      </p>
      <div className="flex flex-row gap-4 w-full">
        <Slider
          value={[min, max]}
          onValueChange={(value) => {
            setMin(value[0]);
            setMax(value[1]);
          }}
          min={1}
          max={100}
        />
        <Select
          onValueChange={(value) => {
            const selectedCount = parseInt(value, 10);
            setCount(selectedCount);
          }}
        >
          <SelectTrigger className="w-32">
            <SelectValue placeholder="Select count" />
          </SelectTrigger>
          <SelectContent>
            {Array.from({ length: 21 }, (_, i) => i + 50).map((i) => (
              <SelectItem key={i} value={`${i}`}>
                {i}개
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Button className="w-full" onClick={handleClick}>
        Generate
      </Button>
    </>
  );
};

export default Generator;
