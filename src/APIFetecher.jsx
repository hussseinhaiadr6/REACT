import react,{ useState, useEffect} from 'react';

function FecthApp() {
  const [name, setName] = useState([]);
   useEffect(()=>{
    names()},[])


    const names= async()=>{
        const response= await fetch("https://fakestoreapi.com/products")
        setName(await response.json()); 
    }
return (
<div >
    
   <h1>Namme is written here below</h1>
   <ol >
   
   { name.map((data)=>{
        return (<li>name is :{data.title} <ul>
            <li>price is : {data.price}</li>
            <li> descritpion is : {data.description}</li>
            <li>Category : {data.category}</li>
          
            <img src={data.image}/>
            </ul></li>)
    })}
   </ol>
</div>
);
}
export default FecthApp;