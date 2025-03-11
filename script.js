document.addEventListener('DOMContentLoaded', function() {
    VANTA.CLOUDS({
        el: "body",           
        mouseControls: true,  
        touchControls: true,  
        gyroControls: false,  
        minHeight: 200.00,    
        minWidth: 200.00,     
        skyColor: 0x6cbcdc,   
        cloudShadowColor: 0x1c3c59,  
        sunColor: 0xff9a1c,   
        sunGlareColor: 0xff6937,  
        sunlightColor: 0xff9832,  
        speed: 2.00         
    });


const greetingElement = document.querySelector('.greeting-text');
if (greetingElement) {
    function updateGreeting() {
        const hour = new Date().getHours();
        let greetingText = '';

        if (hour < 12) {
            greetingText = "Good morning!";
        } else if (hour < 18) {
            greetingText = "Good afternoon!";
        } else {
            greetingText = "Good evening!";
        }
        greetingElement.textContent = `${greetingText} It is nice to see you!`;
    }

    updateGreeting();
    setInterval(updateGreeting, 500000);
}

const recommendationsButton = document.getElementById('recommendationsButton');
    if (recommendationsButton) {
        recommendationsButton.addEventListener('click', function() {
            window.location.href = 'reccomendations.html';
        });
    }

    const homeButton = document.getElementById('homeButton');
    if (homeButton) {
        homeButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
});
