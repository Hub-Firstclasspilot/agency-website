import { Link, Outlet, useParams } from "react-router-dom";
import "../styles/pages/project.css"
import Button from "../components/button";
import { useEffect, useState } from "react";
import { client, urlFor } from "../sanityClient";

export function ProjectLayout() {
    return (
        <>
            <Outlet />
        </>
    )
}

export function ProjectList() {
    const [list, setList] = useState([])
    useEffect(() => {
        async function getServices() {
            client
                .fetch(`
                    *[_type == "projects"]{
                        group,
                       "images" : projectImages[0].asset._ref
                    }
                `)
                .then((data) => {
                    const uniqueProjects = data.reduce((acc, current) => {
                        const x = acc.find(item => item.group === current.group);
                        if (!x) {
                            acc.push(current);
                        }
                        return acc;
                    }, []);
                    console.log(uniqueProjects)
                    setList(uniqueProjects)
                })
                .catch(console.error)
        }
        getServices()
    }, [])
    return (
        <main>
            <section className="projectList">
                <h2>
                    Transforming Industries, One Project At A Time
                </h2>
                <p>
                    Our project portfolio spans multiple industries, united by a common thread – exceptional quality and impact. Explore our work to see how we've helped clients achieve their objectives, and discover how we can support your own success story
                </p>
            </section>

            <section className="projectShowCase">
                {
                    list.map((item, index) => {
                        return (
                            <Link key={"pro" + index} to={`/project/${item.group}`}>
                                <div className="pro-box">
                                    <div
                                        className="pro-box-img"
                                        style={{ background: `url(${urlFor(item.images).url()}) no-repeat center/cover` }}
                                    ></div>
                                    <h2>{item.group}</h2>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </main>
    )
}


export function Projects() {
    const { project } = useParams();
    const [list, setList] = useState([])

    useEffect(() => {
        async function getServices() {
            try {
                const data = await client.fetch(`
                    *[_type == "projects"]
                `);

                // Filter the data to include only the projects with the group matching the URL param
                const fintechProjects = data.filter(item => item.group === project);

                console.log('Project from URL:', project);
                console.log('All Projects:', data);
                console.log('Filtered Projects:', fintechProjects);

                setList(fintechProjects);
            } catch (error) {
                console.error(error);
            }
        }

        getServices();
    }, [project]);

    return (
        <main>
            <section className="projectOne">
                <div className="project-header">
                    <h2 className="headTwo">
                        {project} projects
                    </h2>
                </div>

                <div className="project-boxList">
                    {
                        list.map((item, index) => {
                            return (
                                <Link to={`/project/${project}/${index}`}>
                                    <BoxProject img={item.bannerImage?.asset?._ref} tagList={item.tags} title={item.projectTitle} subText={item.shortText} />
                                </Link>
                            )
                        })
                    }
                    {/* <BoxProject /> */}
                    {/* <BoxProject /> */}
                </div>
            </section>
        </main>
    )
}


export function ProjectOne() {
    const { project, id } = useParams();
    const [list, setList] = useState([])
    const [prod, setProd] = useState([])

    useEffect(() => {
        async function getServices() {
            try {
                const data = await client.fetch(`
                   *[_type == "projects"][]{
                        bannerImage,
                        website,
                        durations,
                        founded,
                        projectTitle,
                        roles,
                        tools,
                        teams[]->{
                            _id,
                            name,
                            teamRole,
                            profile
                        },
                        tags,
                        projectImages,
                        size,
                        headquaters,
                        industries,
                        company,
                        revenue,
                        projectDescription,
                        group
                    }
                `);

                // Filter the data to include only the projects with the group matching the URL param
                const fintechProjects = data.filter(item => item.group === project);

                console.log('Project from URL:', project, id);
                console.log('All Projects:', data);
                console.log(pickAndStore(fintechProjects, id));
                setProd(pickAndStore(fintechProjects, id))
                setList(fintechProjects[id]);
            } catch (error) {
                console.error(error);
            }
        }

        getServices();
    }, [project, id]);
    return (
        <main>
            <section className="project-mainOne">
                <div className="pro-top-info">
                    <div className="tags">
                        <div className="tags">
                            {
                                list.tags?.map((item, index) => {
                                    return (
                                        <div key={"vm" + index} className="tagBox">
                                            <p>{item}</p>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>

                    <h2 className="proMainHead">
                        {list.projectTitle}
                    </h2>

                    <div className="pro-img-box-top" style={{ background: `url(${list.bannerImage ? urlFor(list.bannerImage.asset._ref).url() : ""}) no-repeat center/cover ` }}></div>

                    <hr />
                </div>

                <div className="ip-info">
                    <div className="infoBox ">
                        <div className="co-box">
                            <p className="label">Company</p>
                            <p className="value">{list.company}</p>
                        </div>
                        <div className="co-box">
                            <p className="label">Company</p>
                            <p className="value">Project Company</p>
                        </div>
                    </div>
                    <div className="infoBox">
                        <div className="co-full-box">
                            <p className="label">Role</p>
                            <p className="value">{list.roles?.join(", ")}</p>
                        </div>
                        <div className="co-full-box">
                            <p className="label">Tools</p>
                            <p className="value">{list.tools?.join(", ")}</p>
                        </div>
                        <div className="co-full-box">
                            <p className="label">Duration</p>
                            <p className="value">{list.durations}</p>
                        </div>
                    </div>
                </div>



                <div className="team">
                    <h2 className="teamText">
                        Team
                    </h2>
                    <div className="teamList">
                        <div className="teamWarp">
                            {
                                list.teams?.map((item, index) => {
                                    return (
                                        <div key={"te" + index} className="teamBox-con">
                                            <div className="teamBox-img" style={{ background: `url(${urlFor(item.profile?.asset?._ref)?.url()}) no-repeat center/cover ` }}></div>
                                            <div className="team-boxText">
                                                <p className="tHead">{item.name}</p>
                                                <p className="tBase">{item.teamRole}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>


                <div className="proDes">
                    <div className="proDes-topContent">
                        <h2 className="des">Project Description</h2>
                        {list.projectDescription?.map((item, index) => (
                            <p key={"sTp" + index}>{item.children?.map((child) => child.text).join(' ')}</p>
                        ))}
                    </div>

                    <div className="proWork-img">
                        {
                            list.projectImages?.map((item, index) => {
                                let img = item.asset?._ref
                                return (
                                    <div key={"im" + index} style={{ background: `url(${urlFor(img)?.url()}) no-repeat center/cover ` }} className="img-pro-work"></div>
                                )
                            })

                        }
                    </div>
                </div>
            </section>


            {
                prod.data?.length > 0 ? (
                    <section className="others">
                        <div className="othersTop">
                            <h2>
                                Other Projects
                            </h2>
                            <p>Take a look at these other remarkable projects</p>
                        </div>


                        <div className="otherList">
                            {
                                prod.data.map((item, index) => {
                                    return (
                                        <Link to={`${index === 0 ? `/project/${project}/${prod.first}` : `/project/${project}/${prod.second}`}`}>
                                            <BoxProject key={"im" + index} img={item.bannerImage?.asset?._ref} title={item.projectTitle} tags={item.tags} />
                                        </Link>
                                    )
                                })
                            }
                        </div>

                        <div className="otherAction">
                            <Link to={`/project/${project}`}>
                                <Button full>See Other {project} Projects</Button>
                            </Link>
                        </div>
                    </section>
                ) : null
            }
        </main>
    )
}


function pickAndStore(array, pick) {
    const n = parseInt(pick)
    console.log("Picked index: ", n);
    if (array.length < 2) {
        return []; // If the array is too short, return an empty array
    }

    // Handle the case when the array has exactly 2 elements
    if (array.length < 3) {
        if (n === 0) {
            return {
                data: [array[1]],
                first: 1
            }; // Return the second element if the first element is picked
        } else if (n === 1) {
            return {
                data: [array[0]],
                first: 0
            }// Return the first element if the second element is picked
        } else {
            return []; // If pick is out of bounds, return an empty array
        }
    }

    // Handle cases where the array has 3 or more elements
    if (n < 0 || n >= array.length) {
        return []; // If the picked index is out of bounds, return an empty array
    }

    const nextIndex = (n + 1) % array.length;
    const secondNextIndex = (n + 2) % array.length;

    console.log("Next two elements: ", array[nextIndex], array[secondNextIndex]);

    return {
        data: [array[nextIndex], array[secondNextIndex]],
        first: nextIndex,
        second: secondNextIndex,
    };
}



// // Example usage:
// const objectsArray = [
//     { id: 1, name: "Object 1" },
//     { id: 2, name: "Object 2" },
//     { id: 3, name: "Object 3" },
//     { id: 4, name: "Object 4" },
//     { id: 5, name: "Object 5" },
//     { id: 6, name: "Object 6" },
//     { id: 7, name: "Object 7" }
// ];

// console.log(pickAndStoreObjects(objectsArray, "id", 5));
// // Output: [{ id: 6, name: "Object 6" }, { id: 7, name: "Object 7" }]

// console.log(pickAndStoreObjects(objectsArray, "id", 7));
// // Output: [{ id: 1, name: "Object 1" }, { id: 2, name: "Object 2" }]

// console.log(pickAndStoreObjects(objectsArray, "id", 6));
// // Output: [{ id: 7, name: "Object 7" }, { id: 1, name: "Object 1" }]



function BoxProject({ title, subText, tagList, img }) {
    return (
        <div className="project-boxie">
            <div className="project-top-img" style={{
                background: img
                    ? `url(${urlFor(img)?.url()}) no-repeat center/cover`
                    : ""
            }}>

            </div>
            <div className="project-down">
                <div className="tags">
                    {
                        tagList?.map((item, index) => {
                            return (
                                <div key={"inTag" + index} className="tagBox">
                                    <p>{item}</p>
                                </div>
                            )
                        })
                    }
                </div>
                <h2>{title}</h2>
                <p>{subText}</p>

                <div className="pro-bottom-action">
                    <Button full>
                        <div className="button-more">
                            <p>View Project Case Study</p>
                        </div>
                    </Button>
                </div>
            </div>
        </div>
    )
}