import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layout/DashboardLayout"
import { Dashboard } from "./pages/Dashboard"
import {UserLayout} from "./layout/UserLayout.jsx";
import {Menu} from "./pages/user/Menu.jsx";
import './assets/user/css/style.css'
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/auth/dashboard" element={<DashboardLayout/>}>
              <Route index element={<Dashboard/>}/>
          </Route>
          <Route path={"/"} element={<UserLayout/>}>
              <Route index element={<Menu/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
