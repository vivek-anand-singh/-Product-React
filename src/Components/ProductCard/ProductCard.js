import "./ProductCard.css"
import {useRef,useState} from 'react';
import logo1 from "../assets/logo1.png"
import AddToCart from "../AddToCart/AddToCart";
import Effect from "../Effect/Effect";

function ProductCard({title,price}){


    let pref=useRef(0);
    // let iRef=useRef(0);
    // let oRef=useRef(0);
    let [inputV,setInputV] = useState('Class');

    function printTitle(){

        console.log("Print Title");
        console.log(pref.current.innerText);
        if(pref.current.style.display === "none"){
            pref.current.style.display="block";
        }
        else{
            pref.current.style.display="none";
        }
    }

    function displayOutput(e){
        // oRef.current.innerText="Over here the output would arrive--"+iRef.current.value;
        setInputV(e.target.value);
    }

    return (
        <div className="product-card">
            <p onClick={printTitle}>{title}</p>
            <p ref={pref}>{price}</p>
            <img src={logo1}></img>
            <input id="inputHere" type="text" /* ref={iRef}*/ onChange={displayOutput}/>
            <p /*ref={oRef} */id="outputHere" >Over here the output would arrive--{inputV}</p>
            <AddToCart/>
            <Effect/>
        </div>
    )
}
export default ProductCard;