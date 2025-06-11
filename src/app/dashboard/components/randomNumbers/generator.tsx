import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useLang } from "@/lib/providers/LangProvider";
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
    handleGenerate(randomNumbers(min, max, count));
  };
  const { language } = useLang();
  const title = language === "ko" ? "난수 생성기" : "Random Number Generator";
  const description =
    language === "ko"
      ? "최소값과 최대값을 입력하고, 생성할 난수의 개수를 선택하세요."
      : "Enter the minimum and maximum values, and select the number of random numbers to generate.";
  const placeholderText = language === "ko" ? "개수 선택" : "Select count";
  const buttonText = language === "ko" ? "생성" : "Generate";
  return (
    <>
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{description}&nbsp;(50-70)</p>
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
            <SelectValue placeholder={placeholderText} />
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
      <Button
        className="w-full"
        onClick={handleClick}
        disabled={min >= max || count < 50 || count > 70}
      >
        {buttonText}
      </Button>
    </>
  );
};

export default Generator;
