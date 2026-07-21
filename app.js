const enterBtn = document.getElementById("enterBtn");

if (enterBtn) {
    enterBtn.addEventListener("click", () => {
        document.body.style.opacity = "0";
        document.body.style.transition = "opacity 0.6s ease";

        setTimeout(() => {
            window.location.href = "dashboard.html";
        }, 600);
    });
}