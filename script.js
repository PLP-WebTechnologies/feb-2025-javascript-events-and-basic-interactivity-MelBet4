// Event: Button click
const magicBtn = document.getElementById("magicBtn");
const magicText = document.getElementById("magicText");
magicBtn.addEventListener("click", () => {
    magicText.textContent = "You clicked the button!";
    magicText.style.color = "#3b82f6";
});

// Event: Double click (secret)
magicBtn.addEventListener("dblclick", () => {
    alert("You found the secret double-click!");
});

// Image gallery logic
const images = [
    "Photo by Molnár Tamás Photography™ from Pexels: https://www.pexels.com/photo/a-red-panda-is-walking-on-a-log-27269360/",
    "Photo by Magda Ehlers from Pexels: https://www.pexels.com/photo/side-view-of-an-impala-6818922/",
    "Photo by Richard Wilson from Pexels: https://www.pexels.com/photo/a-giraffe-standing-by-a-tree-10822357/"
];
let index = 0;
const galleryImage = document.getElementById("galleryImage");
document.getElementById("nextBtn").onclick = () => {
    index = (index + 1) % images.length;
    galleryImage.src = images[index];
};
document.getElementById("prevBtn").onclick = () => {
    index = (index - 1 + images.length) % images.length;
    galleryImage.src = images[index];
};

// Tabs logic
const tabs = document.querySelectorAll(".tab");
tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        document.querySelector(".tab.active").classList.remove("active");
        tab.classList.add("active");

        document.querySelectorAll(".tab-content").forEach((content) => {
            content.classList.add("hidden");
        });

        document.getElementById("tab" + tab.dataset.tab).classList.remove("hidden");
    });
});

// Keypress detection
document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
});

// Form validation with real-time feedback
const passwordInput = document.getElementById("password");
const feedback = document.getElementById("feedback");

passwordInput.addEventListener("input", () => {
    const value = passwordInput.value;
    if (value.length < 8) {
        feedback.textContent = "Password too short!";
        feedback.style.color = "red";
    } else {
        feedback.textContent = "Password looks good!";
        feedback.style.color = "green";
    }
});

document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = passwordInput.value;

    if (!email.includes("@")) {
        alert("Please enter a valid email.");
    } else if (password.length < 8) {
        alert("Password must be at least 8 characters.");
    } else {
        alert("Form submitted successfully!");
    }
});