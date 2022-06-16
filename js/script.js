import { PROJECTS_DATA } from "./data/index.js";
import  { progressBars } from "./inc/progressBar.js";
import { showProjects } from "./inc/showProjects.js";
import { contactForm } from "./inc/contactForm.js";

// loading portfolio projects to cards
let scrollCounter = true;
window.addEventListener("scroll", () => {
  if (document.body.scrollHeight > 100 && scrollCounter) {
    progressBars("htmlBar", 90);

    progressBars("cssBar", 90);

    progressBars("javascriptBar", 85);

    progressBars("xdBar", 80);

    progressBars("photoshopBar", 80);

    scrollCounter = false;
  }
});
// Show Projects
showProjects(PROJECTS_DATA);
// Validate and Submit Contact Form 
document.getElementById("contactForm").addEventListener("submit", contactForm);
