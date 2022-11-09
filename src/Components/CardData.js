import "../Styles/CardData.css"
import { useEffect, useState } from "react"
import ItemCard from "./ItemCard"

const CardData = ({info})=> {

  const [data, setData] = useState([])

    
  useEffect(()=>{ 
    const infoArr = []
     for (const prop in info){
      if([prop] == "url" || [prop] == "edited" || [prop] == "created" || [prop] == "name" || [prop] == "title"){
          continue
      }
      infoArr.push({[prop]: info[prop]})
    }
    setData(infoArr)
  },[info])   
    
    return(
        <div className="card-data-main-cont">
            <div className="card-data-title">{info.title?
                                                <h2>{info.title}</h2>:
                                                <h2>{info.name}</h2>}
            </div>
            <div>
              {data.map((el, index)=> <ItemCard key={index} data={el}/>)  }
            </div>
        </div>
    )
}

export default CardData;