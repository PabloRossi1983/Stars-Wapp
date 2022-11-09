import "../Styles/Menu2.css"
import { useState, useEffect} from "react";
import { useParams, Outlet } from "react-router-dom";
import Menu2Item from "./Menu2Item";
import Loader from "./Loader";

const Menu2 = ()=> {

    const [menu2List, setMenu2List] = useState([]);
    const [prevPage, setPrevPage] = useState("");
    const [nextPage, setNextPage] = useState("");
    const [menu2Loading, setMenu2Loading] = useState(false);
    const {category} = useParams()
    
    const urlSwapi = `https://swapi.dev/api/${category}`

    useEffect(()=>{
          setMenu2Loading(true)
          setMenu2(urlSwapi)
        },[category])

    async function setMenu2(url) {
      let res = await fetch(url)
      let data = await res.json()
      setMenu2List(data.results)
      setNextPage(data.next)
      setPrevPage(data.previous)
      setMenu2Loading(false)
      }

    const handlePrevPage = ()=>{
      setMenu2Loading(true)
      setMenu2(prevPage) 
    }
    
    const handleNextPage = ()=>{
      setMenu2Loading(true)
      setMenu2(nextPage) 
    }

   const items = menu2List.map(el => el.name ? {name: el.name, url: el.url} : {name: el.title, url: el.url});
   
    return (
        <div className="menu-info-cont">
          <div className="menu2-cont">
            {menu2Loading?
            <Loader />:
            items.map(el=> <Menu2Item key={el.url} url={el.url} data={el.name} />)}
            <div className="menu2-button-container">
              <button className="menu2-button" onClick={()=>handlePrevPage()} disabled={prevPage == null}>prev</button>
              <button className="menu2-button" onClick={()=>handleNextPage()} disabled={nextPage == null}>next</button>
            </div>
          </div>
          <Outlet />
        </div>
    )
}

export default Menu2;