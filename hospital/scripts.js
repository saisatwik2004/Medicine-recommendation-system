// JavaScript to handle navigation and image switching
document.getElementById("medicine-link").addEventListener("click", function(event) {
    event.preventDefault();
    showSection("medicine");
});

document.getElementById("precautions-link").addEventListener("click", function(event) {
    event.preventDefault();
    showSection("precautions");
});

document.getElementById("workouts-link").addEventListener("click", function(event) {
    event.preventDefault();
    showSection("workouts");
});

document.getElementById("diet-link").addEventListener("click", function(event) {
    event.preventDefault();
    showSection("diet");
});

function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll("main section");
    sections.forEach(function(section) {
        section.style.display = "none";
    });

    // Show the selected section
    document.getElementById(sectionId).style.display = "block";
}
