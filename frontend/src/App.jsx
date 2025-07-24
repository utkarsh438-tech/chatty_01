
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
 import Layout from './functionality/Layout.jsx'

import toast, { Toaster } from 'react-hot-toast';
import { axiosInstance } from './lib/axios.js';
 import { useQuery } from '@tanstack/react-query'
 import { Navigate } from 'react-router';
 import { useThemeStore } from './store/useThemeStore.js'
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
const isAuthenticated = Boolean(authUser);
const isOnboarded = authUser?.isOnboarded;

 const { theme } = useThemeStore();
 
if(isLoading) return <PageLoader/>

  return (
    <div data-theme={theme}>
      {/* <button onClick={()=>toast.success("hello world")}>creating toast</button> */}
      <Routes>
      <Route
          path="/"
          element={
            isAuthenticated && isOnboarded ? (
               <Layout showSidebar={true}>
                <Homepage/>
                </Layout>
            ) : (
              <Navigate to={!isAuthenticated ? "/login" : "/onboarding"} />
            )
          }
        />
        <Route
          path="/signup"
          element={
            !isAuthenticated ? <Signup /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/login"
          element={
            !isAuthenticated ? <Loginpage /> : <Navigate to={isOnboarded ? "/" : "/onboarding"} />
          }
        />
        <Route
          path="/onboarding"
          element={
            isAuthenticated ? (
              !isOnboarded ? (
                <Onboard />
              ) : (
                <Navigate to="/" />
              )
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/notification" element={authUser ?<Notification />:<Navigate to ="/login"/>} />
        <Route path="/callpage" element={authUser ?<Callpage />:<Navigate to ="/login"/>} />
        <Route path="/chat" element={authUser ?<Chat />:<Navigate to ="/login"/>} />
      </Routes>
      <Toaster></Toaster>
    </div>
  )
}

export default App
 