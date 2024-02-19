import SushiHero from "/src/assets/sushi-chopstik-2.png"
import Logo from "/src/assets/logo.png"

function Hero() {

    return (
        <div className="bg-[#eee] h-screen relative overflow-hidden w-full"  id="hero">
            <div className="w-full h-full md:flex md:justify-between items-center pt-14">
                <h1 className="md:h-[80vh] md:w-[40vh] h-[40vh] w-[20vh] bg-primary rounded-e-full"></h1>
                <h1 className="md:h-[80vh] md:w-[40vh] h-[40vh] w-[20vh] bg-secondary rounded-s-full absolute end-0"></h1>
            </div>
            <div className="absolute -right-1 md:top-16 top-2/4 overflow-hidden ">
                <img src={SushiHero} alt="" className="w-[500px] -rotate-[14deg]" />
            </div>
            <div className="md:w-1/2 w-full absolute md:top-1/3 top-0 md:-translate-y-0 md:pt-0 pt-52 left-0 flex md:ms-20 ms-3 pe-3">
                <div className="">
                    <div className="flex items-center">
                        <h1 className="md:text-8xl text-6xl font-bold">Sushi</h1>
                        <img src={Logo} alt="logo" className="md:w-[110px] md:h-[90px] w-[60px] h-[45px] ms-3" />
                    </div>
                    <div className="w-full h-full">
                        <h1 className="md:text-8xl text-6xl font-bold">Kushuka</h1>
                        <h3 className="md:text-xl text-lg font-medium mt-4 mb-6">Nikmati sushi dengan cita rasa autentik dari bahan-bahan yang berkualitas tinggi</h3>
                        <button className="bg-black text-primary py-3 px-6 rounded-full tracking-wider transition hover:bg-gray-800 ease-in-out duration-300">Lihat Menu</button>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default Hero