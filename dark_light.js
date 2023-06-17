//JS welches den Darkmode-Button abfragt und je nach Status im HTML-Tag light oder dark ersetzt
window.addEventListener("DOMContentLoaded", (event) => {
    let btn= document.getElementById('modeToggle');

    btn.addEventListener('click', toggle);

    function toggle() {
        console.log('Button clicked!');
        if (document.documentElement.getAttribute('data-bs-theme') == 'dark') {
            document.documentElement.setAttribute('data-bs-theme','light')
        }
        else {
            document.documentElement.setAttribute('data-bs-theme','dark')
        }
    }
});