import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "secondary";
  text?: string | null;
}

const Button: React.FC<Props> = (props) => {
  const { variant, text, ...button_props } = props;
  return (
    <button
      className={clsx(
        "border border-primary-400 active:scale-95 active:bg-primary-400 hover:bg-primary-400 duration-100 ease-in-out mx-auto py-3 px-4 rounded-lg text-center font-semibold",
        {
          "bg-primary-500": variant === "primary",
        }
      )}
      {...button_props}
    >
      {text}
    </button>
  );
};

export default Button;
