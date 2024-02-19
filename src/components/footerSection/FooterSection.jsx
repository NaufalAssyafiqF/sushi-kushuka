import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { LuInstagram } from "react-icons/lu";

function FooterSection() {
    return (
        <div className='bg-black text-white cursor-default'>
            <div className="flex justify-between items-center py-5 md:mx-20 mx-3">
                <div>
                    <a href="#hero"><h1 className="hover:text-primary hover:border-primary transition">Sushi kushuka</h1></a>
                </div>
                <div>
                    <ul className="flex md:flex-row flex-col cursor-default">
                        <a href="#tentang"><li className="me-5 hover:text-primary transition ease-in-out">Tentang</li></a>
                        <a href="#download"><li className="me-5 hover:text-primary transition ease-in-out">Download</li></a>
                        <a href="#menu"><li className="me-5 hover:text-primary transition ease-in-out">Menu kami</li></a>
                        <a href="#reservasi"><li className="me-5 hover:text-primary transition ease-in-out">Reservasi</li></a>
                    </ul>
                </div>
                <div className="flex md:flex-row flex-col cursor-default">
                    <div className="md:me-3 mb-1 text-xl border-2 border-white rounded-full p-2 hover:text-primary hover:border-primary transition">
                        <FaFacebook />
                    </div>
                    <div className="md:me-3 mb-1 text-xl border-2 border-white rounded-full p-2 hover:text-primary hover:border-primary transition">
                        <FaYoutube />
                    </div>
                    <div className=" text-xl mb-1 border-2 border-white rounded-full p-2 hover:text-primary hover:border-primary transition">
                        <LuInstagram />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterSection