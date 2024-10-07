const projectDetails = [

    {
        title: "Онлайн магазин",
        link: "/projects/shop",
        image: "../images/shop.png",
        alt: 'shop',
        body: 'Сайт онлайн магазина на ReactJS, с возможностью регистрации новых пользователей, выбора категорий товаров и их сортировки, постраничный вывод товаров, а также карточками отдельных товаров. Реализована админ панель для добавления новых брендов, типов и девайсов. Был настроен локальный сервер PostgresQL для хранения данных и обмена ими с сайтом.',
        skills: 'Skills : React(router, bootstrap), axios, Mobx ',
        gitLink: 'https://github.com/happykoko1994/shop',
    },
    {
        title: "Инфографика",
        link: "/projects/info",
        image: "../images/info.png",
        alt: 'info',
        body: 'Разработка пользовательской и админ части инфографики на JS. Спроектировал и разработал интерактивную инфографику, отображающую данные по регионам с использованием картографического представления. Интегрировал данные из административной панели с фронтендом, обеспечив автоматическое обновление информации и отображение актуальных данных в режиме реального времени. Настроил взаимодействие приложения с серверной частью для управления пользовательскими данными и аутентификации с использованием JWT токенов. Настроил систему цветового кодирования для различных диапазонов, что позволило визуально различать регионы с разной активностью избирателей. Обеспечил адаптивность инфографики, чтобы она корректно отображалась на различных устройствах и экранах, включая мобильные устройства.',
        skills: 'JS, CSS ',
        gitLink: '',
    },

    {
        title: "Верстка сайта",
        link: "/projects/club",
        image: "../images/club.png",
        alt: 'club',
        body: 'Верстка тестового сайта выполнена на чистом HTML, CSS и JavaScript без использования плагинов и фреймворков. Реализована адаптивная верстка с двумя бегущими строками: одна предназначена для десктопных устройств, другая — для мобильных. Также на сайте предусмотрены два независимых слайдера для разных экранов, с разделением функциональности и отдельной пагинацией для каждого из них. Верстка адаптируется под различные размеры экранов, обеспечивая корректное отображение элементов и удобство взаимодействия на всех устройствах.',
        skills: 'HTML, CSS, JS',
        gitLink: 'https://github.com/happykoko1994/yandextest',
    },
    {
        title: "Фото-галерея",
        link: "/projects/galery",
        image: "../images/galery.png",
        alt: 'galery',
        body: 'Фотогалерея - Web сайт с набором случайных изображений. Специальные кнопки позволяют без перезагрузки страницы получить новый набор изображений, добавить или удалить ещё одно изображение, при нажатии на изображение оно показывается в полноэкранном режиме.',
        skills: 'Skills : HTML , CSS, Javascript',
        gitLink: 'https://github.com/happykoko1994/galery',
    },
    {
        title: "Сайт-шаблон",
        link: "/projects/promo",
        image: "../images/promo.png",
        alt: 'promo',
        body: 'Promo будущего сайта, с различными CSS анимациями и приятным визуалом для тренеровки верстки.',
        skills: 'Skills : SCSS, JS',
        gitLink: 'https://github.com/happykoko1994/promoSite',
    },
    {
        title: "Простая форма",
        link: "/projects/form",
        image: "../images/form.png",
        alt: 'form',
        body: 'Простая форма с валидацией полей в модульном окне на нативном JS.',
        skills: 'Skills : SCSS, JS',
        gitLink: 'https://github.com/happykoko1994/unitest/tree/main/practice-1',
    },
    {
        title: "Опросник",
        link: "/projects/questions",
        image: "../images/questions.png",
        alt: 'questions',
        body: 'Приложение опросник, где пользователю предлагается пройти опрос, выбирая варианты ответов и в конце узнать количество правильных ответов. Создано при помощи библиотеки React.',
        skills: 'Skills : CSS, React',
        gitLink: 'https://github.com/happykoko1994/questions',
    },
    {
        title: "Валидация формы",
        link: "/projects/formvalid",
        image: "../images/formvalid.png",
        alt: 'formvalid',
        body: 'Форма входа с полями проходящими валидацию по различным параметрам. Создано при помощи библиотеки React.',
        skills: 'Skills : SCSS, React',
        gitLink: 'https://github.com/happykoko1994/formvalid',
    },
    {
        title: "Список постов",
        link: "/projects/posts",
        image: "../images/posts.png",
        alt: 'posts',
        body: 'Список постов, получаемый с JSONPlaceholder, при помощи axios, с возможностью отсортировать, выполнить поиск и добавить новый пост, также перейти на страницу поста с подробностями. Организована функция login/logout с отображением различных роутов.',
        skills: 'Skills : CSS, React, axios',
        gitLink: 'https://github.com/happykoko1994/postsReact',
    },
    {
        title: "Корзина товаров",
        link: "/projects/basket",
        image: "../images/basket.png",
        alt: 'basket',
        body: 'Приложение Корзина с функциями: добавление и удаления товаров в корзину, поиска по наимениванию товара, а также подсчета стоимости добавленных в корзину товаров. Создана при помощи библиотеки React.',
        skills: 'Skills : CSS, React',
        gitLink: 'https://github.com/happykoko1994/basket',
    },
    {
        title: "Конвертация валюты",
        link: "/projects/convert",
        image: "../images/convert.png",
        alt: 'convert',
        body: '123Приложение для конвертирования валют. Создано с помощью библиотеки React.',
        skills: 'Skills : CSS, React',
        gitLink: 'https://github.com/happykoko1994/convert',
    },
    {
        title: "Портфолио",
        link: "/projects/cv",
        image: "../images/cv.png",
        alt: 'cv',
        body: 'Страница-портфолио, изначально сделанная на нативном JS, затем перенесена на NextJS, с активными ссылками на работы и репозиторий Github.',
        skills: 'HTML/NextJS, SCSS, Javascript',
        gitLink: 'https://github.com/happykoko1994/CVSite',
    },

]
export default projectDetails