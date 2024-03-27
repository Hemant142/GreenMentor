import { useState } from 'react'
import './App.css'
import AllRoutes from './Routes/AllRoutes'
import Navbar from './components/Layout/Navbar'


function App() {
  const [count, setCount] = useState(0)
console.log("counts")
  return (
   <div>
    
      <div className="App">
          <Navbar />
          <div className="container mx-auto mt-8">
          
            <AllRoutes />
          </div>
          </div>
   </div>
  )
}

export default App
