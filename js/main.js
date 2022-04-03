
'use strict';

window.addEventListener('DOMContentLoaded', () => {
    const modal = document.querySelector('.modal'),
        effect = document.querySelector('.effect'),
        closeModal = document.querySelector('.modal__link'),
        btn = document.querySelector('.header__sign-in'),
        modalPizza = document.querySelector('.modal-pizza'),
        closePizza = document.querySelector('.modal-pizza__btn'),
        openModal = document.querySelectorAll('.product__block'),
        modalPizzaItem = document.querySelectorAll('.modal-pizza__item'),
        modalMenu = document.querySelector('.modal-menu'),
        openModalMenu = document.querySelector('.header__hamburger'),
        closeModalMenu = document.querySelector('.modal-menu__close');

    function showModalF() {
        modal.classList.add('fade');
        modal.style.display = 'block';
        effect.style.display = 'block';
    }

    function closeModalF() {
        modal.style.display = 'none';
        effect.style.display = 'none';
    }


    btn.addEventListener('click', showModalF);
    closeModal.addEventListener('click', closeModalF);

    openModal.forEach(item => {
        item.addEventListener('click', () => {
            modalPizza.classList.add('fade');
            modalPizza.style.display = 'block';
            effect.style.display = 'block';
        });
    })
    closePizza.addEventListener('click', () => {
        modalPizza.style.display = 'none';
        effect.style.display = 'none';
    });

    modalPizzaItem.forEach(item => {
        item.addEventListener('click', () => {
            item.classList.toggle('active__border');
        });
    });

    openModalMenu.addEventListener('click', () => {
        modalMenu.style.left = '0';
        modalMenu.classList.add('fadeOpen');
        modalMenu.classList.add('overflow');
    });
    closeModalMenu.addEventListener('click', () => {
        modalMenu.style.left = '-100%';
    });


    document.querySelectorAll('.menu__item').forEach(link => {

        link.addEventListener('click', function (e) {
            e.preventDefault();

            let href = this.getAttribute('href').substring(1);

            const scrollTarget = document.getElementById(href);

            const topOffset = document.querySelector('.menu').offsetHeight;
            // const topOffset = 0; // если не нужен отступ сверху 
            const elementPosition = scrollTarget.getBoundingClientRect().top;
            const offsetPosition = elementPosition - topOffset;

            window.scrollBy({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
});