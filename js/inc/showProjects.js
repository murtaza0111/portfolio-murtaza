export function showProjects(data) {
  const portfolioProjects = document.querySelector("#portfolio .body");

  portfolioProjects.innerHTML = "";
  data.map((v) => {
    portfolioProjects.innerHTML += `
      <div class="card">
      
      <a href="${v.websiteUrl}">
      <div class="card__img">
      
        <img src="${v.image}" alt="project-1" />
        </a>
      </div>
      <div class="card__title">
        <h3>${v.title}</h3>
      </div>
      <div class="card__description">
        <p>${v.description}..</p>
      </div>
      <div class="card__action">
          <a href="${v.websiteUrl}">
            <i class="fas fa-globe"></i> Website
          </a>
          <a href="${v.websiteUrl}">
            <i class="fab fa-github"></i> Github
          </a>
      </div>
      </a>
    </div>
    `;
  });
}
