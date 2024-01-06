import {Link} from "react-router-dom";

export  const  Navbar = () => {
    return(
        <div>
            <header>
                <div className="header-area header-transparent">
                    <div className="main-header ">
                        <div className="header-bottom  header-sticky">
                            <div className="container-fluid">
                                <div className="row align-items-center">
                                    <div className="col-xl-2 col-lg-2">
                                        <div className="logo">
                                            <Link to="index.html"><img src="/src/assets/img/logo/logo.png" alt=""/></Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-10 col-lg-10">
                                        <div className="menu-wrapper d-flex align-items-center justify-content-end">
                                            <div className="main-menu d-none d-lg-block">
                                                <nav>
                                                    <ul id="navigation">
                                                        <li className="active" ><Link to="index.html">Home</Link></li>
                                                        <li><Link to="courses.html">Courses</Link></li>
                                                        <li><Link to="about.html">About</Link></li>
                                                        <li><Link to="#">Blog</Link>
                                                            <ul className="submenu">
                                                                <li><Link to="blog.html">Blog</Link></li>
                                                                <li><Link to="blog_details.html">Blog Details</Link></li>
                                                                <li><Link to="elements.html">Element</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li><Link to="contact.html">Contact</Link></li>
                                                        <li className="button-header margin-left "><Link to="#" className="btn">Join</Link></li>
                                                        <li className="button-header"><Link to="login.html" className="btn btn3">Log in</Link></li>
                                                    </ul>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-lg-none"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </div>
    )
}