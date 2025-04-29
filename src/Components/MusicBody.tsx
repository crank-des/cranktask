import { FC } from "react";
import {
  IconBrandInstagram,
  IconBrandYoutube,
  IconMail,
  IconBrandFacebook,
  IconBrandTwitter,
  IconBrandThreads,
} from "@tabler/icons-react";

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
    <div className="relative w-full overflow-hidden min-h-screen h-[100dvh]">
      {/* Background Video for Mobile */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 block md:hidden brightness-125 contrast-110 saturate-110"
        src="/assets/gif-black.mp4"
        autoPlay
        loop
        muted
        playsInline
        onContextMenu={(e) => e.preventDefault()}
      />

      {/* Dark overlay */}
      {/* <div className="absolute inset-0 bg-black/40 z-10 block md:hidden" /> */}

      {/* Foreground Content */}
      <div className="relative z-20 flex flex-col items-center justify-between h-full px-4 py-6">
        {/* <audio loop className="hidden">
          <source src="/assets/backBeat.wav" type="audio/wav" />
          <source src="/assets/backBeat2.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio> */}

        {/* Head */}
        <div className="flex flex-col items-center mt-6 md:mt-4">
          <h1 className="font-helvetica text-white text-3xl animate-fadeIn md:text-5xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]">
            Stay Tuned
          </h1>
        </div>

        {/* Middle Video (Visible on desktop only) */}
        <div className="hidden md:flex flex-col items-center justify-center flex-1 w-full space-y-6">
          <video
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-96 object-contain rounded md:rounded-none"
            src="/assets/gif-black.mp4"
            autoPlay
            loop
            muted
            playsInline
            onContextMenu={(e) => e.preventDefault()}
          />

          {/* Icons moved here */}
          <div className="flex flex-wrap justify-center space-x-4">
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="https://www.youtube.com/@CrankTasy"
                aria-label="YouTube"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandYoutube />
              </a>
              <a
                href="http://instagram.com/cranktasy"
                aria-label="Instagram"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandInstagram />
              </a>
              <a
                href="http://threads.net/@cranktasy"
                aria-label="Threads"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandThreads />
              </a>
              <a
                href="https://facebook.com/cranktasy"
                aria-label="Facebook"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="http://x.com/cranktasy"
                aria-label="Twitter"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandTwitter />
              </a>
              <div
                onClick={handleGmailClick}
                id="gmail-icon"
                aria-label="Gmail"
                className="text-white cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconMail />
              </div>
            </IconContext.Provider>
          </div>
        </div>
        {/* Mobile only icons */}
        <div className="flex md:hidden mt-6">
          <div className="flex flex-wrap justify-center space-x-4">
            <IconContext.Provider value={{ color: "white", size: "22px" }}>
              <a
                href="https://www.youtube.com/@CrankTasy"
                aria-label="YouTube"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandYoutube />
              </a>
              <a
                href="http://instagram.com/cranktasy"
                aria-label="Instagram"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandInstagram />
              </a>
              <a
                href="http://threads.net/@cranktasy"
                aria-label="Threads"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandThreads />
              </a>
              <a
                href="https://facebook.com/cranktasy"
                aria-label="Facebook"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandFacebook />
              </a>
              <a
                href="http://x.com/cranktasy"
                aria-label="Twitter"
                className="text-white hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconBrandTwitter />
              </a>
              <div
                onClick={handleGmailClick}
                id="gmail-icon"
                aria-label="Gmail"
                className="text-white cursor-pointer hover:text-cyan-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <IconMail />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicBody;
