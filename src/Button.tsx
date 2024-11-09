import cn from "classnames";
import { ButtonHTMLAttributes, FC, memo } from "react";

type ButtonProps = {
  Text?: string;
  theme?: "primary" | "default";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: FC<ButtonProps> = ({ theme, ...rest }) => {
  const themeClasses =
    theme === "primary"
      ? "bg-yellow-500 focus:ring-yellow-800 text-white hover:bg-yellow-700"
      : "bg-white focis:ring-gray-400 hover:bg-gray-700";

  return (
    <>
      <div>
        <button
          className={cn(
            " rounded-md font-medium px-6 py-2 inline-flex  focus:ring-2 ",
            themeClasses
          )}
          {...rest}
        ></button>
      </div>
    </>
  );
};

Button.defaultProps = { theme: "primary", Text: "Button" };

export default memo(Button);
