export default function CustomJs() {
    const hamburger = document.querySelector(".hamburger");
    const navList = document.querySelector(".nav-list");
    const bars = document.querySelector(".line");

    hamburger.addEventListener("click", () => {
        navList.classList.toggle("active");
        hamburger.classList.toggle("active");
        bars.classList.toggle("active");
    });

    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            bars.classList.remove("active");
            navList.classList.remove("active");
        });
    });

    // ///////////////////////////////////// scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);

            if (entry.isIntersecting) {
                entry.target.classList.add("end-flow");
            } else {
                entry.target.classList.remove("end-flow");
            }
        });
    });

    const flowIntoView = document.querySelectorAll(".start-flow, .animation-from-left, .animation-from-down");
    flowIntoView.forEach((element => observer.observe(element)))


    // ///////////////////////////////// Loader fade out
    window.addEventListener("load", () => {
        const pageLoader = document.querySelector(".page-loader");
        pageLoader.classList.add("loader--hidden");


        // pageLoader.addEventListener("transitionend", () => {
        //     // document.body.removeChild(pageLoader);
        //     document.querySelector(".app").removeChild(pageLoader);
        // });
    });


    ////////////////////////////////horizontal scrolling

    const grid = document.querySelector('.grid');
    const scrollLeftButton = document.getElementById('scrollLeftButton');
    const scrollRightButton = document.getElementById('scrollRightButton');

    scrollLeftButton.addEventListener('click', () => {
        grid.scroll({
            left: grid.scrollLeft - grid.offsetWidth,
            behavior: 'smooth'
        });
    });

    scrollRightButton.addEventListener('click', () => {
        grid.scroll({
            left: grid.scrollLeft + grid.offsetWidth,
            behavior: 'smooth'
        });
    });


    // theme
    // const themeButton = document.getElementById('themeButton');
    // const root = document.documentElement;
    // let isLightTheme = false;

    // themeButton.addEventListener('click', () => {
    //     isLightTheme = !isLightTheme;

    //     if (isLightTheme) {
    //         root.classList.add('light-theme');
    //     } else {
    //         root.classList.remove('light-theme');
    //     }
    // });
}