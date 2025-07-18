
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
import useAuthUser from './hooks/useAuthUser.js'
const App = () => {

// const {data: authData,isLoading,error}=useQuery({
//   queryKey:["authUser"],
//   queryFn: async()=>{
//     const res= await axiosInstance.get("/auth/me");
//     return  res.data;
//   },
//   retry: false ,
// });
const { isLoading, authUser } = useAuthUser();


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
 