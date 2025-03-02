const carousel = document.querySelector('.carousel');
const images = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let index = 0;

function showImage(index) {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

nextButton.addEventListener('click', () => {
    index = (index + 1) % images.length;
    showImage(index);
});

prevButton.addEventListener('click', () => {
    index = (index - 1 + images.length) % images.length;
    showImage(index);
});