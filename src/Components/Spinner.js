import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo } from "react";
const Spinner = (props) => {
    return _jsx(_Fragment, { children: _jsx("div", { className: "border-l-2 border-blue-400 animate-spin" }) });
};
Spinner.defaultProps = {};
export default memo(Spinner);
