function getYear() {
    const spanYear = document.getElementsByClassName('curr-year');
    const currYear = new Date().getFullYear();

    spanYear[0].innerText = currYear;
}

window.addEventListener('DOMContentLoaded', getYear);