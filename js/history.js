export function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    document.getElementById("para1").style.display = "block";
    setTimeout(function () {
        document.getElementById("para1").style.display = "none";
        document.getElementById("para2").style.display = "block";
    }, 10000);
    setTimeout(function () {
        document.getElementById("para2").style.display = "none";
        document.getElementById("para3").style.display = "block";
    }, 20000);
    setTimeout(function () {
        window.location.href = "/game.html";
    }, 30000);
}

export function displayStoryPopup(message) {
    const historyDiv = document.getElementById("history");
    if (historyDiv) {
        historyDiv.textContent = message;
        historyDiv.style.display = "block";
        setTimeout(() => {
            historyDiv.style.display = "none";
        }, 8000);
    }
}

if (window.location.pathname !== "/game.html"){
    const start = document.getElementById("start")
    start.addEventListener('click', () => showPopup());
}