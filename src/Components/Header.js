import { Link } from "react-router-dom"
import "../Styles/Header.css"

const Header = ()=>{
    return(
        <div className="header-title-cont">
           <Link to="/"><h1 className="header-title">STARS WARS</h1></Link>
        </div>
    )
}

export default Header