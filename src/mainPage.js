import {
  profileImg,
  skydomeBackgroundImg,
  snowyBackgroundImg,
} from "./images.js";
import {
  githubIcon,
  //   linkedinIcon,
  //   emailIcon,
  //   phoneIcon,
  //   linkIcon,
} from "./icons.js";

function mainpage() {
  //const header = document.querySelector("header");
  //header.appendChild(skydomeBackgroundImg);
  //   const main = document.querySelector("main");
  //   main.appendChild(githubIcon);

  const aboutMeLeft = document.querySelector(".about-me-left");
  aboutMeLeft.appendChild(profileImg);

  const projectsContainer = document.querySelector(".projects-container");
  const projectCard = createProjectCard(
    createProject(snowyBackgroundImg, "title", "link", "description test")
  );
  projectsContainer.appendChild(projectCard);

  const footerRight = document.querySelector(".footer-right");
  footerRight.appendChild(snowyBackgroundImg);
}

function createProject(screenshot, title, link, description) {
  return { screenshot, title, link, description };
}

function createProjectCard(project) {
  const projectCard = document.createElement("div");
  projectCard.classList = "project-card";

  const screenshotContainer = document.createElement("div");
  screenshotContainer.classList = "screenshot-container";
  screenshotContainer.appendChild(snowyBackgroundImg);

  const projectInfo = document.createElement("div");
  projectInfo.classList = "project-info";

  const projectTitleBar = document.createElement("div");
  projectTitleBar.classList = "project-title-bar";
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = project.title;

  const projectIcons = document.createElement("div");
  projectIcons.classList = "project-icons";
  projectIcons.textContent = "project-icons";

  projectTitleBar.appendChild(projectTitle);
  projectTitleBar.appendChild(projectIcons);

  const projectDescription = document.createElement("p");
  projectDescription.classList = "project-description";
  projectDescription.textContent = project.description;

  projectInfo.appendChild(projectTitleBar);
  projectInfo.appendChild(projectDescription);

  projectCard.appendChild(screenshotContainer);
  projectCard.appendChild(projectInfo);

  return projectCard;
}
export { mainpage };
