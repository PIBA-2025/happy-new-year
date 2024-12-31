import { db } from "./firebase-config.js";
import { ref, onValue } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const container = document.getElementById("container");
const logo = document.getElementById("logo");

onValue(ref(db, 'settings'), (snapshot) => {
    const data = snapshot.val();
    if (data) {
        const animation = data.animation;

        container.style.backgroundColor = '';
        container.classList.remove('blink');
        logo.style.display = 'none';

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
        }
    }
});
