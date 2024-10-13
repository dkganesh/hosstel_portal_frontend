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
import { useEffect } from "react"
import axios from "axios"
import { SERVER_URL } from "./service/AuthenticationServices"


function App() {
  useEffect(()=>{
     function call(){
      try {
        const res= axios.get(SERVER_URL+"/");
        console.log(res);
      } catch (error) {
        console.log(error+ "->  from awake api call");
      }
    }
    call();
  },[])

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<StudentSignInForm/>}/>
          <Route path="/staffLogin" element={<StaffLoginForm/>}/>
          <Route path="/adminPanel" element={<AdminPanel/>}/>
          <Route path="/studentPanel" element={<StudentPanel/>}/>
          <Route path="/register" element={<StudentSignUpForm/>}/>
        </Routes>
      </BrowserRouter>

    </Provider>
  )
}

export default App;
