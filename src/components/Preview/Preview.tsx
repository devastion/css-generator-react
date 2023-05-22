import React from "react";

interface PreviewProps {
  styles: React.CSSProperties;
}

export const Preview = ({ styles }: PreviewProps) => {
  return (
    <div className="my-5 ">
      <h2>Preview:</h2>
      <div style={styles} className="mx-auto h-[200px] w-[200px] border border-green py-[100px] text-center">
        Hello, world!
      </div>
    </div>
  );
};
