import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import cn from "classnames";
import { memo } from "react";
const Button = ({ theme, ...rest }) => {
    const themeClasses = theme === "primary"
        ? "bg-yellow-500 focus:ring-yellow-800 text-white hover:bg-yellow-700"
        : "bg-white focis:ring-gray-400 hover:bg-gray-700";
    return (_jsx(_Fragment, { children: _jsx("div", { children: _jsx("button", { className: cn(" rounded-md font-medium px-6 py-2 inline-flex  focus:ring-2 ", themeClasses), ...rest }) }) }));
};
Button.defaultProps = { theme: "primary", Text: "Button" };
export default memo(Button);
