import React from "react";

const Container = ({ children, className }) => {
  return (
    <div>
      <div className={`container mx-auto ${className}`}>{children}</div>
    </div>
  );
};

export default Container;
