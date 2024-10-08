import { Provider } from "react-redux"
import { StudentSignInForm } from "./components/StudentSignInForm"
import { store } from "./Store"
import { StudentSignUpForm } from "./components/StudentSignUpForm"
import { AdminPanel } from "./components/AdminPanel"
import { Home } from "./components/Home"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { StudentPanel } from "./components/StudentPanel"
import { StaffLoginForm } from "./components/StaffLoginForm"


function App() {

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
        {/* <StudentPanel/> */}
      </BrowserRouter>
    </Provider>
  )
}

export default App;
