import './App.css'
import AboutSection from './components/aboutSection/AboutSection'
import DownloadFooterSection from './components/downloadAppFooter/DownloadFooterSection'
import DownloadApp from './components/downloadAppSection/DownloadApp'
import FooterSection from './components/footerSection/FooterSection'
import Hero from './components/herosection/Hero'
import MenuSection from './components/menuSection/MenuSection'
import Navbar from './components/navbar/Navbar'
import ReservationSection from './components/reservationSection/ReservationSection'
import Whysection from './components/whysection/Whysection'

function App() {
  
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Whysection/>
      <DownloadApp/>
      <AboutSection/>
      <MenuSection/>
      <ReservationSection/>
      <DownloadFooterSection/>
      <FooterSection/>
    </div>
  )
}

export default App
