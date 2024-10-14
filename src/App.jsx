import { Provider } from "react-redux"
import { StudentSignInForm } from "./components/StudentSignInForm"
import { store } from "./Store"
import { StudentSignUpForm } from "./components/StudentSignUpForm"
import { AdminPanel } from "./components/AdminPanel"
import { Home } from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StudentPanel } from "./components/StudentPanel"
import { StaffLoginForm } from "./components/StaffLoginForm"
import { LoggedHeader } from "./components/LoggedHeader"
import { useEffect, useState } from "react"
import axios from "axios"
import { SERVER_URL } from "./service/AuthenticationServices"


function App() {
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
     async function call(){
      try {
        const res= await axios.get(SERVER_URL+"/");
        console.log(res.data);
        setLoading(false);
      } catch (error) {
        console.log("from awake api call");
        setLoading(false);
      }
    }
    call();
  },[])

  return (
    <Provider store={store}>
      {loading &&
        <>
          <div className="w-full min-h-[90vh] flex items-center justify-center m-auto p-3 ">
            <div className="rounded-full border-4 h-[150px] w-[150px]  text-center flex items-center justify-center animate-spin border-t-blue-500 border-x-transparent border-b-black"><h1 className="animate-reverse-spin">Loading Server <br />
            <span className="font-thin text-sm">made By DK</span></h1></div>
          </div>
        </>
      }
      {!loading && <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<StudentSignInForm/>}/>
          <Route path="/staffLogin" element={<StaffLoginForm/>}/>
          <Route path="/adminPanel" element={<AdminPanel/>}/>
          <Route path="/studentPanel" element={<StudentPanel/>}/>
          <Route path="/register" element={<StudentSignUpForm/>}/>
        </Routes>
      </BrowserRouter>}

    </Provider>
  )
}

export default App;
