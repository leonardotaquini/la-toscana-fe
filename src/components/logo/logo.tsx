import { Pizza } from "lucide-react";
import React from "react";

export const Logo = ({ className, size=30 }: { className?: string, size?: number}) => {
  return (
    <span className={`text-4xl my-2 flex justify-center items-center leading-loose ${className}`}>
      <p>L</p>
      <Pizza size={size} className="rotate-225 mt-3 mr-3" />
      <p>TOSCAN</p>
      <Pizza size={size} className="rotate-225 mt-3" />
    </span>
  );
};
