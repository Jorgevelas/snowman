document.addEventListener('DOMContentLoaded', () => {
    const numFlakes = 100;
    const snowContainer = document.querySelector('.snow');

    for (let i = 0; i < numFlakes; i++) {
        const flake = document.createElement('div');
        flake.classList.add('snowflake');
        flake.style.width = `${Math.random() * 10 + 5}px`;
        flake.style.height = flake.style.width;
        flake.style.left = `${Math.random() * 100}vw`;
        flake.style.animationDuration = `${Math.random() * 5 + 5}s`;
        flake.style.animationDelay = `${Math.random() * 10}s`;
        flake.style.opacity = Math.random() + 0.5;
        snowContainer.appendChild(flake);
    }
});
