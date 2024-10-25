import "../styles/pages/book.css";
import Button from "../components/button.jsx";
import { useState } from "react";
import { Link } from "react-router-dom";
import * as emailjs from "@emailjs/browser";

export default function Book() {
    const [bookDone, setBookDone] = useState(false);
    const [mailConfig, setMailConfig] = useState({
        from_name: "",
        message: "",
        email: "",
        phoneNumber: "",
    });

    function sendMail() {
        emailjs.send(
            "service_3kwyl0r",
            "template_a1l8x31",
            mailConfig,
            "eAueIqiGEq3-_E8Y4" // Replace with your actual EmailJS public API key
        )
            .then(
                (response) => {
                    console.log("SUCCESS!", response.status, response.text);
                    setBookDone(true); // Show success message on successful send
                },
                (error) => {
                    console.log("FAILED...", error);
                }
            );
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setMailConfig((prev) => ({ ...prev, [name]: value }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        sendMail(); // Trigger email sending on form submission
    }

    return (
        <main>
            {bookDone ? (
                <section className="bookDone">
                    <div className="sucWrap">
                        <p className="sucTop">
                            Your submission has been received! <br /> A member of our team will reach out shortly or you can schedule a time to connect below.
                        </p>

                        <div className="sucBoxImg"></div>

                        <div className="sucAction">
                            <Link to="https://calendly.com/firstclasspilot/30min">
                                <Button alt full>Book with Calendly</Button>
                            </Link>
                            <Link to="/">
                                <Button full>Back to Homepage</Button>
                            </Link>
                        </div>
                    </div>
                </section>
            ) : null}

            <section className="book">
                <div className="leftBook">
                    <div className="bookInfo">
                        <h2>Get Started Today</h2>
                        <p>Welcome aboard! Purchase your ticket to an unmatched business solution by scheduling a call or filling out the form</p>
                    </div>

                    <div className="formBook">
                        <form onSubmit={handleSubmit}>
                            <div className="fomWrapDouble">
                                <div className="inWrap">
                                    <p className="fLabel">Name</p>
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        name="from_name"
                                        value={mailConfig.from_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="fomWrapDouble">
                                <div className="inWrap">
                                    <p className="fLabel">Email</p>
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={mailConfig.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className="fomWrapDouble">
                                <div className="inWrap">
                                    <p className="fLabel">Phone Number (Optional)</p>
                                    <input
                                        type="text"
                                        placeholder="Phone Number"
                                        name="phoneNumber"
                                        value={mailConfig.phoneNumber}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="inWrap">
                                <p className="fLabel">Your Message</p>
                                <textarea
                                    placeholder="Write Your Message"
                                    name="message"
                                    value={mailConfig.message}
                                    onChange={handleChange}
                                    required
                                ></textarea>
                            </div>

                            <div className="formAction">
                                <Link to="https://calendly.com/firstclasspilot/30min">
                                    <Button alt full>Book with Calendly</Button>
                                </Link>
                                <Button type="submit">Send message</Button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="rightBook"></div>
            </section>
        </main>
    );
}
