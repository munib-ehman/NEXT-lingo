import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import Image from "next/image";

type Props = {
  title: string;
  id: string;
  imageSrc: string;
  disabled: boolean;
  isActive: boolean;
  onClick: (id: string) => void;
};
const Card = ({ title, imageSrc, disabled, isActive, onClick, id }: Props) => {
  return (
    <div
      onClick={() => onClick(id)}
      className={cn(
        "h-full border-2 border-b-4 rounded-xl hover:bg-black/5 cursor-pointer active:border-b-2 flex flex-col items-center justify-between p-3 pb-6 min-h-[217px] min-w-[200px]",
        disabled && "pointer-events-none opacity-50"
      )}
    >
      <div className="h-[20px] w-full flex items-center justify-end">
        {isActive && (
          <div className="rounded-md bg-green-600 flex items-center justify-center p-1.5">
            <Check className="text-white stroke-[4] h-3 w-3 " />
          </div>
        )}
      </div>
      <Image
        src={imageSrc}
        height={70}
        width={90}
        alt={title}
        className="rounded-md drop-shadow-md border object-contain"
      />
      <p className="text-neutral-700 text-center font-bold mt-3">{title}</p>
    </div>
  );
};

export default Card;
