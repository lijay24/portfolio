import Navbar from "./Navbar/Navbar"
import Herotext from "./hero/Herotext"
const Header = () => {
  return (
    <>
    <div className="bg-hero-pattern bg-contain">
    <div className=' text-white h-14 flex items-center overflow-hidden'>
      <Navbar/>
      
    </div>
    <Herotext />
    </div>
    </>
  )
}

export default Header
