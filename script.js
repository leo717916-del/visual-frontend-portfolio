const worksGrid = document.querySelector("#worksGrid");
const projects = window.PORTFOLIO_PROJECTS || [];

worksGrid.innerHTML = projects
  .map(
    (project, index) => `
      <article class="work-card ${project.accent}" style="--delay:${index * 80}ms">
        <div class="work-meta">
          <span>${project.status}</span>
          <small>${project.category}</small>
        </div>
        <h3>${project.title}</h3>
        <h4>${project.subtitle}</h4>
        <p>${project.description}</p>
        <a href="${project.link}" target="_blank" rel="noreferrer">打开作品</a>
      </article>
    `
  )
  .join("");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".work-card, .service-grid article, .workflow li").forEach((element) => {
  observer.observe(element);
});

