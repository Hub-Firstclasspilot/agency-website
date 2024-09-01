import "../styles/components.css"
import footLogo from "../assets/images/footerLogo.png"
import { Link } from "react-router-dom"
export default function Footer() {
    return (
        <footer className="section-border-bg ">
            <div className="footer-wrap">
                <div className="footer-top">
                    <p className="footerHead">Contact</p>
                    <p><a href="tel:+234 9156129963">+234 9156129963</a></p>
                    
                    <p><a href="mailto:hi@firstclasspilot.com">hi@firstclasspilot.com</a></p>
                </div>
                <div className="footer-botoom">
                    <div className="footer-top">
                        <p className="footerHead">Sitemap</p>
                        <Link to="/"><p className="fooList">Home</p></Link>
                        <Link to="/project"><p className="fooList">Project</p></Link>
                        <Link to="/about"> <p className="fooList">About</p></Link>
                        {/* <Link to="/"><p className="fooList">Blog</p></Link> */}
                        <Link to="/book"><p className="fooList">Book a Call</p></Link>
                    </div>
                    <div className="footer-top">
                        <p className="footerHead">Creative Community</p>
                        <p className="fooList">Instagram</p>
                        <p className="fooList">Linkedin</p>
                        <p className="fooList">X</p>
                        <p className="fooList">Github</p>
                        <p className="fooList">Behance</p>
                    </div>
                </div>
            </div>
            <div className="footerLogo">
                <img src={footLogo} alt="" />
            </div>
            <div className="footer-base">
                <p className="base">FirstClassPilot</p>
                <p className="base"> 2024 Legal Notice</p>
            </div>
        </footer>
    )
}