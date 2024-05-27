import {useState,useEffect} from 'react';

function Effect(){
    let [count,setCount] = useState(0);
    let [count1,setCount1] = useState(0);

    useEffect(function(){
        console.log("Count Changed");
    },[count]);

    useEffect(function(){
        console.log("Count1 Changed");
    },[count1]);
    
    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <p>{count}</p>
            <button onClick={() => setCount1(count1 + 1)}>Add 2</button>
            <p>{count1}</p>
        </div>
    );  
}

export default Effect;