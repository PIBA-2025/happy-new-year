import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyD1_jce8AKIShD-10OQFHZMgtnPJbjC2pw",
    authDomain: "piba-happy-new-year.firebaseapp.com",
    databaseURL: "https://piba-happy-new-year-default-rtdb.firebaseio.com",
    projectId: "piba-happy-new-year",
    storageBucket: "piba-happy-new-year.firebasestorage.app",
    messagingSenderId: "627238322422",
    appId: "1:627238322422:web:6c25a982ce66f437fdacd7",
    measurementId: "G-148ZJ9K8ZQ"
};

export const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
