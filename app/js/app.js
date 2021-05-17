"use strict";
let d = ["1", "2", "3", "4"]
const swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    autoHeight: false,
    centrededSlides: true,
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 3,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".btn-next",
        prevEl: ".btn-back",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class=${className}>0${d[index]}<span class="swiper-pagination-total">/0${d.length}</span> </span>`
        }
    },
});


const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 30,
    slidesPerView: 4,
    freeMode: true,
    loop: true,
    autoHeight: true,
    centrededSlides: false,
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 4,
            spaceBetween: 30,
        }
    },
    navigation: {
        nextEl: ".btn-next2",
        prevEl: ".btn-back2",
    }
});

const swiper3 = new Swiper(".mySwiper3", {
    slidesPerView: 2.5,
    spaceBetween: 30,
    freeMode: true,
    loop: true,
    navigation: {
        nextEl: ".btn-next3",
        prevEl: ".btn-back3",
    },
    pagination: {
        el: ".swiper-pagination3",
        clickable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        1400: {
            slidesPerView: 2.5,
            spaceBetween: 30,
        }
    },
});

const headerBtn = document.querySelector(".header__btn");
const nav = document.querySelector("nav");
const userMenu = document.querySelector(".header__user-menu");

headerBtn.addEventListener("click", function () {
    nav.classList.toggle("nav-show");
    userMenu.classList.toggle("header__user-menu-show");
    headerBtn.classList.toggle("header__btn--close")

})

const imgContainer = document.querySelector('.imgContainer');
const list = document.querySelector('.facilities__list').querySelectorAll('li');
const progress = document.querySelector('.facilities__progress-list');
const progressList = document.querySelector('.progress__list');
const progressItem = progressList.querySelectorAll(".li")

const arr = Array.from(list);
const arr2 = Array.from(progressItem);
list.forEach((item) => {
    item.addEventListener('click', function (e) {
        const active = document.querySelector('.facilities__list-item--active');
        const activeLi = document.querySelector('.li--active');
        if (active) {
            active.classList.remove("facilities__list-item--active");
            activeLi.classList.remove("li--active");
        }
        e.target.classList.add("facilities__list-item--active");
        imgContainer.src = `./img/${item.id}-facility.jpg`;
        progress.innerText = `0${arr.indexOf(item) + 1}/0${list.length}`;
        arr2[arr.indexOf(e.target)].classList.add("li--active");

    })
})