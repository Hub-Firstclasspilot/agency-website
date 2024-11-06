import { useState } from "react";
import "../styles/components.css";
import { Link, useLocation } from "react-router-dom";
import Button from "./button";
import logo from "../assets/images/logo.png";

export function Navbar() {
    const [open, setOpen] = useState(false); // default state should be false
    const location = useLocation();

    const navList = [
        { link: "/", name: "Home" },
        { link: "/project", name: "Project" },
        { link: "/about", name: "About" },
        { link: "/services", name: "Services" }
    ];

    const navListMo = [
        { link: "/", name: "Home" },
        { link: "/project", name: "Portfolio" },
        { link: "/about", name: "Meet The Pilots" },
        { link: "/services", name: "Services" },
        { link: "/book", name: "Contact" }
    ];

    // Check if the current path starts with '/project' or is exactly '/'
    const isProjectPage = location.pathname.startsWith('/project');
    const isHomePage = location.pathname === '/';

    return (
        <nav className="nav">
            <div className="navWrap">
                <div className="navLogo">
                    <Link to="/">
                        <img src={logo} alt="Logo" />
                    </Link>
                </div>
                <div className="navList desktop">
                    <div className="navLW">
                        {
                            navList.map((item, index) => {
                                // Determine if the link should be active
                                const isActive = item.link === '/' ? isHomePage : item.link === '/project' ? isProjectPage : location.pathname === item.link;

                                return (
                                    <Link key={'v' + index} to={item.link}>
                                        <div className={`navLWBox ${isActive ? 'nActive' : ''}`}>
                                            <p>{item.name}</p>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="navAction">
                    <div className="navButton ">
                        <Link to="/book">
                            <Button>Book Appointment</Button>
                        </Link>
                    </div>
                    <div className="navHamBox mobile" onClick={() => { setOpen(!open) }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="40px" height="40px" viewBox="0 0 24 24">
                            <path fill="#ffffff" d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
                        </svg>
                    </div>
                </div>
            </div>

            {
                open ? (
                    <div className="navListMobile">
                        {
                            navListMo.map((item, index) => {
                                return (
                                    <Link key={"l" + index} to={item.link} onClick={() => { setOpen(!open) }}>
                                        <div className="navText">
                                            <h2>{item.name}</h2>
                                        </div>
                                    </Link>
                                );
                            })
                        }
                    </div>
                ) : null
            }
        </nav>
    );
}

export function NavAlt() {
    return (
        <nav className="navAlt">
            {/* Alternative Navigation Content */}
        </nav>
    );
}
