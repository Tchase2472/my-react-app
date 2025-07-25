import React, {useState} from 'react';

function TheOnChange(){
    const [name,setName] = useState("");
    
    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    return(<div>
        <input type="text" value={name} onChange={handleNameChange} />
        <p>Name: {name} </p>
    </div>)

}
export default TheOnChange