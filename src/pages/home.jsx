import Button from "../components/button"
import "../styles/pages/home.css"
import lady from "../assets/images/lady.png"
import { Link } from "react-router-dom"
import img1 from "../assets/images/Blue Logo Png 1.png"
import img2 from "../assets/images/CityXchange 2.png"
import img3 from "../assets/images/EDNA ELIMANI LOGO 1.png"
import img4 from "../assets/images/JevJaz Shop 1.png"
import img5 from "../assets/images/igboogo.png"
import ico1 from "../assets/images/Vector-1.svg"
import ico2 from "../assets/images/Vector-2.svg"
import ico3 from "../assets/images/Vector.svg"

export default function Home() {
    return (
        <main>
            <section className="hero section-border">

                <div className="heroWrap-Cont">
                    <div className="hero-boWrap">
                        <div className="hero-text">
                            <h1>FirstClassPilot</h1>
                            <p>Elevating your business to new heights</p>

                            <div className="hero-tag">
                                <p>Digital Ads</p>
                                <div className="hero-dot"></div>
                                <p>Creative Coding</p>
                                <div className="hero-dot"></div>
                                <p>Social Media</p>
                            </div>
                        </div>
                        <div className="hero-image">
                            <img src={lady} alt="" />
                        </div>
                        <div className="hero-action">
                            <Link to="/project">
                                <Button alt>Portfolio</Button>
                            </Link>
                            <Link to="/book">
                                <Button>Book Flight</Button>
                            </Link>
                        </div>
                    </div>
                    <div className="hero-ImgRight">
                        <img src={lady} alt="" />
                    </div>
                </div>


                <div className="hero-flex">
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <img src={ico3} alt="" />
                        </div>
                        <p className="hero-flex-txt">87 Websites</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <img src={ico1} alt="" />

                        </div>
                        <p className="hero-flex-txt">23 Apps</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <img src={ico2} alt="" />

                        </div>
                        <p className="hero-flex-txt">6 Industries</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                <path fill="none" stroke="#cd6af0" strokeLinecap="round" strokeWidth={2} d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path>
                            </svg>
                        </div>
                        <p className="hero-flex-txt">72 Clients</p>
                    </div>
                </div>
            </section>

            <section className="company section-border">
                <div className="company-pins">
                    <div className="company-pin"></div>
                    <div className="company-pin"></div>
                    <div className="company-pin"></div>
                    <div className="company-pin"></div>
                </div>
                <div className="company-logos">
                    <div className="company-logo-wrapper">
                        <div className="company-logo">
                            <img src={img1} alt="" />
                        </div>
                        <div className="company-logo">
                            <img src={img2} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img3} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img4} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img5} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img1} alt="" />
                        </div>
                        <div className="company-logo">
                            <img src={img2} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img3} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img4} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img5} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img1} alt="" />
                        </div>
                        <div className="company-logo">
                            <img src={img2} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img3} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img4} alt="" />

                        </div>
                        <div className="company-logo">
                            <img src={img5} alt="" />

                        </div>
                        {/* Repeat logos for smooth sliding */}
                    </div>
                </div>
            </section>


            <section className="portfolio ">
                <div className="portfolio-main-text">
                    <h3 className="section-tag">Portfolio</h3>
                    <h2>Industries We Have Worked With</h2>
                </div>

                <div className="protfolio-content">
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">E-Commerence</p>
                        <div className="content-image"></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Fintech</p>
                        <div className="content-image"></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Transport</p>
                        <div className="content-image"></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Entertainment and <br />
                            Media</p>
                        <div className="content-image"></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Web 3</p>
                        <div className="content-image"></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Edutech</p>
                        <div className="content-image"></div>
                    </div>

                </div>
            </section>


            <section className="services section-border">
                <div className="services-main-text">
                    <h3 className="section-tag">Services</h3>
                    <h2>Industries We Have Worked With</h2>
                </div>

                <div className="services-blog">
                    <div className="blog-box">
                        <div className="blog-box-image"></div>
                        <h2 className="blog-header">Blog Post Text</h2>
                        <p className="blog-text">A blog content reduced to short text for short readers</p>
                        <div className="blog-action">
                            <Button full alt>Read On Medium</Button>
                        </div>
                    </div>
                    <div className="blog-box">
                        <div className="blog-box-image"></div>
                        <h2 className="blog-header">Blog Post Text</h2>
                        <p className="blog-text">A blog content reduced to short text for short readers</p>
                        <div className="blog-action">
                            <Button full alt>Read On Medium</Button>
                        </div>
                    </div>

                    <div className="blog-box">
                        <div className="blog-box-image"></div>
                        <h2 className="blog-header">Blog Post Text</h2>
                        <p className="blog-text">A blog content reduced to short text for short readers</p>
                        <div className="blog-action">
                            <Button full alt>Read On Medium</Button>
                        </div>
                    </div>
                </div>

                <div className="blog-last-action">
                    <Button full>Read Our Meduim Blog</Button>
                </div>
            </section>


            <section className="who section-border">
                <div className="who-top">
                    <div className="who-main-text">
                        <h3 className="section-tag">We Are Active</h3>
                        <h2>Follow Our
                            Creative Community</h2>
                    </div>
                    <div className="who-badges">
                        <div className="who-badge-box">
                            <p>Linkedin</p>
                        </div>
                        <div className="who-badge-box">
                            <p>Instagram</p>
                        </div>
                        <div className="who-badge-box">
                            <p>X</p>
                        </div>
                        <div className="who-badge-box">
                            <p>Github</p>
                        </div>
                        <div className="who-badge-box">
                            <p>Behance</p>
                        </div>

                    </div>
                </div>
                <div className="whoBase">

                </div>
            </section>


            <section className="test section-border">
                <div className="test-main-text">
                    <h3 className="section-tag">Testimonials</h3>
                    {/* <div className="test-switch">
                        <div className="test-button">
                            <p> Text Testimonials</p>
                        </div>
                        <div className="test-button">
                            <p> Video Testimonials</p>
                        </div>
                    </div> */}
                    <h2>From our satisfied clients </h2>
                    <p className="cl">
                        We brag in our excellence, but don’t just take our word for it. Check out what some of our satisfied clients have to say.
                    </p>
                </div>

                <div className="test-content">
                    <div className="test-content-wrap">
                        <div className="test-box">
                            <div className="test-img">

                            </div>
                            <p className="test-text">
                                We are very happy to work with this team and we look forward to work with them again and again
                            </p>
                            <div className="test-authuer">
                                <p className="name">Pilot Obi</p>
                                <p className="company-name">Abibi Hola Dubia</p>
                            </div>
                        </div>

                        <div className="test-box">
                            <div className="test-img">

                            </div>
                            <p className="test-text">
                                We are very happy to work with this team and we look forward to work with them again and again
                            </p>
                            <div className="test-authuer">
                                <p className="name">Pilot Obi</p>
                                <p className="company-name">Abibi Hola Dubia</p>
                            </div>
                        </div>

                        <div className="test-box">
                            <div className="test-img">

                            </div>
                            <p className="test-text">
                                We are very happy to work with this team and we look forward to work with them again and again
                            </p>
                            <div className="test-authuer">
                                <p className="name">Pilot Obi</p>
                                <p className="company-name">Abibi Hola Dubia</p>
                            </div>
                        </div>
                        <div className="test-box">
                            <div className="test-img">

                            </div>
                            <p className="test-text">
                                We are very happy to work with this team and we look forward to work with them again and again
                            </p>
                            <div className="test-authuer">
                                <p className="name">Pilot Obi</p>
                                <p className="company-name">Abibi Hola Dubia</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}