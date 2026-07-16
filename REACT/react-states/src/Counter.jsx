import { useState } from "react";

function init() {
    console.log("init was executed");
    return Math.random();
}

export default function Counter() {
    //   let [statevariable , setState] = useState(0);
    let [count, setCount] = useState(init());

    //setCount =  asynchronous method
    //initialization
    console.log("component is re-rendered");
    //RE-RENDER STAGE
    console.log(`count = ${count}`);

    let inCount = () => {
        setCount((currCount) => {
            return currCount + 1;
        });
        setCount((currCount) => {
            return currCount + 1;
        });
        // setCount(25);
    }

    return (
        <div>
            <h3>Count = {count}</h3>
            <button onClick={inCount}>Increase Count</button>
        </div>


    );
}
