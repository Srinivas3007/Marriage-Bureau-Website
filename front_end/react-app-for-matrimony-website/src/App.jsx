import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import apiConfig from './api/apiConfig'
import { useEffect } from 'react'
import UserRender from './components/UserRender/UserRender'

function App() {
  const [Person, setPerson] = useState(null); // Initialize Person to null

  const getPerson = async () =>{
    try{
      const response = await apiConfig.get('/mongo/getAll');
      console.log(response.data);
      setPerson(response.data);
    }catch(err){
      console.log(err);
      setPerson([]); // Set to empty array to avoid map error, or handle error display
    }
    
  }

  useEffect(()=>{
    getPerson();
  }, []);

  return (
    <>
      <UserRender Person={Person}/>
    </>
  )
}

export default App
