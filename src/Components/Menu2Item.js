import { NavLink } from "react-router-dom";
import { useContext } from "react";
import "../Styles/Menu2Item.css"
import { MenuContext } from "../Context/MenuContext";

const Menu2Item = ({data, url})=> {

    const {setCardInfo} = useContext(MenuContext);

    return (
        <div className="menu-item-cont">
           <NavLink to={data}>
            <h5 onClick={()=>setCardInfo(url)} className="menu-item">{data}</h5> 
            </NavLink>
        </div>
    )
}

export default Menu2Item;