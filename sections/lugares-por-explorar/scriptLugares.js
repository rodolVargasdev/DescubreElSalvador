const circles = document.querySelectorAll('.circle');

circles.forEach(circle => {
    const image = circle.querySelector('img');
    const overlay = circle.querySelector('.overlay');

    circle.addEventListener('mouseenter', () => {
        image.style.transform = 'scale(1.1)';
        image.style.filter = 'grayscale(100%)';
        overlay.style.display = 'block';
    });

    circle.addEventListener('mouseleave', () => {
        image.style.transform = 'scale(1)';
        image.style.filter = 'grayscale(0)';
        overlay.style.display = 'none';
    });
});

const navbar = document.getElementById('navbar');

navbar.addEventListener('mouseenter', () => {
    navbar.style.backgroundColor = '#739739';
});

navbar.addEventListener('mouseleave', () => {
    navbar.style.backgroundColor = 'transparent';
});
