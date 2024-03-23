import Image from "next/image";
import hero from "../../public/hero.svg";
import {
  ClerkLoaded,
  ClerkLoading,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Home() {
  return (
    <div className="max-w-[988px] flex-1 flex flex-col items-center justify-center gap-4 p-4 lg:flex-row ">
      <div className="relative w-[240px] h-[240px] lg:w-[420px] lg:h-[420px]">
        <Image src={hero} fill alt="hero" />
      </div>
      <div className="flex flex-col items-center justify-center space-y-5 ">
        <h1 className="text-xl lg:text-3xl text-neutral-600 font-bold max-w-[480px] text-center ">
          Learn, practice, and master new languages with lingo
        </h1>
        <div className="flex-1 flex flex-col gap-y-3 w-full max-w-[350px] items-center justify-center">
          <ClerkLoading>
            <Loader className="text-muted-foreground h-5 w-5 animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button size={"lg"} variant={"secondary"} className="w-full">
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton
                mode="modal"
                afterSignInUrl="/learn"
                afterSignUpUrl="/learn"
              >
                <Button
                  size={"lg"}
                  variant={"primayOutline"}
                  className="w-full"
                >
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button
                variant={"secondary"}
                size={"lg"}
                className="w-full"
                asChild
              >
                <Link href={"/learn"}>Continue learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
