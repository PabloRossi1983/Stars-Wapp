import "../Styles/Menu.css"
import { useState, useEffect} from "react";
import { Outlet, useParams } from "react-router-dom";
import MenuItem from "./MenuItem";
import Loader from "./Loader";

const Menu = ()=> {

  const [menuList, setMenuList] = useState([]);
  const [menuLoading, setMenuLoading] = useState(false);
  const {category} = useParams;
  const categories = Object.keys(menuList).map(el=> el);


  useEffect(()=>{
    async function setMenu1() {
    let res = await fetch("https://swapi.dev/api/")
    let data = await res.json()
    setMenuList(data)
    setMenuLoading(false)
    }
    setMenuLoading(true)
    setMenu1()
  },[category])

    return (
      <div className="menu-info-cont">
        <div className="menu-cont">
          {menuLoading?
          <Loader />:
          categories.map(el=> <MenuItem key={el} paramData={el} data={el.toUpperCase()}/>)}
        </div>
        <Outlet />
      </div>
    )
}

export default Menu;