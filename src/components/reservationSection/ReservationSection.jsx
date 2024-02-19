import Reservasi from "/src/assets/restoran-jepang.webp"

function ReservationSection() {
    return (
        <div className="bg-secondary" id="reservasi">
            <div className="md:mx-20 mx-3 flex flex-wrap py-20">
                <div className="md:w-1/2 w-full md:me-10 ">
                    <h1 className="md:text-5xl text-4xl font-bold md:mb-10 mb-5">Pesan Reservasi Sekarang</h1>
                    <p className="text-lg font-medium mb-7 ">takut tidak dapat tempat? Anda bisa memesan tempat terlebih dahulu sebelum datang ke tempat kami sehingga jadi lebih cepat dan mudah.</p>
                    <h2 className="text-lg font-bold">Jam oprasional</h2>
                    <div className="flex text-lg font-medium">
                        <div className="me-7">
                            <p>Senin - Jumat</p>
                            <p>10:00 - 22-00</p>
                        </div>
                        <div>
                            <p>Senin - Jumat</p>
                            <p>10:00 - 22-00</p>
                        </div>
                    </div>
                    <button className="bg-black text-primary py-2 px-3 rounded-full hover:opacity-85 transition ease-out duration-300 mt-5 md:mb-0 mb-7">Pesan Reservasi</button>
                </div>
                <div className="overflow-hidden rounded-lg shadow-xl">
                    <div>
                        <img src={Reservasi} alt="restoran" className="w-[450px] h-[400px] hover:scale-110 transition ease-in-out duration-300 "/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReservationSection