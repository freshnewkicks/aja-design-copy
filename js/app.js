const hamburger = document.querySelector('.collapse-nav');


hamburger.addEventListener('click', () => {
    let ulMobile = document.getElementById('ul-mobile');

    if (ulMobile.classList.contains('show')) {
        ulMobile.classList.remove('show');
        ulMobile.classList.add('hidden');
    } else {
        ulMobile.classList.add('show');
        ulMobile.classList.remove('hidden');
    }
});