// Mobile menu toggle
document.getElementById("hamburger").addEventListener("click", function () {
  const mobileMenu = document.getElementById("mobileMenu");
  if (mobileMenu.classList.contains("hidden")) {
    mobileMenu.classList.remove("hidden");
  } else {
    mobileMenu.classList.add("hidden");
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    // Close mobile menu if open
    const mobileMenu = document.getElementById("mobileMenu");
    if (!mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.add("hidden");
    }

    const targetId = this.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Resume download functionality
document
  .getElementById("downloadResumeBtn")
  .addEventListener("click", function () {
    // Create an anchor element
    const link = document.createElement("a");

    // Set link properties
    link.href = "public/resume.pdf";
    link.download = "Niraj_CV.pdf"; // This will be the downloaded file name

    // Append to the document
    document.body.appendChild(link);

    // Trigger the download
    link.click();

    // Clean up
    document.body.removeChild(link);

    // Optional: Track download with analytics
    if (typeof gtag === "function") {
      gtag("event", "download", {
        event_category: "Resume",
        event_label: "Resume PDF",
      });
    }
  });
