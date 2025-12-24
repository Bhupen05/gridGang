import bgImage from '../assets/bg-img.png'
import textImage from '../assets/main-text.png'

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
        <h2 className='absolute uppercase bottom-68 left-70 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-lg lg:text-lg font-bold'>discover digital art and collect nfts</h2>

        <span className='absolute uppercase bottom-50 left-40 -translate-x-1/2 -translate-y-1/2 text-2xl md:text-lg lg:text-lg font-bold'>gets orbits --</span>
    </div>
  )
}

export default Hero