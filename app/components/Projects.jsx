import Link from 'next/link';
import '../styles/homepage.css'
import '../styles/globals.css'
import projects from '../data/projects';

function Projects() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1" id="project">Projects</h2>
                <ul className='projects'>
                    {projects.map(item => (
                        <li className='project'>
                            <Link href={item.link}>
                                <img className='project__img' src={item.image} alt={item.alt} />
                                <h3 className='project__title'>{item.body}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    );
}

export default Projects;