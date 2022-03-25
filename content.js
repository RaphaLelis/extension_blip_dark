const interval = setInterval(() => {
    const header = document.querySelector(".move-bots-button-container")
    if (header) {
        clearInterval(interval)

        const button = document.createElement("button")
        button.innerHTML = "Dark Mode"
        button.classList.add("blipDarkMode")

        button.addEventListener("click", () => {
            const pag = document.querySelector(".flex flex-column w-100")
            pag.classList.add("darkmode")
        })
        header.appendChild(button)
    }
}, 200)