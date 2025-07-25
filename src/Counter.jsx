
// updater function = A function passed an an argument to setState()
//                      ex. setYear(y => y + 1);
//                      This updates based on the previous state not the current state.
//                      Use an updater function whenever you can. It ensures safe updating.       

import React, {useState} from 'react';

 function Counter() {

    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(<div class="counter-container">
                <p className="count-display">{count}</p>
                    <button className="counter-button" onClick={decrement}>Decrement</button>
                    <button className="counter-button" onClick={reset}>Reset</button>
                    <button className="counter-button" onClick={increment}>Increment</button>

    </div>);
}

export default Counter;