import { FC, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons/lib/esm/iconContext";

const MusicBody: FC = () => {
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

  return (
    <div className="flex flex-col items-center bg-[#99ca66] rounded-md mt-20 md:mt-1 p-2 md:p-0 w-full mx-auto">
      <img
        className="w-auto h-72 md:w-auto md:h-auto object-cover mt-9 rounded md:rounded-none"
        src="src/Components/Ghost.gif"
        alt="Ghost animation"
      />
      <div className="flex flex-col  items-end bg-[#99ca66] mt-36 md:mt-0.5">
        <div className="flex space-x-4">
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <a
              href="http://instagram.com/cranktasy"
              className="text-white hover:text-gray-300 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <div
              id="gmail-icon"
              className="cursor-pointer text-white hover:text-gray-300 transition"
              aria-label="Gmail"
            >
              <BiLogoGmail />
            </div>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <a
              href="https://www.facebook.com/cranktasy.pro"
              className="text-white hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <a
              href="http://threads.net/@cranktasy"
              className="text-white hover:text-gray-300 transition"
              aria-label="Thread"
            >
              <FaSquareThreads />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <a
              href="https://www.youtube.com/@CrankTasy"
              className="text-white hover:text-gray-300 transition"
              aria-label="Thread"
            >
              <FaYoutube />
            </a>
          </IconContext.Provider>
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <a
              href="http://x.com/cranktasy"
              className="text-white hover:text-gray-300 transition"
              aria-label="Twitter"
            >
              <FaSquareXTwitter />
            </a>
          </IconContext.Provider>
        </div>
        {/* <div className="font-bold text-lg mt-4 text-white">About me:</div> */}
      </div>
    </div>
  );
};

export default MusicBody;

