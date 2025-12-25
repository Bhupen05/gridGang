import logo from "../assets/logo.png"
import 'remixicon/fonts/remixicon.css'

function Nav() {
  return (
        <>
            <div className="nav w-full fixed text-amber-50 h-20 items-center px-20 flex justify-between ">
                <div className="logo">
                    <img className='w-30 h-30' src={logo} alt="" />
                </div>
                <div className="link uppercase flex gap-10">
                    <h3 className="cursor-pointer hover:text-gray-300">Home</h3>
                    <h3 className="cursor-pointer hover:text-gray-300">about</h3>
                    <h3 className="cursor-pointer hover:text-gray-300">token</h3>
                    <h3 className="cursor-pointer hover:text-gray-300">roadmap</h3>
                </div>
                <div className="but uppercase cursor-pointer hover:text-gray-400">
                    <h3 className='text border-2 px-4 text-xl rounded-b-2xl'><i class="ri-global-line mr-3"></i>join us</h3>
                </div> 
            </div>
        </>
  )
}

export default Nav