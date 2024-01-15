function showMenuList () {
    const menuList = document.querySelector(".menu");
    const burgerIcon = document.querySelector(".burgerIcon").firstElementChild;

    burgerIcon.classList.toggle("fa-x");
    burgerIcon.classList.toggle("fa-bars");
    menuList.classList.toggle('show');
}


let isDragging = false;
let startPosition = 0;
let currentTranslate = 0;
let prevTranslate = 0;

const carousels = document.querySelectorAll('.carousel');

carousels.forEach((carousel) => {
    carousel.addEventListener('mousedown', (e) => {
        isDragging = true;
        startPosition = e.clientX - currentTranslate;
    });

    carousel.addEventListener('mousemove', (e) => {
        if (!isDragging) return;

        const newPosition = e.clientX - startPosition;
        currentTranslate = newPosition;
        carousel.style.transform = `translateX(${currentTranslate}px)`;
    });

    carousel.addEventListener('mouseup', () => {
        isDragging = false;

        const cardWidth = carousel.querySelector('.carouselCard').offsetWidth + 10;
        const newPosition = Math.round(currentTranslate / cardWidth) * cardWidth;

        currentTranslate = newPosition;

        setTransform(carousel);
    });

    carousel.addEventListener('mouseleave', () => {
        isDragging = false;
        setTransform(carousel);
    });
});

function setTransform(carousel) {
    carousel.style.transition = 'transform 0.5s ease-in-out';
    carousel.style.transform = `translateX(${currentTranslate}px)`;

    setTimeout(() => {
        carousel.style.transition = 'none';
    }, 500);
}


