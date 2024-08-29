import { useState } from "react"
import "../styles/components.css"
import { Link } from "react-router-dom"
import Button from "./button"
import logo from "../assets/images/logo.png"
export function Navbar() {
    const [open, setOpen] = useState()
    const navList = [
        {
            link: "/",
            name: "Home"
        },
        {
            link: "/project",
            name: "Project"
        },
        {
            link: "/about",
            name: "About"
        },
        {
            link: "/services",
            name: "Services"
        }
    ]


    return (
        <nav className="nav">
            <div className="navWrap">
                <div className="navLogo">
                    <Link to="/">
                        <img src={logo} alt="" />
                    </Link>
                </div>
                <div className="navList desktop">
                    <div className="navLW">
                        {
                            navList.map((item, index) => {
                                return (
                                    <Link key={'v' + index} to={item.link}>
                                        <div className="navLWBox nActive">
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                )

                            })
                        }
                    </div>
                </div>
                <div className="navAction">
                    <div className="navButton desktop">
                        <Link to="/book">
                            <Button>Book a Call</Button>
                        </Link>
                    </div>
                    <div className="navHamBox mobile" onClick={() => { setOpen(!open) }}></div>
                </div>
            </div>

            {
                open ? (
                    <div className="navListMobile">
                        {
                            navList.map((item, index) => {
                                return (
                                    <Link key={"l" + index} to={item.link} onClick={() => { setOpen(!open) }}>
                                        <div className="navText">
                                            <h2>{item.name}</h2>
                                        </div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                ) : null
            }
        </nav>
    )
}

export function NavAlt() {
    return (
        <nav className="navAlt">

        </nav>
    )
}