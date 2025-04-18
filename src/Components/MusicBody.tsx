import { FC, useEffect, useState } from "react";
import { FaInstagram } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";
import { IoPlayCircleOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const MusicBody: FC = () => {
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

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video for Mobile */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden"
        src="/assets/gif-black.mp4"
        autoPlay
        loop
        muted
        playsInline
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70 z-10 block md:hidden" />

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full px-4 py-6">
        <audio loop className="hidden">
          <source src="/assets/backBeat.wav" type="audio/wav" />
          <source src="/assets/backBeat2.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>

        {/* Head */}
        <div className="flex flex-col items-center mt-6 md:mt-4">
          <h1 className="font-helvetica text-white text-3xl animate-fadeIn md:text-5xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Stay Tuned
          </h1>
        </div>

        {/* Middle Video (Visible on desktop only) */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 w-full">
          <video
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-96 object-contain rounded md:rounded-none"
            src="/assets/gif-black.mp4"
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
          />
          {/* Play Button */}
          {/* <IconContext.Provider value={{ color: "white", size: "30px" }}>
            {!isPlaying && (
              <button onClick={handlePlayAudio} className=" mt-10 md:mt-0">
                <IoPlayCircleOutline />
              </button>
            )}
          </IconContext.Provider> */}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center md:justify-end">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:justify-start space-x-4">
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="https://www.youtube.com/@CrankTasy"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="YouTube"
              >
                <FaYoutube />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="http://instagram.com/cranktasy"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="http://threads.net/@cranktasy"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="Thread"
              >
                <FaSquareThreads />
              </a>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="https://www.facebook.com/cranktasy.pro"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
            </IconContext.Provider>

            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="http://x.com/cranktasy"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="Twitter"
              >
                <FaSquareXTwitter />
              </a>
            </IconContext.Provider>
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <div
                onClick={handleGmailClick}
                id="gmail-icon"
                className="text-white cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
                aria-label="Gmail"
              >
                <BiLogoGmail />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBody;
