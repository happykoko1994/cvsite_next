import Link from "next/link";
import projects from "@/app/data/projects";

function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1" id="project">Projects</h2>
                <ul className="projects">
                    {projects.map((item) => (
                        <li key={item.link} className="project">
                            <Link href={item.link}>
                                <img className="project__img" src={Array.isArray(item.image) ? item.image[0] : item.image} alt={item.alt} />
                                <h3 className="project__title">{item.title}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Projects;
