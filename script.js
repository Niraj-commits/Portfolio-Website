document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const hiddenProjects = document.querySelectorAll(".project.hidden");
    let projectsToShow = 3; // Number of projects to initially show

    // Initially hide projects beyond the first 'projectsToShow'
    for (let i = projectsToShow; i < document.querySelectorAll('.project').length; i++) {
      document.querySelectorAll('.project')[i].classList.add('hidden');
    }

    viewMoreBtn.addEventListener("click", function () {
        let visibleProjects = document.querySelectorAll(".project:not(.hidden)");
        let remainingProjects = document.querySelectorAll(".project.hidden");

        if (remainingProjects.length > 0) {
            let projectsToShowNow = Math.min(3, remainingProjects.length); // Show up to 3 more
            for (let i = 0; i < projectsToShowNow; i++) {
                remainingProjects[i].classList.remove("hidden");
            }

            if (document.querySelectorAll(".project.hidden").length === 0) {
                viewMoreBtn.style.display = "none"; // Hide button if no more projects
            }
        } 
    });
});