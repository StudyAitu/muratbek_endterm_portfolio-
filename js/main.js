"use strict";

// Project-related data is stored in arrays and rendered dynamically.
const projects = [
    {
        id: 1,
        title: "Library Management System",
        category: "python",
        tags: ["Python", "OOP"],
        image: "images/project-library.svg",
        alt: "Library management system preview",
        description: "A practice project focused on managing books, users and basic library operations with clean Python structures.",
        details: ["Object-oriented design", "Data validation", "Readable command-line workflow"]
    },
    {
        id: 2,
        title: "Algorithm & Data Structure Benchmark",
        category: "java",
        tags: ["Java", "DSA", "Benchmarking"],
        image: "images/project-algorithms.svg",
        alt: "Algorithm benchmark chart preview",
        description: "A comparative study of common data structures and operations using controlled workloads and measurements.",
        details: ["Dynamic array vs linked list", "Heap operations", "Complexity analysis"]
    },
    {
        id: 3,
        title: "Java Coursework Collection",
        category: "java",
        tags: ["Java", "OOP"],
        image: "images/project-java.svg",
        alt: "Java coursework illustration",
        description: "Small exercises and implementations used to strengthen object-oriented programming and problem-solving skills.",
        details: ["Classes and objects", "Collections and algorithms", "Debugging in IntelliJ IDEA"]
    },
    {
        id: 4,
        title: "Developer Portfolio",
        category: "web",
        tags: ["HTML", "CSS", "Bootstrap", "JavaScript"],
        image: "images/skills-chart.svg",
        alt: "Skills chart",
        description: "A six-page responsive website extended with interactive JavaScript and jQuery features.",
        details: ["Bootstrap grid and utilities", "DOM manipulation", "Responsive breakpoints"]
    }
];

const skills = [
    { name: "Java", value: 80, category: "programming", purpose: "OOP, coursework and algorithms" },
    { name: "Python", value: 82, category: "programming", purpose: "Projects, automation and problem solving" },
    { name: "HTML / CSS", value: 78, category: "web", purpose: "Semantic structure and responsive UI" },
    { name: "Bootstrap", value: 75, category: "web", purpose: "Responsive grid and UI components" },
    { name: "Git / GitHub", value: 70, category: "tools", purpose: "Version control and deployment" },
    { name: "IntelliJ IDEA", value: 75, category: "tools", purpose: "Java development and debugging" }
];

let favorites = JSON.parse(localStorage.getItem("portfolioFavorites") || "[]");
let favoritesOnly = false;

function createProjectCard(project) {
    const tags = project.tags
        .map(tag => `<span class="tag">${tag}</span>`)
        .join("");

    const details = project.details
        .map(detail => `<li>${detail}</li>`)
        .join("");

    const saved = favorites.includes(project.id);

    return `
        <div class="col-lg-6 project-item">
            <article class="card-soft hoverable p-3 h-100">
                <img src="${project.image}" class="project-img" alt="${project.alt}">
                <div class="p-3">
                    <div>${tags}</div>
                    <h2 class="h4 mt-2">${project.title}</h2>
                    <p class="text-secondary">${project.description}</p>
                    <ul>${details}</ul>
                    <button class="favorite-btn ${saved ? "is-favorite" : ""}"
                        data-favorite="${project.id}"
                        aria-pressed="${saved}">
                        ${saved ? "★ Saved" : "☆ Add to favorites"}
                    </button>
                </div>
            </article>
        </div>`;
}

// A for...of loop counts the project categories currently visible on the page.
function getProjectCategorySummary(projectList) {
    const categoryCounts = {};

    for (const project of projectList) {
        categoryCounts[project.category] =
            (categoryCounts[project.category] || 0) + 1;
    }

    const summary = Object.entries(categoryCounts)
        .map(([category, total]) => `${category}: ${total}`)
        .join(" · ");

    return summary;
}

function renderProjects(list = projects) {
    const grid = document.querySelector("#projectGrid");

    if (!grid) return;

    grid.innerHTML = list.map(createProjectCard).join("");

    const count = document.querySelector("#projectCount");

    if (count) {
        const categorySummary = getProjectCategorySummary(list);

        count.textContent = categorySummary
            ? `Showing ${list.length} of ${projects.length} projects · ${categorySummary}`
            : `Showing ${list.length} of ${projects.length} projects`;
    }

    const empty = document.querySelector("#emptyProjects");

    if (empty) {
        empty.hidden = list.length !== 0;
    }
}

function filterProjects() {
    const query = (
        document.querySelector("#projectSearch")?.value || ""
    ).trim().toLowerCase();

    const category =
        document.querySelector("#categoryFilter")?.value || "all";

    let filtered = projects.filter(project => {
        const searchable = `
            ${project.title}
            ${project.description}
            ${project.tags.join(" ")}
        `.toLowerCase();

        return searchable.includes(query) &&
            (category === "all" || project.category === category);
    });

    if (favoritesOnly) {
        filtered = filtered.filter(project =>
            favorites.includes(project.id)
        );
    }

    renderProjects(filtered);
}

function saveFavorites() {
    localStorage.setItem(
        "portfolioFavorites",
        JSON.stringify(favorites)
    );
}

function toggleFavorite(projectId) {
    favorites = favorites.includes(projectId)
        ? favorites.filter(id => id !== projectId)
        : [...favorites, projectId];

    saveFavorites();
    filterProjects();
}

