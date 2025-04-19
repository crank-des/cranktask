import { jsx as _jsx } from "react/jsx-runtime";
import MusicBody from "./Components/MusicBody";
// import ShowList from "./Components/ShowList";
// import ShowMusic from "./Components/ShowMusic";
function App() {
    return (_jsx("div", { className: "bg-black h-screen", children: _jsx(MusicBody, {}) }));
}
export default App;
