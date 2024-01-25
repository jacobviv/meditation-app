function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeBackgroundColor() {
    const container = document.querySelector('.container');
    const newColor = getRandomColor();
    container.style.backgroundColor = newColor;
}

setInterval(changeBackgroundColor, 3000);

changeBackgroundColor();
