import React from "react";
import copy from "copy-to-clipboard";

interface CopyCodeProps {
  code: string;
}

export const CopyCode = ({ code }: CopyCodeProps) => {
  const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    copy(JSON.stringify(code));
  };

  return (
    <div>
      <div className="min-h-[300px] w-full border p-5">{code}</div>
      <button className="mt-5 cursor-pointer" type="button" onClick={handleOnClick}>
        COPY
      </button>
    </div>
  );
};
