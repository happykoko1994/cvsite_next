import Link from 'next/link';
import '../styles/homepage.css'
import Projects from './Projects';

function HomePage() {
    return (
        <div>
            <header className="header">
                <div className="header__wrapper">
                    <h1 className="header__title">
                        <strong>Hello, my name is <em>Maksim</em></strong> a frontend developer
                    </h1>
                    <div className="header__text">
                        <p>Web applications development</p>
                    </div>
                    <Link href="https://github.com/happykoko1994/" target="_blank" className="btn">Github</Link>
                </div>
            </header>
            <Projects />
            <div className="up-btn"></div>

        </div>
    );
}

export default HomePage;