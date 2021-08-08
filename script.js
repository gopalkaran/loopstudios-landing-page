const checkBox = document.querySelector('#nav-checkbox');
checkBox.addEventListener('click', () => {
    const navBar = checkBox.parentElement;
    const Header = navBar.parentElement;
    Header.classList.toggle('dark');
    const boxHeading = Header.children;
    boxHeading[1].classList.toggle('hide');
})