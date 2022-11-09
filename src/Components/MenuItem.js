import { NavLink } from "react-router-dom";
import "../Styles/MenuItem.css"

const MenuItem = ({data, paramData})=> {
    return (
        <div className="menu-item-cont">
           <NavLink to={paramData}><h5 className="menu-item">{data}</h5></NavLink>
        </div>
    )
}

export default MenuItem;