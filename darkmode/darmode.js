const darmode = document.querySelector("#mode-toggle")
darmode.addEventListener("click", switchmode);
function switchmode() {
    document.body.classList.toggle("dark-mode")
    darmode.classList.toggle("dark-mode")

    if (document.body.classList.contains("dark-mode")) {
        darmode.textContent="Toggle Light Mode"

        localStorage.setItem("mode", "dark")
    }else{
        darmode.textContent= "Toggle Dark Mode"
        localStorage.setItem("mode", "light")
    }

}

window.addEventListener("DOMContentLoaded", function () {
    const savemode = localStorage.getItem("mode");
    if (savemode ==="dark") {
        document.body.classList.add("dark-mode")
        darmode.classList.add("dark-mode")
        darmode.textContent= "Toggle Light Mode"
    }else{
        darmode.textContent= "Toggle Dark Mode"
    }
})