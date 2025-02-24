const projects = [
    {
        title: "Сайт-визитка страхового агента",
        link: "/projects/insurance",
        image: "../images/basova.png",
        alt: "insurance",
        description: "Одностраничный сайт на Next.js, разработанный для страхового агента. Левая часть включает контактную информацию, адрес и встроенную карту Яндекс. Правая часть содержит форму для подачи заявки на страховой полис, данные из которой отправляются на сервер, шифруются с помощью bcrypt и сохраняются в MongoDB. Расшифрованные данные отправляются на почту страхователя как оповещение о новой заявке. Встроен личный кабинет для просмотра заявок, защищённый от брутфорса. Также была проведена работа по SEO-оптимизации для поисковых систем.",

        skills: "Next.js, Tailwind CSS, CSS, MongoDB, bcrypt, Yandex Maps API",
        gitLink: ""
    },
    {
        title: "Многопользовательская игра 100 к 1",
        link: "/projects/100to1",
        image: "../images/100.png",
        alt: "100to1",
        description: "Онлайн-игра на React с сервером на Node.js и Express, взаимодействие между игроками реализовано через WebSockets (socket.io). Игроки вводят свой ник, и если данные уже есть в локальном хранилище, они автоматически подтягиваются. Игровой экран состоит из трёх зон: список игроков с их баллами, секция вопросов и ответов (отгаданных и нет), обновляемая в реальном времени, а также окно чата-логов, отображающее успешные и неудачные попытки игроков. Встроена админ-панель для управления игрой: смена вопросов, запуск новой игры и другие функции.",
        skills: "React, Node.js, Express, Socket.io, WebSockets, LocalStorage",
        gitLink: ""
    },
    {
        title: "Онлайн магазин",
        link: "/projects/shop",
        image: "../images/shop.png",
        alt: "shop",
        description: "Сайт онлайн магазина на ReactJS, с возможностью регистрации новых пользователей, выбора категорий товаров и их сортировки, постраничный вывод товаров, а также карточками отдельных товаров. Реализована админ панель для добавления новых брендов, типов и девайсов. Был настроен локальный сервер PostgresQL для хранения данных и обмена ими с сайтом.",
        skills: "React(router, bootstrap), axios, Mobx",
        gitLink: "https://github.com/happykoko1994/shop"
    },

    {
        title: "Инфографика",
        link: "/projects/info",
        image: ["../images/info2.png", "../images/info1.png"],
        alt: "info",
        description: "Разработка пользовательской и админ части инфографики на JS. Спроектировал и разработал интерактивную инфографику, отображающую данные по регионам с использованием картографического представления. Интегрировал данные из административной панели с фронтендом, обеспечив автоматическое обновление информации и отображение актуальных данных в режиме реального времени. Настроил взаимодействие приложения с серверной частью для управления пользовательскими данными и аутентификации с использованием JWT токенов. Настроил систему цветового кодирования для различных диапазонов, что позволило визуально различать регионы с разной активностью избирателей. Обеспечил адаптивность инфографики, чтобы она корректно отображалась на различных устройствах и экранах, включая мобильные устройства.",
        skills: "JS, CSS",
        gitLink: ""
    }
    ,
    {
        title: "Верстка сайта",
        link: "/projects/club",
        image: "../images/club.png",
        alt: "club",
        body: "Верстка сайта",
        description: "Верстка тестового сайта выполнена на чистом HTML, CSS и JavaScript без использования плагинов и фреймворков. Реализована адаптивная верстка с двумя бегущими строками: одна предназначена для десктопных устройств, другая — для мобильных. Также на сайте предусмотрены два независимых слайдера для разных экранов, с разделением функциональности и отдельной пагинацией для каждого из них. Верстка адаптируется под различные размеры экранов, обеспечивая корректное отображение элементов и удобство взаимодействия на всех устройствах.",
        skills: "HTML, CSS, JS",
        gitLink: "https://github.com/happykoko1994/yandextest"
    }
    ,
    {
        title: "Фото-галерея",
        link: "/projects/galery",
        image: "../images/galery.png",
        alt: "galery",
        description: "Фотогалерея - Web сайт с набором случайных изображений. Специальные кнопки позволяют без перезагрузки страницы получить новый набор изображений, добавить или удалить ещё одно изображение, при нажатии на изображение оно показывается в полноэкранном режиме.",
        skills: "HTML, CSS, Javascript",
        gitLink: "https://github.com/happykoko1994/galery"
    }

]
export default projects