import { useState,useEffect } from "react";
import User from "./components/User";
import DisplayData from "./components/DisplayData";
const url = 'https://course-api.com/react-tabs-project';

const App = () => {

  const[data,setData] = useState([]);
  const[index,setIndex] = useState(0);
  
  useEffect(()=>{

    const fetchData = async() =>{
      try{
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setData(data);
      }
      catch(err){
        console.log(err);
      }
     
    }


    fetchData()
  },[])


  function getDetails (id){
    console.log(id)
     setIndex(id)
  }
  
  if (data.length>0) {
    
  const details = data[index]

  return <main className="main">
  <section className="company">
  {
    data.map((people,index)=>{

      return <User key={people.id} company={people.company} id={index} getDetails={getDetails}/>
    })
  }
   

  </section>
  <section className="details">
  <DisplayData {...details} />
  </section>
  </main>;
  
  } 
  
  


  
};
export default App;
