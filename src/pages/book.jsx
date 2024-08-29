import "../styles/pages/book.css"
import Button from "../components/button.jsx"
import { useState } from "react"
import { Link } from "react-router-dom"
export default function Book() {
    const [bookDone, setBookDone] = useState(false)
    const [formData, setFormData] = useState([])

    function handleSubmit(e) {
        e.preventDefault()
        setBookDone(true)
    }

    return (
        <main>
            {
                bookDone ? (
                    <section className="bookDone">
                        <div className="sucWrap">
                            <p className="sucTop">
                                Your submission has been received! <br /> A member of our team will reach out shortly or you can schedule time to connect below.
                            </p>

                            <div className="sucBoxImg">

                            </div>

                            <div className="sucAction">
                                <Button full>Book a call</Button>
                                <Link to="/">
                                    <Button full alt>Back to Hompage</Button>
                                </Link>
                            </div>
                        </div>
                    </section>
                ) : null
            }
            <section className="book">
                <div className="leftBook">
                    <div className="bookInfo">
                        <h2>Get Started Today</h2>
                        <p>Reachout and we’ll be in touch in 24 hours.</p>
                    </div>

                    <div className="formBook">
                        <form onSubmit={(e) => { handleSubmit(e) }}>

                            <div className="fomWrapDouble">
                                <div className="inWrap">
                                    <p className="fLabel">First Name</p>
                                    <input type="text" placeholder="First name" />
                                </div>
                                <div className="inWrap">
                                    <p className="fLabel">Last Name</p>
                                    <input type="text" placeholder="First name" />
                                </div>
                            </div>

                            <div className="fomWrapDouble">
                                <div className="inWrap">
                                    <p className="fLabel">Company</p>
                                    <input type="text" placeholder="First name" />
                                </div>
                                <div className="inWrap">
                                    <p className="fLabel">Phone Number (Optional)</p>
                                    <input type="text" placeholder="First name" />
                                </div>
                            </div>

                            <div className="inWrap">
                                <p className="fLabel">Your Message</p>
                                <textarea name="" id="" placeholder="Write Your Message"></textarea>
                            </div>

                            <div className="formAction">
                                <Button alt>Book a call</Button>
                                <Button >Send message</Button>
                            </div>

                        </form>
                    </div>
                </div>
                <div className="rightBook">
                    
                </div>
            </section>
        </main>
    )
}