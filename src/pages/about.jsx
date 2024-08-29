import { useEffect, useRef, useState } from "react";
import "../styles/pages/about.css";
import { client, urlFor } from "../sanityClient";

export default function About() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const lineSpanRefs = useRef([]);
    const [list, setList] = useState({});
    const [images, setImages] = useState([
        '/default-image1.jpg', // Replace with actual default image paths
        '/default-image2.jpg',
    ]);

    useEffect(() => {
        async function getAbout() {
            try {
                const data = await client.fetch(`
                    *[_type == "about"][0]{
                        header,
                        aboutText,
                        bannerImages[]{
                            "o":asset._ref
                        },
                        "img" : subBannerImage.asset._ref,
                        mission,
                        vision,
                        subHeader,
                        subText,
                        teams[]->{
                            _id,
                            name,
                            teamRole,
                            profile
                        }
                    }
                `);

                if (data?.bannerImages?.length > 0) {
                    setImages(data.bannerImages);
                }

                setList(data);
            } catch (error) {
                console.error(error);
            }
        }
        getAbout();
    }, []);

    useEffect(() => {
        const startSlideshow = () => {
            return setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    prevIndex === images.length - 1 ? 0 : prevIndex + 1
                );
            }, 5000);
        };

        const interval = startSlideshow();

        return () => {
            clearInterval(interval);
        };
    }, [images]);

    useEffect(() => {
        lineSpanRefs.current.forEach((span) => {
            span.style.transition = 'none';
            span.style.width = '0%';
        });

        const currentSpan = lineSpanRefs.current[currentImageIndex];
        if (currentSpan) {
            setTimeout(() => {
                currentSpan.style.transition = 'width 5s linear';
                currentSpan.style.width = '100%';
            }, 50);
        }
    }, [currentImageIndex]);

    useEffect(() => {
        setCurrentImageIndex(0);
    }, [images]);

    return (
        <main>
            <section className="about">
                <div className="about-top-info">
                    <h2 className="aboHeader">
                        {list.header}
                    </h2>
                    <p className="mmew">
                        {list.aboutText}
                    </p>

                    <div className="about-action-Role">
                        <div className="aboutAction-line">
                            {images.map((_, index) => (
                                <div className="line-Wrap" key={index}>
                                    <div
                                        className="line-span"
                                        ref={(el) => (lineSpanRefs.current[index] = el)}
                                    ></div>
                                </div>
                            ))}
                        </div>

                        <div className="about-mi">
                            <div className="aboutSwip" style={{ 
                                background: images[currentImageIndex]?.o 
                                    ? `url(${urlFor(images[currentImageIndex].o)?.url()}) no-repeat center/cover` 
                                    : "url('/placeholder.jpg') no-repeat center/cover"
                            }}>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="about-cont">
                    <div className="actinfo">
                        <h3>HOW IT STARTED</h3>
                        <h2>{list.subHeader}</h2>

                        <div className="act-parg">
                            {list.subText?.map((item, index) => (
                                <p key={"sT" + index}>{item.children?.map((child) => child.text).join(' ')}</p>
                            ))}
                        </div>
                    </div>
                    <div className="abImg-eij" style={{ 
                        background: list.img 
                            ? `url(${urlFor(list.img)?.url()}) no-repeat center/cover` 
                            : "" 
                    }}>
                    </div>
                </div>

                <div className="aboutVM">
                    <div className="vmWrap">
                        <h3>Our Mission</h3>
                        <h2>{list.mission}</h2>
                    </div>
                    <div className="vmWrap">
                        <h3>Our Vision</h3>
                        <h2>{list.vision}</h2>
                    </div>
                </div>

                <div className="aboutMisImg"></div>

                <div className="ourTeam">
                    <div className="infoTeam">
                        <h3>Our Team</h3>
                        <h2>Get to know the people that get it all done</h2>
                    </div>

                    <div className="infoTeamList">
                        {list.teams?.map((item, index) => (
                            <div key={"tem" + index} className="TeamMember">
                                <div className="teamImgBox" style={{ 
                                    background: `url(${urlFor(item.profile?.asset?._ref)?.url()}) no-repeat center/cover` 
                                }}>
                                </div>
                                <div className="teamDon">
                                    <p className="nameTeam">{item.name}</p>
                                    <p className="nameRole">{item.teamRole}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
