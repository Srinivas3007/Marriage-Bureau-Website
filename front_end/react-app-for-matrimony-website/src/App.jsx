import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import apiConfig from './api/apiConfig'
import { useEffect } from 'react'

function App() {
  const [Person, setPerson] = useState();

  const getPerson = async () =>{
    try{
      const response = await apiConfig.get('/mongo/getAll');
      console.log(response.data);
      setPerson(response.data);
    }catch(err){
      console.log(err);
    }
    
  }

  useEffect(()=>{
    getPerson();
  }, []);

  return (
    <>
      <div>
        
      </div>
    </>
  )
}

export default App
