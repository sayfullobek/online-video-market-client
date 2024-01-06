import '../assets/css/nucleo-icons.css'
import '../assets/css/nucleo-svg.css'
import '../assets/css/soft-ui-dashboard.css?v=1.0.3'
import '../assets/js/core/popper.min.js'
import '../assets/js/core/bootstrap.min.js'
import '../assets/js/plugins/perfect-scrollbar.min.js'
// import '../assets/js/plugins/smooth-scrollbar.min.js'
import '../assets/js/plugins/chartjs.min.js'
import '../assets/js/soft-ui-dashboard.min.js?v=1.0.3'
import { SideBar } from '../component/admin/SideBar.jsx'
import { Footer } from '../component/admin/Footer.jsx'
import { Navbar } from '../component/admin/NavBar.jsx'
import { Outlet } from 'react-router-dom'

export const DashboardLayout = () => {
    return(
        <>
        <SideBar/>
        <main class="main-content position-relative max-height-vh-100 h-100 mt-1 border-radius-lg">
          <Navbar/>
          <Outlet/>
          <Footer/>
        </main>
        </>
    )
}