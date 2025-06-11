import { SortDescription } from "@/constants/descriptions";
import { useLang } from "@/lib/providers/LangProvider";
import { SortName } from "@/lib/sorts";

interface DescriptionProps {
  description: SortDescription[];
  sortName: SortName;
}

const Description = ({ description, sortName }: DescriptionProps) => {
  const { language } = useLang();

  return (
    <div className="w-full flex flex-col border-t pt-4 font-normal">
      <div>
        {description.map((desc, index) => {
          const text = desc.text[language];
          const isLineEnd = text.includes("\n");
          return (
            <span
              key={`description-${sortName}-${index}`}
              className={`${desc.isBold ? "font-bold" : ""} ${
                desc.isItalic ? "italic" : ""
              } ${desc.isUnderline ? "underline" : ""}`}
            >
              {text}&nbsp;
              {isLineEnd && <br />}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Description;
