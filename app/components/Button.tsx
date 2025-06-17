import React, { JSX, ReactNode } from "react";

const Button = ({
  text,
  icon,
  className,
}: {
  text?: string;
  icon?: ReactNode;
  className?: string;
}) => {
  const btnClasses: string = `p-[3px] relative cursor-pointer || ${className || ""}`;
  const gradientClasses: string = `absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg || ${className || ""}`;
  const innerClasses: string = `px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-foreground hover:bg-transparent font-bold || ${className || ""}`;

  const renderButton = (): JSX.Element => (
    <button className={btnClasses}>
      <div className={gradientClasses} />
      <div className={innerClasses}>
        {text}
        <span>{icon}</span>
      </div>
    </button>
  );

  return renderButton();
};

export default Button;
