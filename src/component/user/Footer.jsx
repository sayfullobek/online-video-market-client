import {Link} from "react-router-dom";

export const Footer = () => {
    return(
        <div>
            <footer>
                <div className="footer-wrappper footer-bg">
                    <div className="footer-area footer-padding">
                        <div className="container">
                            <div className="row justify-content-between">
                                <div className="col-xl-4 col-lg-5 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="single-footer-caption mb-30">
                                            <div className="footer-logo mb-25">
                                                <Link to="index.html"><img src="/src/assets/img/logo/logo2_footer.png" alt=""/></Link>
                                            </div>
                                            <div className="footer-tittle">
                                                <div className="footer-pera">
                                                    <p>The automated process starts as soon as your clothes go into the machine.</p>
                                                </div>
                                            </div>
                                            <div className="footer-social">
                                                <Link to="#"><i className="fab fa-twitter"></i></Link>
                                                <Link to="https://bit.ly/sai4ull"><i className="fab fa-facebook-f"></i></Link>
                                                <Link to="#"><i className="fab fa-pinterest-p"></i></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Our solutions</h4>
                                            <ul>
                                                <li><Link to="#">Design & creatives</Link></li>
                                                <li><Link to="#">Telecommunication</Link></li>
                                                <li><Link to="#">Restaurant</Link></li>
                                                <li><Link to="#">Programing</Link></li>
                                                <li><Link to="#">Architecture</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-4 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Support</h4>
                                            <ul>
                                                <li><Link to="#">Design & creatives</Link></li>
                                                <li><Link to="#">Telecommunication</Link></li>
                                                <li><Link to="#">Restaurant</Link></li>
                                                <li><Link to="#">Programing</Link></li>
                                                <li><Link to="#">Architecture</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                    <div className="single-footer-caption mb-50">
                                        <div className="footer-tittle">
                                            <h4>Company</h4>
                                            <ul>
                                                <li><Link to="#">Design & creatives</Link></li>
                                                <li><Link to="#">Telecommunication</Link></li>
                                                <li><Link to="#">Restaurant</Link></li>
                                                <li><Link to="#">Programing</Link></li>
                                                <li><Link to="#">Architecture</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-bottom-area">
                        <div className="container">
                            <div className="footer-border">
                                <div className="row d-flex align-items-center">
                                    <div className="col-xl-12 ">
                                        <div className="footer-copy-right text-center">
                                            <p>
                                                Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <Link to="https://colorlib.com" target="_blank">Colorlib</Link>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>
    )
}