
import { TiSocialFacebook } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="text-white flex justify-evenly items-center bg-transparent absolute bottom-0 right-0 left-0 py-4.5">
      <div className="flex flex-col text-[20px] font-bold leading-5 tracking-wider  border-r-2 border-gray-400/45 pr-10">
        27K +
        <span className="font-bold text-[8px] ml-2 tracking-wider text-gray-300">
          ARTISTS
        </span>
      </div>
      <div className="flex flex-col text-[20px] font-bold leading-5 tracking-wider border-r-2 border-gray-400/45 pr-10">
        876K+
        <span className="font-bold text-[8px] ml-2 tracking-wider text-gray-300">
          ARTWORK
        </span>
      </div>
      <div className="flex flex-col text-[20px] font-bold leading-5 tracking-wider border-r-2 border-gray-400/45 pr-10">
        20K+{" "}
        <span className="font-bold text-[8px] ml-2 tracking-wider text-gray-300">
          AUCTION
        </span>
      </div>
      <div className="flex items-center gap-1 border-r-2 border-gray-400/45 pr-10">
        <span className="size-10 rounded-full border-2 flex items-center justify-center border-white/50">
          <FaPlay size={12} />
        </span>
        <span className="text-[10px] font-medium tracking-widest text-white/90">PLAY VIDEO</span>
      </div>
      <div className="flex items-center gap-6 text-white ">
        <TiSocialFacebook />
        <FaInstagram className="text-white/60" />
        <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
