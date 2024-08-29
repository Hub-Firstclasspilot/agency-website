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
