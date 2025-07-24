import React, {useState} from 'react';

function MyComponent() {

    let [name, setName] = useState("Guest"); 
    const [age, setAge] = useState(0); 
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = () => {
        setName( "SpongeBob");
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(<div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

         <p>Name: {age}</p>
        <button onClick={incrementAge}>Set Age</button>

         <p>Is employed {isEmployed ? "YES" : "NO"}</p>
        <button onClick={toggleEmployedStatus}>Is Employed</button>

    </div>)
}
export default MyComponent;