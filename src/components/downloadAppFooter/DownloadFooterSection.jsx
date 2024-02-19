import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import SushiChopstick1 from "/src/assets/sushi-chopstik-1.png"
import SushiChopstick2 from "/src/assets/sushi-chopstik-2.png"

function DownloadFooterSection() {
    return (
        <div className="bg-primary md:h-[400px] h-[450px] relative overflow-hidden">
            <div className="absolute flex justify-between w-full h-full md:top-1/5">
                <div><img src={SushiChopstick2} alt="" className="w-[350px] transform scale-x-[-1]" /></div>
                <div><img src={SushiChopstick1} alt="" className="w-[350px] transform scale-x-[-1]" /></div>
            </div>
            <div className="h-full w-full flex flex-col justify-center items-center md:mt-0 mt-20">
                <div className="md:w-1/2 w-full text-center">
                    <h1 className="md:text-5xl text-2xl font-semibold">Download Aplikasi kami di playstore ataupun appstore</h1>
                </div>
                <div className="flex md:flex-row flex-col mt-10">
                    <div className="w-[200px] flex me-5 bg-white py-2 px-5 rounded-full items-center shadow-xl mb-3">
                        <div className="text-4xl me-3">
                            <FaApple />
                        </div>
                        <div className="">
                            <p className="text-slate-700 text-[10px] font-normal">Download on the</p>
                            <p className="text-xl font-bold">App Store</p>
                        </div>
                    </div>
                    <div className="w-[200px] flex me-5 bg-white py-2 px-5 rounded-full items-center shadow-xl mb-3">
                        <div className="text-4xl me-3">
                            <IoLogoGooglePlaystore />
                        </div>
                        <div className="">
                            <p className="text-slate-700 text-[10px] font-normal">Download on the</p>
                            <p className="text-xl font-bold">Play Store</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default DownloadFooterSection