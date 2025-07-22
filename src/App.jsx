import List from "./List.jsx"

  const listItems = [
                    
                    {id : 1, name: "apple",   calories: 120},
                    {id : 2, name: "pear",    calories: 23},
                    {id : 3, name: "banana",  calories: 430},
                    {id : 4, name: "coconut", calories: 100},
                    {id : 5, name: "orange",  calories: 59},
                ];      

function App() {
  return(
    <>
       <List items = {listItems} />  
    </>
  );
   
}

export default App
