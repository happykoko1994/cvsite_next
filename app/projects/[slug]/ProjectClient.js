"use client"; // Делаем компонент клиентским

import "../../styles/homepage.css";
import "../../styles/globals.css";
import { useParams } from "next/navigation";
import Link from "next/link";
import projects from "@/app/data/projects";

export default function ProjectPage() {
    const { slug } = useParams(); // Получаем slug из URL
    const project = projects.find(p => p.link.endsWith(`/${slug}`));

    if (!project) {
        return <p>Проект не найден</p>;
    }

    return (
        <main className="section">
            <div className="container">
                <div className="project-details">
                    <h1 className="title-1">{project.title}</h1>
                    <div className="project-details__cover">
                        {Array.isArray(project.image) ? (
                            project.image.map((img, index) => (
                                <img key={index} src={img} alt={project.alt} />
                            ))
                        ) : (
                            <img src={project.image} alt={project.alt} />
                        )}
                    </div>
                    <div className="project-details__desc">
                        <p>{project.description}</p>
                        <h2>{project.skills}</h2>
                        <Link href="/projects" className="btn-outline">Назад</Link>
                        {project.gitLink && (
                            <a href={project.gitLink} target="_blank" className="btn-outline">Github</a>
                        )}
                    </div>
                </div>
            </div>
        </main>
    );
}