import React from "react";

interface CoreProps {
  children: React.ReactElement | React.ReactElement[];
}

export const Core = ({ children }: CoreProps) => {
  return (
    <div className="mx-auto max-w-[768px] ">
      {children}
      <div className="mt-5 px-4">Navigate through the menu.</div>
    </div>
  );
};
