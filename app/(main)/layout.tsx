import MobileHeader from "@/components/MobileHeader";
import { Sidebar } from "@/components/Sidebar";

type props = {
  children: React.ReactNode;
};
const MainLayout = ({ children }: props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar classname="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-[0px]">
        <div className="max-w-[1056px] mx-auto pt-6 h-full">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
