const cdDays = document.getElementById('timer__days');
const cdHours = document.getElementById('timer__hours');
const cdMins = document.getElementById('timer__minutes');
const cdSecs = document.getElementById('timer__seconds');

const countdown = () => {
    const countDate = new Date('October 20, 2022 00:00:00').getTime();
    const currDate = new Date().getTime();
    const gap = countDate - currDate;
    // console.log(currDate);

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    //tính ngày 
    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    cdDays.innerText = textDay;
    cdHours.innerText = textHour;
    cdMins.innerText = textMinute;
    cdSecs.innerText = textSecond;

    // if(gap < 10000){

    // }
};

setInterval(countdown, 1000);
function getYear() {
    const spanYear = document.getElementsByClassName('curr-year');
    const currYear = new Date().getFullYear();

    spanYear[0].innerText = currYear;
}
window.addEventListener('DOMContentLoaded', getYear);
//review slider, code như này là đổi breakpoint là toang, 
//phải sửa lại
window.addEventListener('load', function () {
    const slidewrap = document.querySelector('.review__wrapper');
    const sliderItems = document.querySelectorAll('.slider-item');
    const reviewSlider = document.querySelector('.review-slider');
    const prevIcon = document.getElementById('next-btn');
    const nextIcon = document.getElementById('prev-btn');
    const sliderItemWidth = sliderItems[0].offsetWidth;
    let positionX = 0;
    let index = 0;
    // reviewSlider.style.width = `${slidesLength * sliderItemWidth}px`;
    // console.log(sliderItemWidth);
    nextIcon.addEventListener('click', () => {
        nextIcon.classList.toggle('disabled-btn');
        prevIcon.classList.remove('disabled-btn');
        console.log(positionX);
        // console.log(next);
        changeSlideHandler(1);
    });
    prevIcon.addEventListener('click', () => {
        prevIcon.classList.add('disabled-btn');
        nextIcon.classList.remove('disabled-btn');
        changeSlideHandler(-1);
    });
    function changeSlideHandler(direction) {

        if (direction === 1) {
            index++;
            if (index > 1) {
                index = 0;
            };

            positionX = -sliderItemWidth * 4;
            reviewSlider.style = `transform: translateX(${positionX}px`;
            console.log(index);
            console.log('next');
        } else if (direction === -1) {
            console.log('prev');
            index--;
            if (index < 1) {
                index = 1;
            };

            positionX = 0;
            reviewSlider.style = `transform: translateX(${positionX}px`;
            // console.log(index);
            console.log('prev');
        }
    }
});