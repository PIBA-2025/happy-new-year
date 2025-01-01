import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const container = document.getElementById("container");
const logo = document.getElementById("logo");
const message = document.getElementById("message"); // Novo elemento para mensagem

onValue(ref(db, 'settings'), (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const animation = data.animation;
        const customMessage = data.message;

        container.style.backgroundColor = '';
        container.classList.remove('blink');
        logo.style.display = 'none';
        message.style.display = 'none';
        message.textContent = '';

        if (animation === "blackout") {
            container.style.backgroundColor = "#000";
        } else if (animation === "logo") {
            container.style.backgroundColor = "#000";
            logo.style.display = "flex";
        } else if (animation === "blink") {
            document.documentElement.style.setProperty('--color1', data.color1 || 'black');
            document.documentElement.style.setProperty('--color2', data.color2 || 'black');
            document.documentElement.style.setProperty('--blink-time', (data.blinkTime || 1) + 's');
            container.classList.add('blink');

            if (customMessage) {
                message.textContent = customMessage;
                message.style.display = 'flex';
                message.style.color = data.textColor || 'white';
            }
        }
    }
});
