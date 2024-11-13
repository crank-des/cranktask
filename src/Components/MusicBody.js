import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Children, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";
// import { IconContext } from "react-icons/lib/iconContext";
const MusicBody = () => {
    useEffect(() => {
        const gmailIcon = document.getElementById("gmail-icon");
        if (gmailIcon) {
            const handleClick = () => {
                const email = "cranktasy.com@gmail.com";
                const subject = encodeURIComponent("Subject of the email");
                const body = encodeURIComponent("Body of the email");
                const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
                window.location.href = mailtoLink;
            };
            gmailIcon.addEventListener("click", handleClick);
            return () => {
                gmailIcon.removeEventListener("click", handleClick);
            };
        } else {
            console.error("Gmail icon not found on the page.");
        }
    }, []);
    return _jsxs("div", {
        className: "flex flex-col items-center bg-[#99ca66] rounded-md mt-20 md:mt-1 p-2 md:p-0 w-full mx-auto",
        children: [
            _jsx("h1", {
                className: "font-gideon text-white text-xl",
                children: "Stay Tuned",
            }),
            _jsx("img", {
                className: "w-auto h-72 md:w-auto md:h-auto object-cover mt-9 rounded md:rounded-none",
                src: "/assets/Ghost.gif",
                alt: "Ghost animation",
            }),

            _jsx("h1", {
                className: "font-gideon text-white text-xl",
                children: "Connect With Us ",
            }),
            _jsx("div", {
                className: "flex flex-col  items-end bg-[#99ca66] mt-36 md:mt-0.5",

                children: _jsxs("div", {
                    className: "flex space-x-4 mt-2",
                    children: [
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("a", {
                                href: "http://instagram.com/cranktasy",
                                className: "text-white hover:text-gray-300 transition",
                                "aria-label": "Instagram",
                                children: _jsx(FaInstagram, {}),
                            }),
                        }),
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("div", {
                                id: "gmail-icon",
                                className: "cursor-pointer text-white hover:text-gray-300 transition",
                                "aria-label": "Gmail",
                                children: _jsx(BiLogoGmail, {}),
                            }),
                        }),
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("a", {
                                href: "https://www.facebook.com/cranktasy.pro",
                                className: "text-white hover:text-gray-300 transition",
                                "aria-label": "Facebook",
                                children: _jsx(FaFacebook, {}),
                            }),
                        }),
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("a", {
                                href: "http://threads.net/@cranktasy",
                                className: "text-white hover:text-gray-300 transition",
                                "aria-label": "Thread",
                                children: _jsx(FaSquareThreads, {}),
                            }),
                        }),
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("a", {
                                href: "https://www.youtube.com/@CrankTasy",
                                className: "text-white hover:text-gray-300 transition",
                                "aria-label": "Thread",
                                children: _jsx(FaYoutube, {}),
                            }),
                        }),
                        _jsx(IconContext.Provider, {
                            value: { color: "white", size: "22px" },
                            children: _jsx("a", {
                                href: "http://x.com/cranktasy",
                                className: "text-white hover:text-gray-300 transition",
                                "aria-label": "Twitter",
                                children: _jsx(FaSquareXTwitter, {}),
                            }),
                        }),
                    ],
                }),
            }),
        ],
    });
};
export default MusicBody;