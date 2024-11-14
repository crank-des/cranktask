import { FC, useEffect } from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";
import { IconContext } from "react-icons";

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
    <div className="flex flex-col items-center justify-between min-h-screen bg-[#99ca66] rounded-md px-4 py-1 w-full mx-auto">
      {/* Head */}
      <div className="flex flex-col items-center mt-2 md:mt-3">
        <h1 className=" font-helvetica text-white mb-3 text-2xl md:text-3xl lg:text-4xl">
          Stay Tuned
        </h1>
      </div>

      {/* Middle: Center the Ghost gif */}
      <div className="flex flex-col items-center justify-center flex-1">
        <img
          className="w-full h-60 sm:h-72 md:h-80 lg:h-96 object-contain mt-4 rounded md:rounded-none"
          src="/assets/Ghost.gif"
          alt="Ghost animation"
        />
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center justify-end flex-1">
        <h2 className="font-gideon text-white text-lg md:text-xl lg:text-2xl mt-1 mb-1">
          Connect With Us
        </h2>

        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
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
              aria-label="YouTube"
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
      </div>
    </div>
  );
};

export default MusicBody;
