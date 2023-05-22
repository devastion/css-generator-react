import React from "react";

interface PreviewProps {
  styles?: React.CSSProperties;
  children?: React.ReactNode;
}

export const Preview = ({ styles, children }: PreviewProps) => {
  return (
    <div className="my-5 ">
      <h2>Preview:</h2>
      <div style={styles} className="mx-auto h-[200px] w-[200px] border border-green py-[100px] text-center">
        {children ? children : "Hello, world!"}
      </div>
    </div>
  );
};
