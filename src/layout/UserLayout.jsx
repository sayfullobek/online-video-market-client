import {Navbar} from "../component/user/Navbar.jsx";
import {Outlet} from "react-router-dom";
import {Footer} from "../component/user/Footer.jsx";
// import "./../assets/user/css/owl.carousel.min.css";
import "./../assets/user/css/slicknav.css";
import "./../assets/user/css/flaticon.css";
import "./../assets/user/css/progressbar_barfiller.css";
import "./../assets/user/css/gijgo.css";
import "./../assets/user/css/animate.min.css";
import "./../assets/user/css/animated-headline.css";
import "./../assets/user/css/magnific-popup.css";
import "./../assets/user/css/fontawesome-all.min.css"
import "./../assets/user/css/themify-icons.css";
import "./../assets/user/css/slick.css";
import "./../assets/user/css/nice-select.css";
import "./../assets/user/css/style.css";
// import './../assets/user/css/owl.carousel.min.css'
import './../assets/user/js/vendor/modernizr-3.5.0.min.js';
import './../assets/user/js/vendor/jquery-1.12.4.min.js';
// import './../assets/user/js/popper.min.js';
// import './../assets/user/js/bootstrap.min.js';
import './../assets/user/js/jquery.slicknav.min.js';
import './../assets/user/js/slick.min.js';
// import './../assets/user/js/wow.min.js';
import './../assets/user/js/animated.headline.js';
import './../assets/user/js/jquery.magnific-popup.js';
import './../assets/user/js/gijgo.min.js';
import './../assets/user/js/jquery.nice-select.min.js';
import './../assets/user/js/jquery.sticky.js';
import './../assets/user/js/jquery.barfiller.js';
import './../assets/user/js/jquery.counterup.min.js';
// import './../assets/user/js/waypoints.min.js';
import './../assets/user/js/jquery.countdown.min.js';
import './../assets/user/js/hover-direction-snake.min.js';
import './../assets/user/js/contact.js';
import './../assets/user/js/jquery.form.js';
import './../assets/user/js/jquery.validate.min.js';
import './../assets/user/js/mail-script.js';
import './../assets/user/js/jquery.ajaxchimp.min.js';
import './../assets/user/js/plugins.js';
// import './../assets/user/js/main.js';
export const UserLayout = () => {
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}