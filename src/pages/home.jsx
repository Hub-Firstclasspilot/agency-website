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
import { useEffect, useState } from "react"
import { client, urlFor } from "../sanityClient"


import test1 from "../assets/mon/IMG-20241107-WA0028.jpg"
import test2 from "../assets/mon/IMG-20241107-WA0029.jpg"
import test3 from "../assets/mon/IMG-20241107-WA0030.jpg"
import test4 from "../assets/mon/IMG-20241107-WA0031.jpg"
import test5 from "../assets/mon/IMG-20241107-WA0032.jpg"
import test6 from "../assets/mon/IMG-20241107-WA0033.jpg"
import test7 from "../assets/mon/IMG-20241107-WA0034.jpg"

export default function Home() {
    const [blogs, setBlogs] = useState([])

    const reveiws = [
        {
            img: test6,
            name: "Mathias TCHAGBE",
            content: `At  FirstClassPilot, they offer quality services.  I really appreciate.
                        They opened my website for me and they are also managing it for me They will not just  deliver and  leave you,
                         but they also do follow up to make sure that you get the result that you want.`
        },
        {
            img: test5,
            name: "Tyler Garrett",
            content: `High quality Strategy, Design, and Technology services. Amazing customer service. The business owner is someone you want on your team & projects.`
        },
        {
            img: test2,
            name: "Rosemary Auld",
            content: `Very professional well managed company, highly recommend  for all your needs, would definitely work with them again .`
        },
        {
            img: test4,
            name: "Beat Gaud",
            content: `Amazing experience in accomplishing and accommodating request. If your not working with this organization you are not first class`
        },
        {
            img: test7,
            name: "Bolaji Adegboyega",
            content: `Amazing Team with an extraordinary customer service provision. Will always recommend.`
        },
        {
            img: test3,
            name: "OKOLI Dera",
            content: `Customer service is top notch and they pay attention to details.`
        },
        {
            img: test1,
            name: "Roselyn Sanders",
            content: `Awesome work by first class pilot 💯`
        }
    ]

    useEffect(() => {
        async function getBlogs() {
            client
                .fetch(`
                    *[_type == "blogs"]{
                        blogTitle,
                        blogInfo,
                        blogLink,
                       "blogImage" : blogImage.asset._ref
                    }
                `)
                .then((data) => {
                    console.log(data)
                    setBlogs(data)
                })
                .catch(console.error)
        }
        getBlogs()
    }, [])

    return (
        <main>
            <section className="hero section-border">

                <div className="heroWrap-Cont">
                    <div className="hero-boWrap">
                        <div className="hero-text">
                            <h1>FirstClassPilot</h1>
                            <p> Awarding wining 360 Technology Agency</p>

                            {/* <div className="hero-tag">
                                <p>Digital Ads</p>
                                <div className="hero-dot"></div>
                                <p>Creative Coding</p>
                                <div className="hero-dot"></div>
                                <p>Social Media</p>
                            </div> */}
                        </div>
                        <div className="hero-image">
                            <img src={lady} alt="" />
                        </div>
                        <div className="hero-action">
                            <Link to="/project">
                                <Button alt>Portfolio</Button>
                            </Link>
                            <Link to="/services">
                                <Button>Our Services</Button>
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
                        <p className="hero-flex-txt">48 Products</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <img src={ico1} alt="" />

                        </div>
                        <p className="hero-flex-txt">$800k+ Growth</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <img src={ico2} alt="" />

                        </div>
                        <p className="hero-flex-txt">800k+ Clients</p>
                    </div>
                    <div className="hero-flex-content">
                        <div className="hero-flex-img">
                            <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" viewBox="0 0 24 24">
                                <path fill="none" stroke="#cd6af0" strokeLinecap="round" strokeWidth={2} d="M16 19h4a1 1 0 0 0 1-1v-1a3 3 0 0 0-3-3h-2m-2.236-4a3 3 0 1 0 0-4M3 18v-1a3 3 0 0 1 3-3h4a3 3 0 0 1 3 3v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1Zm8-10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"></path>
                            </svg>
                        </div>
                        <p className="hero-flex-txt"> 6 Industries</p>
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
                        <div className="ni">
                            <div className="company-logo a1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="company-logo a2">
                                <img src={img2} alt="" />
                            </div>
                            <div className="company-logo a3">
                                <img src={img3} alt="" />
                            </div>
                            <div className="company-logo a4">
                                <img src={img4} alt="" />
                            </div>
                            <div className="company-logo a5">
                                <img src={img5} alt="" />
                            </div>
                            <div className="company-logo a1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="company-logo a2">
                                <img src={img2} alt="" />
                            </div>
                            <div className="company-logo a3">
                                <img src={img3} alt="" />
                            </div>
                            <div className="company-logo a4">
                                <img src={img4} alt="" />
                            </div>
                            <div className="company-logo a5">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                        <div className="ni">
                            <div className="company-logo a1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="company-logo a2">
                                <img src={img2} alt="" />
                            </div>
                            <div className="company-logo a3">
                                <img src={img3} alt="" />
                            </div>
                            <div className="company-logo a4">
                                <img src={img4} alt="" />
                            </div>
                            <div className="company-logo a5">
                                <img src={img5} alt="" />
                            </div>
                            <div className="company-logo a1">
                                <img src={img1} alt="" />
                            </div>
                            <div className="company-logo a2">
                                <img src={img2} alt="" />
                            </div>
                            <div className="company-logo a3">
                                <img src={img3} alt="" />
                            </div>
                            <div className="company-logo a4">
                                <img src={img4} alt="" />
                            </div>
                            <div className="company-logo a5">
                                <img src={img5} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section className="services section-border">
                <div className="services-main-text">
                    <h3 className="section-tag">Our Blog</h3>
                    <h2>Read Some Of Our Blog Articles On Medium</h2>
                </div>

                <div className="services-blog">
                    {
                        blogs?.map((item, index) => {
                            if (index < 3) {
                                return (
                                    <div key={"blog" + index} className="blog-box">
                                        <div className="blog-box-image">
                                            <img src={urlFor(item.blogImage)?.url()} alt="" />
                                        </div>
                                        <h2 className="blog-header">{item.blogTitle}</h2>
                                        <p className="blog-text">{item.blogInfo}</p>
                                        <div className="blog-action">
                                            <Link to={item.blogLink}>
                                                <Button full alt>Read On Medium</Button>
                                            </Link>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                </div>

                <div className="blog-last-action">
                    <Button full>Read Our Meduim Blog</Button>
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
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=600) center/cover` }}></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Fintech</p>
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/164501/pexels-photo-164501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover` }}></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Transport</p>
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover` }}></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Entertainment and
                            Media</p>
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/67654/pexels-photo-67654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover` }}></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Ai</p>
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=600) center/cover` }}></div>
                    </div>
                    <div className="portfolio-contentBoxX">
                        <p className="content-box-txt">Cybersecurity</p>
                        <div className="content-image" style={{ background: `url(https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1) center/cover` }}></div>
                    </div>
                </div>

                <div className="protfolio-con">
                    <Link to="/book">
                        <Button>Book an appointment</Button>
                    </Link>
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
                        <div className="who-badge-box">
                            <p>Tiktok</p>
                        </div>


                    </div>
                </div>
                <div className="whoBase">

                    <div className="whoGridWrap">
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                        <div className="whoItem"></div>
                    </div>

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
                        {
                            reveiws.map((item, index) => {
                                return (
                                    <div key={"li"+index} className="test-box">
                                        <div className="test-img">
                                            <img src={item.img}/>
                                        </div>
                                        <p className="test-text">
                                            {item.content}
                                        </p>
                                        <div className="test-authuer">
                                            <p className="name">{item.name}</p>
                                            {/* <p className="company-name">Abibi Hola Dubia</p> */}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </main>
    )
}