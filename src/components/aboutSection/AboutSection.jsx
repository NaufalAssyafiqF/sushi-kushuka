import SushiAbout from "/src/assets/sushi-about.jpg"


function AboutSection() {
  return (
    <div className="w-full bg-[#eee]" id="tentang">
        <div className="flex md:flex-nowrap flex-wrap md:mx-20 mx-3 py-20">
            <div className="md:me-[5rem] group overflow-hidden rounded-lg shadow-xl md:mb-0 mb-5">
                <img src={SushiAbout} alt="" className="w-[1800px] group-hover:scale-110 transition ease-in-out duration-500"/>
            </div>
            <div className="grid content-center">
                <h1 className="md:text-5xl text-4xl font-bold">Tentang Sushi Kushuka</h1>
                <p className="text-lg font-medium mt-5 text-justify leading-relaxed">merupakan restoran sushi yang dibuat oleh pengusaha muda asal indonesia yang menjual berbagai macam makanan jejepangan terutama sushi dengan harga yang terjangkau. pembelian dapat dilakukan dengan datang langsung ke restoran kami atau juga bisa memesannya dari rumah.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutSection