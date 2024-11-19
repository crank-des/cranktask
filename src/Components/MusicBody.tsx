import { FC, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const MusicBody: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  // const handlePlayAudio = () => {
  //   const audio = document.querySelector("audio");
  //   if (audio) {
  //     audio.play();
  //     setIsPlaying(true);
  //   }
  // };
    const handlePlayAudio = () => {
      const audio = document.querySelector("audio");
      if (audio) {
        audio
          .play()
          .then(() => {
            setIsPlaying(true); // Mark as playing once audio starts
          })
          .catch((error) => {
            console.error("Audio playback failed:", error);
          });
      }
    };

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
    <div className="flex flex-col items-center md:justify-between bg-[#99ca66] overflow-hidden h-[42rem] rounded-md px-4 py-2 w-full mx-auto md:min-h-screen">
      <audio loop className="hidden">
        <source src="/assets/backBeat.wav" type="audio/wav" />
        <source src="/assets/backBeat2.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>

      {/* Head */}
      <div className="flex flex-col items-center md:mt-4">
        <h1 className="font-helvetica text-white mb-1 text-2xl md:text-3xl lg:text-4xl">
          Stay Tuned
        </h1>
      </div>

      {/* Middle: Center the Ghost gif */}
      <div className="flex flex-col items-center justify-center flex-1 w-full">
        <img
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto object-contain rounded md:rounded-none"
          src="/assets/Ghost.gif"
          alt="Ghost animation"
        />
        {/* Play Button */}
        <IconContext.Provider value={{ color: "white", size: "30px" }}>
          {!isPlaying && (
            <button onClick={handlePlayAudio} className=" mt-24 md:mt-0">
              <IoPlayCircleOutline />
            </button>
          )}
        </IconContext.Provider>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col items-center md:justify-end">
        <h2 className="font-gideon text-white text-lg md:text-xl lg:text-2xl">
          Connect With Us
        </h2>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center md:justify-start space-x-4">
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
              href="http://instagram.com/cranktasy"
              className="text-white hover:text-gray-300 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
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
              href="https://www.facebook.com/cranktasy.pro"
              className="text-white hover:text-gray-300 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
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
          <IconContext.Provider value={{ color: "white", size: "22px" }}>
            <div
              id="gmail-icon"
              className="cursor-pointer text-white hover:text-gray-300 transition"
              aria-label="Gmail"
            >
              <BiLogoGmail />
            </div>
          </IconContext.Provider>
        </div>
      </div>
    </div>
  );
};

export default MusicBody;
