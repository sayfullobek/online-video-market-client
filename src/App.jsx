import { BrowserRouter, Routes, Route } from "react-router-dom"
import { DashboardLayout } from "./layout/DashboardLayout"
import { Dashboard } from "./pages/Dashboard"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path="/auth/dashboard" element={<DashboardLayout/>}>
              <Route index element={<Dashboard/>}/>
          </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
