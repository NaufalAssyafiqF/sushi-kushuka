import AppSushi from "/src/assets/app-sushi.png"


function DownloadApp() {
    return (
        <div className="bg-secondary w-full md:h-screen h-[880px] relative md:overflow-hidden md:pb-0 pb-28" id="download">
            <div className="md:w-[600px] md:h-[600px] flex justify-center items-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="absolute bg-primary bg-opacity-70 md:w-[500px] md:h-[500px] w-[350px] h-[350px] rounded-full"></div>
                <div className="absolute bg-primary bg-opacity-50 md:w-[400px] md:h-[400px] w-[300px] h-[300px] rounded-full"></div>
                <div className="absolute bg-primary md:w-[300px] md:h-[300px] w-[250px] h-[250px] rounded-full"></div>
            </div>

            <div className="w-full flex md:flex-row flex-col justify-center items-center mx-3">
                <div className="md:absolute top-1/2 left-0 ms-20 md:w-[30rem] w-full transform md:-translate-y-20">
                    <h3 className="md:text-5xl text-4xl  md:pt-0 pt-5 font-bold">Lebih mudah pemensanan dengan aplikasi</h3>
                    <button className="bg-black text-primary py-3 md:px-5 px-3 rounded-full mt-7 hover:opacity-85 transition ease-in-out duration-300">Download sekarang</button>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <img src={AppSushi} alt="aplikasi-sushi" className="w-[300px]"/>
                </div>
                <div className="absolute md:top-1/2 md:right-0 -bottom-3 md:me-20 md:w-[22rem] w-full transform md:-translate-y-28 -right-20 ">
                    <div className="mb-5">
                        <h3 className="md:text-5xl text-4xl  font-bold">50+</h3>
                        <p className="text-xl font-medium">Pilihan menu</p>
                    </div>
                    <div className="mb-5">
                        <h3 className="md:text-5xl text-4xl  font-bold">2000+</h3>
                        <p className="text-xl font-medium">Pesanan perhari</p>
                    </div>
                    <div className="mb-5">
                        <h3 className="md:text-5xl text-4xl  font-bold">25</h3>
                        <p className="text-xl font-medium">Cabang di jabodetabek</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DownloadApp
