import {
  profileImg,
  skydomeBackgroundImg,
  snowyBackgroundImg,
} from "./images.js";

let projectList = [];

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Snowy Project",
    "test",
    "This is a test description"
  )
);
//projectList.push(projectCard2);

function createProjectCard(screenshot, title, link, description) {
  const projectCard = document.createElement("div");
  projectCard.classList = "project-card";

  const screenshotContainer = document.createElement("div");
  screenshotContainer.classList = "screenshot-container";
  screenshotContainer.appendChild(screenshot);

  const projectInfo = document.createElement("div");
  projectInfo.classList = "project-info";

  const projectTitleBar = document.createElement("div");
  projectTitleBar.classList = "project-title-bar";
  const projectTitle = document.createElement("h2");
  projectTitle.textContent = title;

  const projectIcons = document.createElement("div");
  projectIcons.classList = "project-icons";
  projectIcons.textContent = "project-icons";

  projectTitleBar.appendChild(projectTitle);
  projectTitleBar.appendChild(projectIcons);

  const projectDescription = document.createElement("p");
  projectDescription.classList = "project-description";
  projectDescription.textContent = description;

  projectInfo.appendChild(projectTitleBar);
  projectInfo.appendChild(projectDescription);

  projectCard.appendChild(screenshotContainer);
  projectCard.appendChild(projectInfo);

  return projectCard;
}

export { projectList };
