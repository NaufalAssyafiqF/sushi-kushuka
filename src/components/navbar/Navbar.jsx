import { useEffect } from "react";
import Logo from "/src/assets/logo.png"


function Navbar() {
    const handlingNavScroll = () => {
        const header = document.getElementById("navbar-scroll");
        const fixednav = header.offsetTop;
        const scrollY = window.scrollY;

        if (scrollY > fixednav) {
            header.classList.add("navbar-fixed");
        } else {
            header.classList.remove("navbar-fixed");
        }
    }

    const humburgerHandling = () => {
        const hamburger = document.querySelector("#hamburger");
        const navMenu = document.querySelector("#nav-menu");

        hamburger.classList.toggle("hamburger-active");
        navMenu.classList.toggle("hidden");
    }

    useEffect(() => {
        window.addEventListener("scroll", handlingNavScroll);
        return () => {
            window.removeEventListener("scroll", handlingNavScroll);
        };
    }, []);

    return (
        <div className="absolute top-0 left-0 z-10 w-full h-16" id="navbar-scroll" onScroll={handlingNavScroll}>
            <div className="h-full flex items-center justify-between font-medium text-lg">
                <a href="#hero">
                    <div className="flex md:ms-20 ms-2 cursor-pointer">
                        <img src={Logo} alt="logo" className="md:w-[50px] w-[35px]" />
                        <h3 className="md:ms-3 ms-1">Sushi Kushuka</h3>
                    </div>
                </a>
                <div id="nav-menu" className="hidden md:block md:static absolute py-5 bg-white shadow-lg rounded-lg max-w-[250px] w-full right-4 top-full md:shadow-none md:rounded-none md:bg-transparent">
                    <ul className="md:flex block">
                        <a href="#tentang"><li className="mx-8 hover:text-primary transition ease-in-out duration-300 cursor-pointer">Tentang</li></a>
                        <a href="#menu"><li className="mx-8 hover:text-primary transition ease-in-out duration-300 cursor-pointer">Menu</li></a>
                        <a href="#reservasi"><li className="mx-8 hover:text-primary transition ease-in-out duration-300 cursor-pointer">Reservasi</li></a>
                    </ul>
                </div>
                <button
                    id="hamburger"
                    name="hamburger"
                    type="button"
                    className="block absolute right-4 lg:hidden"
                    onClick={humburgerHandling}
                >
                    <span
                        className="hamburger-line transition duration-300 ease-in-out origin-top-left"
                    ></span>
                    <span
                        className="hamburger-line transition duration-300 ease-in-out"
                    ></span>
                    <span
                        className="hamburger-line transition duration-300 ease-in-out origin-bottom-left"
                    ></span>
                </button>
                <div className="me-20">
                    <button className="bg-primary px-5 rounded-lg py-1 hover:brightness-110 transition ease-in-out duration-300 cursor-default">Kontak</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar