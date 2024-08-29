import {client, urlFor} from "../sanityClient"
import "../styles/pages/services.css"
import { useEffect, useState } from "react"

export default function Serveics() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function getServices() {
            client
                .fetch(`
                    *[_type == "services"]{
                        "text" : serviceText,
                        "header" : serviceTitle,
                        "img" : serviceImage.asset._ref
                    }
                `)
                .then((data) => {
                    console.log(data)
                    setList(data)
                })
                .catch(console.error)
        }
        getServices()
    }, [])

    return (
        <main className="ser">
            <section className="service">
                <div className="servTop">
                    <h2>
                        We take pride in the versatility of the services we offer
                    </h2>
                    <p>Bringing ideas to life with pixels and wonders, our core mission is to drive business performance by portraying your brand in the best possible light.</p>
                </div>

                <div className="servicesList">
                    {
                        list.map((item, index) => {
                            return (
                                <div key={"ser" + index} className="servBox">
                                    <h2 className="servHead">
                                        {item.header}
                                    </h2>
                                    <div className="servImg" style={{background: `url(${urlFor(item.img).url()})  no-repeat center/cover`}}>
                                        {/* <img src={urlFor(item.img).url()} alt="a service image" /> */}
                                    </div>
                                    <p className="servText">
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </main>
    )
}