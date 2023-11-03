import '../styles/homepage.css'
import '../styles/globals.css'

function Contacts() {
    return (
        <main className="section">
            <div className="container">
                <h2 className="title-1">Contacts</h2>
                <div className="content">
                    <div className="title-2">Location</div>
                    <p>City</p>
                    <div className="title-2">Email</div>
                    <p>max-goryachev@ya.ru</p>
                    <div className="title-2">Telegram</div>
                    <p>t.me/happmax</p>
                    <div className="title-2">WhatsApp</div>
                    <p>+7 (778) 784-31-97 Казахстан</p>
                    <p> +7 (905) 275-77-88 Россия</p>
                    <div className="title-2">VK</div>
                    <p>vk.com/live2sputch</p>
                </div>
            </div>
        </main>
    );
}

export default Contacts;