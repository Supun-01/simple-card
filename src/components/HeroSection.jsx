import BoxImage from '../assets/BoxImage.png'
import Img02 from '../assets/Img_02.jpg'
import { FaYoutube } from "react-icons/fa6";

function HeroSection() {
    return (
        <div className='flex flex-wrap justify-center m-3'>
            <div className='bg-yellow-300 border border-black rounded-3xl lg:w-2/3'>
                <div className="flex flex-wrap py-10 w-full">

                    <div className=" flex flex-wrap justify-center md:items-center w-full md:w-1/4 px-3">
                        <img className='w-72 rounded-3xl' src={Img02} alt="Box Image" />
                    </div>

                    <div className="w-full md:w-2/4 flex flex-wrap my-auto px-5 md:px-5">
                        <div className='w-full py-2'>
                            <h3 className='font-semibold flex flex-wrap items-center text-gray-800 text-2xl'><FaYoutube className='text-3xl' /><span className='tracking-tighter'>YouTube</span> <span className='text-xl text-gray-700'>&nbsp;Featured</span></h3>
                        </div>
                        <div className='w-full text-4xl pb-2'>
                            <h1 className='font-bold'>YouTube just leveled up</h1>
                        </div>
                        <div>
                            <p className='font-medium text-gray-700'>Check out YouTube's fresh look and exciting new features, like playlists you can build with friends</p>
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 mt-5 flex flex-wrap items-center justify-center px-3">
                        <div>
                            <a href="#">
                                <button className='bg-black text-white py-2 px-10 rounded-2xl hover:bg-gray-900'>
                                    Click!
                                </button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection