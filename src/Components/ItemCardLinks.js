import "../Styles/ItemCardLinks.css";
import { useEffect, useState } from "react";

const ItemCardLinks = ({valor})=>{

    const [urlData, setUrlData] = useState("");
    const nameOrTitle = urlData.title ?  urlData.title : urlData.name;

    useEffect(()=>{
        const setLinks = async ()=> {
          let res = await fetch(valor)
          let data = await res.json()
          setUrlData(data)
        }
        setLinks()
      },[valor])

    return(
        <> 
          <p className="item-card-value">{nameOrTitle}</p>
        </>
    )
}

export default ItemCardLinks;