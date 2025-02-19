import React from "react";

const Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
      {children}
    </h2>
  );
};

export default Title;
