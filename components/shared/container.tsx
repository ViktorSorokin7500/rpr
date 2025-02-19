import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <section className={`max-w-7xl mx-auto py-4 ${className}`}>
      {children}
    </section>
  );
};

export default Container;
