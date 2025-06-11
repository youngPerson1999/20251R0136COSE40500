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
      {description.map((desc, index) => {
        const text = desc.text[language];
        return <div key={`description-${sortName}-${index}`}>{text}</div>;
      })}
    </div>
  );
};

export default Description;
