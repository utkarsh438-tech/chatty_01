<<<<<<< HEAD
import React from 'react'
import { Route, Routes } from 'react-router'

import Chat from './Components/Chat.jsx'
import Loginpage from './Components/Loginpage.jsx'
import Homepage from './Components/Homepage.jsx'
import Signup from './Components/Signup.jsx'
import Onboard from './Components/Onboard.jsx'
import Notification from './Components/Notification.jsx'
import Callpage from './Components/Callpage.jsx'
import PageLoader from './functionality/PageLoader.jsx'

import toast, { Toaster } from 'react-hot-toast';
import { axiosInstance } from './lib/axios.js';
 import { useQuery } from '@tanstack/react-query'
 import { Navigate } from 'react-router';
const App = () => {

const {data: authData,isLoading,error}=useQuery({
  queryKey:["authUser"],
  queryFn: async()=>{
    const res= await axiosInstance.get("/auth/me");
    return  res.data;
  },
  retry: false ,
});
 



const authUser=authData?.user

if(isLoading) return <PageLoader/>

  return (
    <div data-theme="coffee">
      {/* <button onClick={()=>toast.success("hello world")}>creating toast</button> */}
      <Routes>
        <Route path="/" element={authUser ? <Homepage />:<Navigate to ="/login"/>} />
        <Route path="/signup" element={!authUser?<Signup />:<Navigate to="/" />} />
        <Route path="/login" element={!authUser?<Loginpage />:<Navigate to="/" />} />
        <Route path="/onboard" element={authUser ?<Onboard />:<Navigate to ="/login"/>} />
        <Route path="/notification" element={authUser ?<Notification />:<Navigate to ="/login"/>} />
        <Route path="/callpage" element={authUser ?<Callpage />:<Navigate to ="/login"/>} />
        <Route path="/chat" element={authUser ?<Chat />:<Navigate to ="/login"/>} />
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
=======
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
>>>>>>> 7e38e2c6ce0315ab7f20bc64695371261ff2db55
