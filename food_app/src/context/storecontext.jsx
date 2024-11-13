import { useContext , createContext ,useState, useEffect} from "react";
import { food_list } from "../assets/assets";
export const Storecontext = createContext(null);
const StorecontextProvider =(props)=>{
    const [cartitem,setCartitem]=useState({});
    const addToCart=(itemId)=>{
        if(!cartitem[itemId]){
            setCartitem((prev)=>({...prev,[itemId]:1}))
        }
        else {
            setCartitem((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart=(itemId)=>{
        setCartitem((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }


const contextvalue={
    food_list,cartitem,setCartitem,addToCart,removeFromCart 
};
useEffect(()=>{
    console.log(cartitem)
},[cartitem])
return (
    <Storecontext.Provider value={contextvalue}>
        {props.children}
        </Storecontext.Provider>
);
};
export default StorecontextProvider;

