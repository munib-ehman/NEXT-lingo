import Image from "next/image";
import pk from "../../public/pk.svg";
import jp from "../../public/jp.svg";
import tr from "../../public/tr.svg";
import us from "../../public/us.svg";
import { Button } from "@/components/ui/button";

export default function Footer() {
  return (
    <div className="hidden lg:block h-20 border-t-2 border-slate-200 p-4 w-full">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly ">
        <Button size={'lg'} variant={"ghost"}>
        <Image
          src={pk}
          alt="Pakistan"
          width={40}
          height={32}
          className="mr-2 rounded-md"
        />
        Pakistan
        </Button>
        <Button size={'lg'} variant={"ghost"}>
        <Image
          src={us}
          alt="United estate"
          width={40}
          height={32}
          className="mr-2 rounded-md"
        />
        US
        </Button>
        <Button size={'lg'} variant={"ghost"}>
        <Image
          src={jp}
          alt="japan"
          width={40}
          height={32}
          className="mr-2 rounded-md"
        />
        Japan
        </Button>
        <Button size={'lg'} variant={"ghost"}>
        <Image
          src={tr}
          alt="Turkish"
          width={40}
          height={32}
          className="mr-2 rounded-md"
        />
        Turkey
        </Button>
      </div>
    </div>
  );
}
