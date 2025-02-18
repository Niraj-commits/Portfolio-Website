document.getElementById("downloadResume").addEventListener("click", function () {
    // Create an anchor element
    const a = document.createElement("a");
    a.href = "public/resume.pdf"; // Update the path to your resume file
    a.download = "Resume.pdf"; // Set the filename
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

// open image
document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card"); // Select all project cards
  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const closeModal = document.getElementById("closeModal");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const imageInfo = document.getElementById("imageInfo");

  let images = [];
  let currentIndex = 0;

  // Open modal and show image for any project card
  projectCards.forEach((projectCard) => {
      projectCard.addEventListener("click", function (e) {
          if (e.target.classList.contains("project-image")) {
              images = JSON.parse(projectCard.getAttribute("data-images"));
              currentIndex = images.indexOf(e.target.getAttribute("src"));
              showImage(currentIndex);
              modal.classList.remove("hidden");
          }
      });
  });

  // Function to show image
  function showImage(index) {
      if (index >= 0 && index < images.length) {
          modalImage.src = images[index];
          currentIndex = index;

          // Update image info (name and page number)
          const imageName = images[index].split("/").pop().replace(/\.[^/.]+$/, ""); // Remove file extension
          const pageNumber = currentIndex + 1;
          imageInfo.textContent = `${imageName} - Page ${pageNumber} of ${images.length}`;
      }
  }

  // Next and previous button functionality
  nextBtn.addEventListener("click", function () {
      if (currentIndex < images.length - 1) {
          showImage(currentIndex + 1);
      }
  });

  prevBtn.addEventListener("click", function () {
      if (currentIndex > 0) {
          showImage(currentIndex - 1);
      }
  });

  // Close modal
  closeModal.addEventListener("click", function () {
      modal.classList.add("hidden");
  });

  // Close modal when clicking outside the image
  modal.addEventListener("click", function (e) {
      if (e.target === modal) {
          modal.classList.add("hidden");
      }
  });
});


// No need for window.load since we set onload directly on the image now.

// hide button
  document.addEventListener("DOMContentLoaded", function () {
    const viewMoreBtn = document.getElementById("viewMoreBtn");
    const buttonText = document.getElementById("buttonText");
    const buttonIcon = document.getElementById("buttonIcon");
    const projects = document.querySelectorAll(".project-card");
  
    let expanded = false;
  
    // Hide projects beyond the first three initially
    if (projects.length > 3) {
      projects.forEach((project, index) => {
        if (index >= 3) {
          project.classList.add("hidden");
        }
      });
    } else {
      // If 3 or fewer projects, hide the button
      viewMoreBtn.classList.add("hidden");
    }
  
    viewMoreBtn.addEventListener("click", () => {
      expanded = !expanded;
  
      projects.forEach((project, index) => {
        if (index >= 3) {
          project.classList.toggle("hidden", !expanded);
        }
      });
  
      buttonText.textContent = expanded ? "View Less" : "View More";
      buttonIcon.classList.toggle("bi-arrow-down-circle", !expanded);
      buttonIcon.classList.toggle("bi-arrow-up-circle", expanded);
    });
  });
  
