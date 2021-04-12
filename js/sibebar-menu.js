(function () {
    const openingBtn = document.querySelector('.sibebar__hamburger');
    const closingBtn = document.querySelector('.sidebar__close');
    const sibebar = document.querySelector('.sidebar');

    openingBtn.addEventListener('click', function () {
        sibebar.classList.add('sidebar--opened');
    });

    closingBtn.addEventListener('click', function () {
        sibebar.classList.remove('sidebar--opened');
    });
}());

