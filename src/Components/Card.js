import "../Styles/Card.css"
import { useState, useEffect, useContext} from "react";
import CardData from "./CardData";
import { MenuContext } from "../Context/MenuContext";
import Loader from "./Loader";

const Card = ()=> {
    const [info, setInfo] = useState({});
    const [cardLoading, setCardLoading] = useState(false);
    const {cardInfo} = useContext(MenuContext);

    useEffect(()=>{
        const setCard = async ()=> {
          let res = await fetch(cardInfo)
          let data = await res.json()
        setInfo(data)
        setCardLoading(false)
        }
        setCardLoading(true)
        setCard()
    },[cardInfo]);
  
    return (
        <div className="card-cont">
            {cardLoading ? 
            <Loader />:
            <CardData info={info}/>}
        </div>
    )
}

export default Card;