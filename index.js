const toggleTheme = document.getElementById("tgg-theme");
const toggleIcon = document.getElementById("tgg-icon");
const toggleText = document.getElementById("tgg-text");

    // SWITCH THEME
toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle("dark")
    if (toggleIcon.src.includes('moon.svg')){
        toggleIcon.src="/media/icons/sun.svg"
        toggleText.textContent="Light Mode";
    } else {
        toggleIcon.src="/media/icons/moon.svg";
        toggleText.textContent ="Dark Mode";
    }
});
