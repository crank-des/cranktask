import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";
const MusicBody = () => {
    // const [isPlaying, setIsPlaying] = useState(false);
    // const handlePlayAudio = () => {
    //   const audio = document.querySelector("audio");
    //   if (audio) {
    //     audio
    //       .play()
    //       .then(() => {
    //         setIsPlaying(true); // Mark as playing once audio starts
    //       })
    //       .catch((error) => {
    //         console.error("Audio playback failed:", error);
    //       });
    //   }
    // };
    const handleGmailClick = () => {
        const email = "cranktasy.com@gmail.com";
        const subject = encodeURIComponent("Subject of the email");
        const body = encodeURIComponent("Body of the email");
        const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
        window.location.href = mailtoLink;
    };
    return (_jsxs("div", { className: "relative w-full h-screen overflow-hidden", children: [_jsx("video", { className: "absolute inset-0 w-full h-full object-cover z-0 block md:hidden", src: "/assets/gif-black.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, onContextMenu: (e) => e.preventDefault() }), _jsx("div", { className: "absolute inset-0 bg-black/70 z-10 block md:hidden" }), _jsxs("div", { className: "relative z-20 flex flex-col items-center justify-between h-full px-4 py-6", children: [_jsxs("audio", { loop: true, className: "hidden", children: [_jsx("source", { src: "/assets/backBeat.wav", type: "audio/wav" }), _jsx("source", { src: "/assets/backBeat2.mp3", type: "audio/mp3" }), "Your browser does not support the audio element."] }), _jsx("div", { className: "flex flex-col items-center mt-6 md:mt-4", children: _jsx("h1", { className: "font-helvetica text-white text-3xl animate-fadeIn md:text-5xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]", children: "Stay Tuned" }) }), _jsx("div", { className: "hidden md:flex flex-col items-center justify-center flex-1 w-full", children: _jsx("video", { className: "w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-96 object-contain rounded md:rounded-none", src: "/assets/gif-black.mp4", autoPlay: true, loop: true, muted: true, playsInline: true, onContextMenu: (e) => e.preventDefault() }) }), _jsx("div", { className: "flex flex-col items-center md:justify-end", children: _jsxs("div", { className: "flex flex-wrap justify-center md:justify-start space-x-4", children: [_jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("a", { href: "https://www.youtube.com/@CrankTasy", className: "text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "YouTube", children: _jsx(FaYoutube, {}) }) }), _jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("a", { href: "http://instagram.com/cranktasy", className: "text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "Instagram", children: _jsx(FaInstagram, {}) }) }), _jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("a", { href: "http://threads.net/@cranktasy", className: "text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "Thread", children: _jsx(FaSquareThreads, {}) }) }), _jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("a", { href: "https://www.facebook.com/cranktasy.pro", className: "text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "Facebook", children: _jsx(FaFacebook, {}) }) }), _jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("a", { href: "http://x.com/cranktasy", className: "text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "Twitter", children: _jsx(FaSquareXTwitter, {}) }) }), _jsx(IconContext.Provider, { value: { color: "white", size: "22px" }, children: _jsx("div", { onClick: handleGmailClick, id: "gmail-icon", className: "text-white cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]", "aria-label": "Gmail", children: _jsx(BiLogoGmail, {}) }) })] }) })] })] }));
};
export default MusicBody;