function renderSkillBars() {
    const list = document.querySelector("#skillsList");

    if (!list) return;

    list.innerHTML = skills.slice(0, 4).map(skill => `
        <div class="mt-4">
            <div class="d-flex justify-content-between">
                <strong>${skill.name}</strong>
                <span>${skill.value}%</span>
            </div>
            <div class="skill-bar mt-2"
                role="progressbar"
                aria-valuenow="${skill.value}"
                aria-valuemin="0"
                aria-valuemax="100">
                <span style="width:${skill.value}%"></span>
            </div>
        </div>
    `).join("");
}

function renderSkillDetails(category = "all") {
    const container = document.querySelector("#skillDetails");

    if (!container) return;

    const visibleSkills = skills.filter(skill =>
        category === "all" || skill.category === category
    );

    container.innerHTML = visibleSkills.map(skill => `
        <div class="col-md-6 col-lg-4">
            <article class="feature-panel h-100">
                <h3 class="h5">${skill.name}</h3>
                <p class="text-secondary mb-2">${skill.purpose}</p>
                <span class="tag">${skill.category}</span>
            </article>
        </div>
    `).join("");
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function setFieldError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const error = document.getElementById(`${fieldId}Error`);

    if (!field || !error) return;

    field.classList.toggle("is-invalid", Boolean(message));
    error.textContent = message;
}

function validateContactForm() {
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const topic = document.querySelector("#topic").value;
    const message = document.querySelector("#message").value.trim();
    const consent = document.querySelector("#consent").checked;

    const errors = {
        name: name.length < 2
            ? "Enter a name with at least 2 characters."
            : "",

        email: !validateEmail(email)
            ? "Enter a valid email address."
            : "",

        topic: !topic
            ? "Please choose a topic."
            : "",

        message: message.length < 10
            ? "Message must contain at least 10 characters."
            : "",

        consent: !consent
            ? "Please confirm the demo form notice."
            : ""
    };

    Object.entries(errors).forEach(([field, error]) => {
        setFieldError(field, error);
    });

    return Object.values(errors).every(error => error === "");
}

function showFormSuccess() {
    const status = document.querySelector("#formStatus");

    status.innerHTML = `
        <div class="success-box">
            Thank you! Your message passed validation.
            This demo does not send data to a server.
        </div>
    `;
}

function setTheme(theme) {
    document.documentElement.dataset.theme = theme;

    localStorage.setItem("portfolioTheme", theme);

    const button = document.querySelector("#themeToggle");

    if (button) {
        button.textContent = theme === "dark"
            ? "☀ Light"
            : "◐ Theme";
    }
}

function initializeTheme() {
    const savedTheme =
        localStorage.getItem("portfolioTheme") || "light";

    setTheme(savedTheme);
}

function initializePortfolio() {
    document.querySelectorAll("[data-year]").forEach(element => {
        element.textContent = new Date().getFullYear();
    });

    initializeTheme();
    renderProjects();
    renderSkillBars();
    renderSkillDetails();

    document.querySelector("#projectSearch")
        ?.addEventListener("input", filterProjects);

    document.querySelector("#categoryFilter")
        ?.addEventListener("change", filterProjects);

    document.querySelector("#projectGrid")
        ?.addEventListener("click", event => {
            const button = event.target.closest("[data-favorite]");

            if (button) {
                toggleFavorite(Number(button.dataset.favorite));
            }
        });

    document.querySelector("#showFavorites")
        ?.addEventListener("click", () => {
            favoritesOnly = true;
            filterProjects();
        });

    document.querySelector("#showAllProjects")
        ?.addEventListener("click", () => {
            favoritesOnly = false;
            filterProjects();
        });

    document.querySelector("#themeToggle")
        ?.addEventListener("click", () => {
            setTheme(
                document.documentElement.dataset.theme === "dark"
                    ? "light"
                    : "dark"
            );
        });

    document.querySelectorAll(".skill-tab").forEach(button => {
        button.addEventListener("click", () => {
            renderSkillDetails(button.dataset.category);

            document.querySelectorAll(".skill-tab").forEach(tab => {
                tab.classList.remove("active");
            });

            button.classList.add("active");
        });
    });

    document.querySelector("#contactForm")
        ?.addEventListener("submit", event => {
            event.preventDefault();

            document.querySelector("#formStatus").textContent = "";

            if (validateContactForm()) {
                showFormSuccess();
            }
        });

    document.querySelector("#contactForm")
        ?.addEventListener("reset", () => {
            setTimeout(() => {
                ["name", "email", "topic", "message", "consent"]
                    .forEach(id => setFieldError(id, ""));

                document.querySelector("#formStatus").textContent = "";
            }, 0);
        });

    // jQuery selectors, traversal, events and effects.
    if (window.jQuery) {
        $(".feature-panel")
            .on("mouseenter", function () {
                $(this).find("h2, h3")
                    .first()
                    .css("color", "var(--brand)");
            })
            .on("mouseleave", function () {
                $(this).find("h2, h3")
                    .first()
                    .css("color", "");
            });

        $("#workflowToggle").on("click", function () {
            const willOpen =
                !$("#workflowDetails").is(":visible");

            $("#workflowDetails")
                .stop(true, true)
                .slideToggle(180);

            $(this)
                .attr("aria-expanded", String(willOpen))
                .text(willOpen ? "Hide workflow" : "Show workflow");

            $(this)
                .closest(".feature-panel")
                .toggleClass("border-primary", willOpen);
        });

        $(".site-footer a").on("click", function () {
            $(this).parent()
                .fadeTo(120, 0.65)
                .fadeTo(120, 1);
        });
    }
}

document.addEventListener("DOMContentLoaded", initializePortfolio);