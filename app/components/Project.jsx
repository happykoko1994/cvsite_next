import '../styles/homepage.css'
import '../styles/globals.css'
import Link from "next/link";
import projectDetails from '../data/projectDetails';

function Project({ item }) {
    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{projectDetails[item].title}</h1>
                    <div className="project-details__cover">
                        <img src={projectDetails[item].image}></img>
                    </div>
                    <div className="project-details__desc">
                        <p>{projectDetails[item].body}</p>
                        <h2>{projectDetails[item].skills}</h2>
                        <Link href="/projects" class="btn-outline">Назад</Link>
                        <Link href={projectDetails[item].gitLink} target="_blank" className="btn-outline">Github</Link>
                    </div>
                </div>
            </div>
            <div className="up-btn"></div>
        </main>
    );
}

export default Project;