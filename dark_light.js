// Query the mode button and replaces light or dark depending on the status in the HTML tag
window.addEventListener("DOMContentLoaded", (event) => {
    let toggleBtn= document.querySelectorAll('.mode-toggle');
    for (let btn of toggleBtn) {
        btn.addEventListener('click', toggle);
    }

    function toggle() {
        if (document.documentElement.getAttribute('data-bs-theme') === 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light');
            document.querySelector('.main-img').src = 'img/monstera_plant_light.png';
            document.querySelector('.watering-can-img').src = 'img/watering-can_light.png';
            document.querySelector('.shovel-img').src = 'img/shovel_light.png';
        } else {
            document.documentElement.setAttribute('data-bs-theme','dark');
            document.querySelector('.main-img').src = 'img/monstera_plant_dark.png';
            document.querySelector('.watering-can-img').src = 'img/watering-can_dark.png';
            document.querySelector('.shovel-img').src = 'img/shovel_dark.png';
        }
    }
});