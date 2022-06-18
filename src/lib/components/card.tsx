import React from "react";
import clsx from "clsx";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  shadow?: keyof typeof shadows;
  border?: boolean;
}

const shadows = {
  xs: "shadow-xs",
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-lg",
  xl: "shadow-xl",
};

const Card = ({ className, border, shadow, ...props }: Props) => {
  const clz = clsx(
    shadow ? shadows[shadow] : null,
    "bg-white border-text-gray p-6 rounded-xl shadow-black/5 overflow-hidden",
    className,
    {
      "border-2": border,
    }
  );

  return (
    <div className={clz} {...props}>
      {props.children}
    </div>
  );
};

export default Card;
