import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { memo } from "react";
const ShowRow = ({ show }) => {
    return (_jsxs("div", { className: "flex bg-slate-400 rounded-md p-4 border mt-4  ", children: [_jsx("div", { className: "shrink-0", children: _jsx("img", { className: " h-36 w-30", src: show.image?.medium ||
                        "https://www.pngkey.com/png/detail/233-2332677_image-500580-placeholder-transparent.png" }) }), _jsxs("div", { className: "ml-4", children: [_jsx("h1", { children: show.name }), _jsx("p", { children: show.summary })] })] }));
};
ShowRow.defaultProps = {};
export default memo(ShowRow);
