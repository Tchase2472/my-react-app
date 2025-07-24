
function Button(){

    const handleClick = (e) => e.target.textContent = "OUCH! STOP IT!";

    

    return(<button onClick={(e) => handleClick(e)}>Click Me</button>);
}

export default Button