import "../Styles/ItemCard.css"
import ItemCardLinks from "./ItemCardLinks";

const ItemCard = ({data})=>{

  const llave = Object.keys(data).join();
  const parsedLlave = llave.replace(llave[0], llave[0].toUpperCase())
                           .replace("_", " ");
  const valor = Object.values(data).flat().map(el=> Number.isInteger(el)? el.toString(): el);

    return(
        <div className="item-card-main-cont">
            <h6 className="item-card-key">{parsedLlave}:</h6>
            <div className="item-card-value">
              {valor[0] && valor[0].startsWith("http") ? 
              valor.map((el, index)=> <ItemCardLinks key={index} valor={el} />) :
              <p className="item-card-value">{valor}</p>} 
            </div>
        </div>
    )
}

export default ItemCard