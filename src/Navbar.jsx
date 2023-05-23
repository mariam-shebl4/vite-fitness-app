import Img from "./assets/Bodybuilding-and-gym-logo-on-transparent-background-PNG.png"
import admin from "./assets/profile.png"
const Navbar = () => {

  return (
    <div  className="nav">
      <div><img src={Img} width="70px" height="60px" /></div>
      <div><img src={admin} width="40px" height="40px" /></div>
    
    </div>
  )
}

export default Navbar
