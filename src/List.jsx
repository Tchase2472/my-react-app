
function List(){
    
    const fruits = [{id : 1, name: "apple",   calories: 120},
                    {id : 2, name: "pear",    calories: 23},
                    {id : 3, name: "banana",  calories: 430},
                    {id : 4, name: "coconut", calories: 100},
                    {id : 5, name: "orange",  calories: 59},
                ];      
    fruits.sort((a, b) => a.name.localeCompare(b.name))                    

    const listItem = fruits.map(fruit => <li key={fruit.id}>{fruit.name}:
                                          &nbsp; <b>{fruit.calories}</b></li>);
        
        return(<ol>{listItem}</ol>);
}

export default List