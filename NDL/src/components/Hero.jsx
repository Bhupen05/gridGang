import bgImage from '../assets/bg-img.png'
import textImage from '../assets/main-text.png'
import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div
    style={
        {
            background:`url('${bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }
    }
     className="w-full h-screen text-white flex flex-col justify-center"
    >
        <img className='w-5/6' src={textImage} alt="" />
        <h2 className='absolute uppercase bottom-68 left-30  text-2xl md:text-lg lg:text-lg '>discover digital art and collect nfts</h2>

        <span className='absolute uppercase bottom-50 left-30  text-2xl md:text-lg lg:text-lg  flex items-center gap-2'>gets orbits <FaArrowRightLong/></span>
    </div>
  )
}

export default Hero