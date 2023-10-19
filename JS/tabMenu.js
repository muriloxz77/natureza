export function menuMobileInit() {
    const menu = document.querySelector('.menu');
    const menuList = document.querySelector('.js-list');

    if (menu && menuList) {
        function toggleMenu() {
            menuList.classList.toggle('active');
            const menuIcon = menu.querySelector('span');
            menuIcon.classList.toggle('active');
            menuIcon.innerText = menuIcon.innerText === 'menu' ? 'close' : 'menu';
        }

        menu.addEventListener('click', toggleMenu);
    }
}