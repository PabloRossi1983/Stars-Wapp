import { createContext, useState } from "react";

const MenuContext = createContext();

const MenuProvider = ({children}) => {

  const [cardInfo, setCardInfo] = useState({});
  

  const data = {
     setCardInfo,
     cardInfo,
  }
    
    return(
        <MenuContext.Provider value={data}>
          {children}
        </MenuContext.Provider> 
    )
}

export default MenuProvider;
export {MenuContext};