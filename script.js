document.getElementById("viewMoreBtn").addEventListener("click", function() {
    // Get all the hidden projects
    const hiddenProjects = document.querySelectorAll(".project.hidden");

    // Show all hidden projects
    hiddenProjects.forEach(project => {
        project.classList.remove("hidden");
    });

    // Rotate the icon to show the "collapse" effect
    const icon = document.getElementById("buttonIcon");
    icon.classList.add("rotate");

    // Change the button text and remove it after a short delay
    const buttonText = document.getElementById("buttonText");
    buttonText.textContent = "Loading...";

    // Simulate a delay before hiding the button
    setTimeout(() => {
        this.style.display = "none";  // Hide the button after the projects are revealed
    }, 500);
});
