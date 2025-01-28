
function updateCountdown() {
    const tet2025 = new Date('January 29, 2025 00:30:00').getTime();
    const now = new Date().getTime();
    const timeLeft = tet2025 - now;
    
    if (timeLeft <= 0) {
        document.getElementById('countdown').innerHTML = "Chúc mừng năm mới 2025!";
        setTimeout(() => {
            window.location.href = "../3rd/newpage.html"; 
        }, 2000); 
        return;
    }
    
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    
    document.getElementById('hours').innerText = `${hours} giờ`;
    document.getElementById('minutes').innerText = `${minutes} phút`;
    document.getElementById('seconds').innerText = `${seconds} giây`;
}

setInterval(updateCountdown, 1000);
updateCountdown();

