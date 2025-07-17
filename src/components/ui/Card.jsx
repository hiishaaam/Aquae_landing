import React from "react";

export const Card = ({ children, className = "", ...props }) => (
  <div className={`bg-white rounded shadow ${className}`} {...props}>
    {children}
  </div>
);

export const CardContent = ({ children, className = "", ...props }) => (
  <div className={className} {...props}>
    {children}
  </div>
);

export default Card;