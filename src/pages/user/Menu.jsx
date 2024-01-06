import {BrowserRouter as Router, Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <main>
                <section className="slider-area">
                    <div className="slider-active">
                        <div className="single-slider slider-height d-flex align-items-center">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-7 col-md-12">
                                        <div className="hero__caption">
                                            <h1 data-animation="fadeInLeft" data-delay="0.2s">Online
                                                learning<br/> platform</h1>
                                            <p data-animation="fadeInLeft" data-delay="0.4s">Build skills with
                                                courses, certificates, and degrees online from world-class
                                                universities and companies</p>
                                            <Link to="#" className="btn hero-btn" data-animation="fadeInLeft"
                                                  data-delay="0.7s">Join for Free</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="services-area">
                    <div className="container">
                        <div className="row justify-content-sm-center">
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="src\assets\user\img\icon\icon1.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <h3>60+ UX courses</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="src\assets\user\img\icon\icon2.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Expert instructors</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-8">
                                <div className="single-services mb-30">
                                    <div className="features-icon">
                                        <img src="src\assets\user\img\icon\icon3.svg" alt=""/>
                                    </div>
                                    <div className="features-caption">
                                        <h3>Life time access</h3>
                                        <p>The automated process all your website tasks.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="courses-area section-padding40 fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-tittle text-center mb-55">
                                    <h2>Our featured courses</h2>
                                </div>
                            </div>
                        </div>
                        <div className="courses-actives d-flex">
                            <div className="properties pb-20">
                                <div className="properties__card">
                                    <div className="properties__img overlay1">
                                        <Link to="#"><img src="src\assets\user\img\gallery\featured1.png"
                                                          alt=""/></Link>
                                    </div>
                                    <div className="properties__caption">
                                        <p>User Experience</p>
                                        <h3><Link to="#">Fundamental of UX for Application design</Link></h3>
                                        <p>The automated process all your website tasks. Discover tools and
                                            techniques to engage effectively with vulnerable children and young
                                            people.

                                        </p>
                                        <div
                                            className="properties__footer d-flex justify-content-between align-items-center">
                                            <div className="restaurant-name">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half"></i>
                                                </div>
                                                <p><span>(4.5)</span> based on 120</p>
                                            </div>
                                            <div className="price">
                                                <span>$135</span>
                                            </div>
                                        </div>
                                        <Link to="#" className="border-btn border-btn2">Find out more</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="properties pb-20">
                                <div className="properties__card">
                                    <div className="properties__img overlay1">
                                        <Link to="#"><img src="src\assets\user\img\gallery\featured2.png"
                                                          alt=""/></Link>
                                    </div>
                                    <div className="properties__caption">
                                        <p>User Experience</p>
                                        <h3><Link to="#">Fundamental of UX for Application design</Link></h3>
                                        <p>The automated process all your website tasks. Discover tools and
                                            techniques to engage effectively with vulnerable children and young
                                            people.
                                        </p>
                                        <div
                                            className="properties__footer d-flex justify-content-between align-items-center">
                                            <div className="restaurant-name">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half"></i>
                                                </div>
                                                <p><span>(4.5)</span> based on 120</p>
                                            </div>
                                            <div className="price">
                                                <span>$135</span>
                                            </div>
                                        </div>
                                        <Link to="#" className="border-btn border-btn2">Find out more</Link>
                                    </div>
                                </div>
                            </div>
                            <div className="properties pb-20">
                                <div className="properties__card">
                                    <div className="properties__img overlay1">
                                        <Link to="#"><img src="src\assets\user\img\gallery\featured3.png"
                                                          alt=""/></Link>
                                    </div>
                                    <div className="properties__caption">
                                        <p>User Experience</p>
                                        <h3><Link to="#">Fundamental of UX for Application design</Link></h3>
                                        <p>The automated process all your website tasks. Discover tools and
                                            techniques to engage effectively with vulnerable children and young
                                            people.

                                        </p>
                                        <div
                                            className="properties__footer d-flex justify-content-between align-items-center">
                                            <div className="restaurant-name">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half"></i>
                                                </div>
                                                <p><span>(4.5)</span> based on 120</p>
                                            </div>
                                            <div className="price">
                                                <span>$135</span>
                                            </div>
                                        </div>
                                        <Link to="#" className="border-btn border-btn2">Find out more</Link>
                                    </div>

                                </div>
                            </div>
                            <div className="properties pb-20">
                                <div className="properties__card">
                                    <div className="properties__img overlay1">
                                        <Link to="#"><img src="src\assets\user\img\gallery\featured2.png"
                                                          alt=""/></Link>
                                    </div>
                                    <div className="properties__caption">
                                        <p>User Experience</p>
                                        <h3><Link to="#">Fundamental of UX for Application design</Link></h3>
                                        <p>The automated process all your website tasks. Discover tools and
                                            techniques to engage effectively with vulnerable children and young
                                            people.

                                        </p>
                                        <div
                                            className="properties__footer d-flex justify-content-between align-items-center">
                                            <div className="restaurant-name">
                                                <div className="rating">
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star-half"></i>
                                                </div>
                                                <p><span>(4.5)</span> based on 120</p>
                                            </div>
                                            <div className="price">
                                                <span>$135</span>
                                            </div>
                                        </div>
                                        <Link to="#" className="border-btn border-btn2">Find out more</Link>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about-area1 fix pt-10">
                    <div className="support-wrapper align-items-center">
                        <div className="left-content1">
                            <div className="about-icon">
                                <img src="src\assets\user\img\icon\about.svg" alt=""/>
                            </div>
                            <div className="section-tittle section-tittle2 mb-55">
                                <div className="front-text">
                                    <h2 className="">Learn new skills online with top educators</h2>
                                    <p>The automated process all your website tasks. Discover tools and
                                        techniques to engage effectively with vulnerable children and young
                                        people.</p>
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt=""/>
                                </div>
                                <div className="features-caption">
                                    <p>Techniques to engage effectively with vulnerable children and young
                                        people.</p>
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt=""/>
                                </div>
                                <div className="features-caption">
                                    <p>Join millions of people from around the world learning together.</p>
                                </div>
                            </div>

                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt=""/>
                                </div>
                                <div className="features-caption">
                                    <p>Join millions of people from around the world learning together. Online
                                        learning is as easy and natural.</p>
                                </div>
                            </div>
                        </div>
                        <div className="right-content1">
                            <div className="right-img">
                                <img src="src\assets\user\img\gallery\about.png" alt=""/>

                                <div className="video-icon">
                                    <a className="popup-video btn-icon"
                                       href="https://www.youtube.com/watch?v=up68UAfH0d0"><i
                                        className="fas fa-play"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <div className="topic-area section-padding40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-tittle text-center mb-55">
                                    <h2>Explore top subjects</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic1.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic2.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic3.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic4.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic5.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic6.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic7.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-4 col-sm-6">
                                <div className="single-topic text-center mb-30">
                                    <div className="topic-img">
                                        <img src="src\assets\user\img\gallery\topic8.png" alt=""/>
                                        <div className="topic-content-box">
                                            <div className="topic-content">
                                                <h3><Link to="#">Programing</Link></h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-12">
                                <div className="section-tittle text-center mt-20">
                                    <Link to="courses.html" className="border-btn">View More Subjects</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="about-area3 fix">
                    <div className="support-wrapper align-items-center">
                        <div className="right-content3">
                            <div className="right-img">
                                <img src="src\assets\user\img\gallery\about3.png" alt=""/>
                            </div>
                        </div>
                        <div className="left-content3">
                            <div className="section-tittle section-tittle2 mb-20">
                                <div className="front-text">
                                    <h2 className="">Learner outcomes on courses you will take</h2>
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt=""/>
                                </div>
                                <div className="features-caption">
                                    <p>Techniques to engage effectively with vulnerable children and young
                                        people.</p>
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt=""/>
                                </div>
                                <div className="features-caption">
                                    <p>Join millions of people from around the world
                                        learning together.</p>
                                </div>
                            </div>
                            <div className="single-features">
                                <div className="features-icon">
                                    <img src="src\assets\user\img\icon\right-icon.svg" alt="quziboy"/>
                                </div>
                                <div className="features-caption">
                                    <p>Join millions of people from around the world learning together.
                                        Online learning is as easy and natural.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="team-area section-padding40 fix">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-7 col-lg-8">
                                <div className="section-tittle text-center mb-55">
                                    <h2>Community experts</h2>
                                </div>
                            </div>
                        </div>
                        <div className="team-active d-flex">
                            <div className="single-cat text-center">
                                <div className="cat-icon">
                                    <img src="src\assets\user\img\gallery\team1.png" alt="quzi"/>
                                </div>
                                <div className="cat-cap">
                                    <h5><Link to="services.html">Mr. Urela</Link></h5>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                            <div className="single-cat text-center">
                                <div className="cat-icon">
                                    <img src="src\assets\user\img\gallery\team2.png" alt="quzi1"/>
                                </div>
                                <div className="cat-cap">
                                    <h5><Link to="services.html">Mr. Uttom</Link></h5>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                            <div className="single-cat text-center">
                                <div className="cat-icon">
                                    <img src="src\assets\user\img\gallery\team3.png" alt="quzi2"/>
                                </div>
                                <div className="cat-cap">
                                    <h5><Link to="services.html">Mr. Shakil</Link></h5>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                            <div className="single-cat text-center">
                                <div className="cat-icon">
                                    <img src="src\assets\user\img\gallery\team4.png" alt="quzi3"/>
                                </div>
                                <div className="cat-cap">
                                    <h5><Link to="services.html">Mr. Arafat</Link></h5>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                            <div className="single-cat text-center">
                                <div className="cat-icon">
                                    <img src="src\assets\user\img\gallery\team3.png" alt="quzi4"/>
                                </div>
                                <div className="cat-cap">
                                    <h5><Link to="services.html">Mr. saiful</Link></h5>
                                    <p>The automated process all your website tasks.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="about-area2 fix pb-padding">
                    <div className="support-wrapper align-items-center">
                        <div className="right-content2">
                            <div className="right-img">
                                <img src="src\assets\user\img\gallery\about2.png" alt="quzi5"/>
                            </div>
                        </div>
                        <div className="left-content2">
                            <div className="section-tittle section-tittle2 mb-20">
                                <div className="front-text">
                                    <h2 className="">Take the next step
                                        toward your personal
                                        and professional goals
                                        with us.</h2>
                                    <p>The automated process all your website tasks. Discover tools and techniques
                                        to engage effectively with vulnerable children and young people.</p>
                                    <Link to="#" className="btn">Join now for Free</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </div>

    )
}