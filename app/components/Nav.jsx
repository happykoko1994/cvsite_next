import Link from "next/link";

function Nav() {
    return (
        <header>
            <nav className='nav'>
                <div className='container'>
                    <div className="nav-row">
                        <Link href={"/"} className="logo">My <strong>Portfolio</strong></Link>
                        <ul className="nav-list">
                            <li className="nav-list__item"><Link className='nav-list__link' href={"/projects"}>Projects</Link></li>
                            <li className="nav-list__item"><Link className='nav-list__link' href={"/skills"}>Skills</Link></li>
                            <li className="nav-list__item"><Link className='nav-list__link' href={"/contacts"}>Contacts</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Nav;