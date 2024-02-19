import CardSlider from "./CardSlider"
import SushiMaster from "/src/assets/sushi-master.png"

function MenuSection() {

    return (
        <div className="bg-[#eee] pt-6 pb-10" id="menu">
            <div className="md:mx-20 mx-3 py-10">
                <h1 className="md:text-5xl text-4xl font-bold mb-10">Top Menu Bulan Ini</h1>
                <div className="flex md:flex-nowrap flex-wrap">
                    <div className="md:w-1/3 w-full cursor-default md:flex md:items-end">
                        <div className="md:w-[300px] md:h-[300px] rounded-lg overflow-hidden">
                            <img src={SushiMaster} alt="" className="w-full h-full bg-cover bg-center hover:scale-110 transition ease-in-out duration-500"/>
                        </div>
                    </div>
                    <div className="md:w-2/3 w-full mt-12">
                        <CardSlider/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuSection