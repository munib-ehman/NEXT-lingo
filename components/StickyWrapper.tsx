import React from "react";
type props = {
  children: React.ReactNode;
};

const StickyWrapper = ({ children }: props) => {
  return (
    <div className="hidden lg:block w-[368px] bottom-6">
      <div className="min-h-[cal(100vh-48px)] top-6 flex flex-col gap-y-4 sticky">
        {children}
      </div>
    </div>
  );
};

export default StickyWrapper;
