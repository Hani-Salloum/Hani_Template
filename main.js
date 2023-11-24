let nums = document.querySelectorAll(".stats .number");
let section = document.getElementById("stats");
let ok = false;

window.addEventListener("scroll", function () {
    if (window.scrollY >= section.offsetTop - 300) {
        if (!ok) nums.forEach((num) => increase(num));
        ok = true;
    }
})

function increase(el) {
    let goal = el.getAttribute("data-goal");
    console.log(goal);
    el.textContent = '0';
    let count = setInterval(() => {
        el.textContent++;
        if (el.textContent === goal) {
            clearInterval(count);
        }
    }, 2000 / goal);
}

/////////////////////////////////////////////////////

let element = document.querySelector(".scroller");
let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener("scroll", () => {
    let scrollTop = document.documentElement.scrollTop;
    element.style.width = `${(scrollTop / height) * 100}%`
})

////////////////////////////////////////////////////////

let skillsSection = document.querySelector(".our-skills");
let spans = document.querySelectorAll(".our-skills .prog-holder span");

window.addEventListener("scroll", function () {
    if (window.scrollY >= skillsSection.offsetTop - 300) {
        spans.forEach((span) => {
            span.style.width = span.dataset.width;
        })
    }
});

///////////////////////////////////////////////////////////

// let days = document.querySelector(".events .info .days");
// let hours = document.querySelector(".events .info .hours");
// let mins = document.querySelector(".events .info .mins");
// let seconds = document.querySelector(".events .info .seconds");

let dateGoal = new Date("Jan 26, 2024 23:59:59").getTime();

let counter = setInterval(function () {
    let dateNow = new Date().getTime();
    let dateDif = dateGoal - dateNow;

    if(dateDif <= 0) {
        clearInterval(counter);
    }

    let days = (Math.floor(dateDif / (1000 * 60 * 60 * 24)) > 0) ? Math.floor(dateDif / (1000 * 60 * 60 * 24)) : 0;
    let hours = (Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) > 0) ? Math.floor((dateDif % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) : 0;
    let mins = (Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60)) > 0) ? Math.floor((dateDif % (1000 * 60 * 60)) / (1000 * 60)) : 0;
    let seconds = (Math.floor((dateDif % (1000 * 60)) / (1000)) > 0) ? Math.floor((dateDif % (1000 * 60)) / (1000)) : 0;

    document.querySelector(".events .info .days").innerHTML = days < 10 ? `0${days}` : days;
    document.querySelector(".events .info .hours").innerHTML = hours < 10 ? `0${hours}` : hours;
    document.querySelector(".events .info .mins").innerHTML = mins < 10 ? `0${mins}` : mins;
    document.querySelector(".events .info .seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);


/////////////////////////////////////////////////////////////////////

let btn = document.querySelector(".go-up");

window.addEventListener("scroll", function () {
    if(this.scrollY >= 1000) {
        btn.classList.add("show");
    } else {
        btn.classList.remove("show");
    }
});

btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
    });
});