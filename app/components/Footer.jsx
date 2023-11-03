import Link from "next/link";

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer__wrapper">
                    <ul className="social">
                        <li className="social__item"><Link href={"https://vk.com/live2sputch"} target="_blank">vk.com</Link></li>
                        <li className="social__item"><Link href={"https://github.com/happykoko1994/"} target="_blank">github.com</Link>
                        </li>
                        <li className="social__item"><Link href={"https://hh.ru/resume/e5bfc61dff0c588d1e0039ed1f42646d685048"}
                            target="_blank">hh.ru</Link></li>
                    </ul>
                </div>
                <div className="copyright">© All rights reserved 2023</div>

            </div>
        </footer>
    );
}

export default Footer;