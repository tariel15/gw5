const users = [
    { username: "ნიკა", password: "1111" },
    { username: "ტარიელი", password: "2222" },
    { username: "ნატალი", password: "3333"}
];

function login() {
    const u = document.getElementById("username").value;
    const p = document.getElementById("password").value;
    const status = document.getElementById("status");

    const found = users.find(user => user.username === u && user.password === p);

    if (found) {
        status.textContent = "Welcome, " + u + "!";
        resetState();
    } else {
        status.textContent = "Invalid username or password!";
    }
}

const logInBtn = document.getElementById("sub");
const moviesBtn = document.getElementById("signbtn");

function resetState() {
    moviesBtn.style.display = "none";
    moviesBtn.style.display= "block";
}