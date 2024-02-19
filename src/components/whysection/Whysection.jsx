import Why1 from "/src/assets/why-1.png"
import Why2 from "/src/assets/why-2.png"
import Why3 from "/src/assets/why-3.png"


function Whysection() {
  return (
    <div className="bg-[#eee]" id="why">
        <div className="w-full text-center pt-16 pb-24">
            <div>
                <h1 className="md:text-5xl text-4xl font-semibold mb-14">Mengapa Sushi Kushuka ?</h1>
            </div>
            <div className="flex flex-wrap text-center md:mx-20">
                <div className="md:w-1/3 flex flex-col justify-center items-center px-5 group">
                    <img src={Why1} alt="" className="w-[200px] p-3 group-hover:scale-110 ease-in-out transition duration-500"/>
                    <h3 className="text-xl font-semibold mb-4">Rasa Autentik</h3>
                    <p className="text-base font-normal">dibuat dengan bahan bahan yang berkuaitas langsung dari jepang</p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center px-5 group">
                    <img src={Why2} alt="" className="w-[240px] p-3 group-hover:scale-110 ease-in-out transition duration-500"/>
                    <h3 className="text-xl font-semibold mb-4">Pelayanan Cepat</h3>
                    <p className="text-base font-normal">apa yang kamu pilih akan kami proses satset satset </p>
                </div>
                <div className="md:w-1/3 flex flex-col justify-center items-center px-5 group">
                    <img src={Why3} alt="" className="w-[200px] p-3 group-hover:scale-110 ease-in-out transition duration-500"/>
                    <h3 className="text-xl font-semibold mb-4">Harga Terjangkau</h3>
                    <p className="text-base font-normal">menu disni dijamin sesuai dengan isi dompet anda</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Whysection