import {
  battleship_ssImg,
  dashboard_ssImg,
  profileImg,
  skydomeBackgroundImg,
  snowyBackgroundImg,
  todo_ssImg,
  tt_ssImg,
  weather_ssImg,
} from "./images.js";

import {
  processSVG,
  githubSvg,
  linkedinSvg,
  emailSvg,
  phoneSvg,
  linkSvg,
} from "./icons.js";

let projectList = [];
const testDescription =
  "Lorem ipsum odor amet, consectetuer adipiscing elit. Ligula \
            tristique faucibus nec mattis velit? Ultrices curae pellentesque \
            primis dui enim ut nisi id ipsum.";

projectList.push(
  createProjectCard(
    battleship_ssImg,
    "Battleship",
    "https://github.com/ADDikt88/battleship",
    "https://addikt88.github.io/battleship/",
    testDescription
  )
);

projectList.push(
  createProjectCard(
    todo_ssImg,
    "To-Do List",
    "https://github.com/ADDikt88/todo-list",
    "https://addikt88.github.io/todo-list/",
    testDescription
  )
);

projectList.push(
  createProjectCard(
    dashboard_ssImg,
    "Dashboard",
    "https://github.com/ADDikt88/dashboard",
    "https://addikt88.github.io/dashboard/",
    testDescription
  )
);

projectList.push(
  createProjectCard(
    weather_ssImg,
    "Weather",
    "https://github.com/ADDikt88/weather-app",
    "https://addikt88.github.io/weather-app/",
    testDescription
  )
);

projectList.push(
  createProjectCard(
    tt_ssImg,
    "Tic-Tac-Toe",
    "https://github.com/ADDikt88/tictactoe",
    "https://addikt88.github.io/tictactoe/",
    testDescription
  )
);

projectList.push(
  createProjectCard(
    skydomeBackgroundImg,
    "Baseball Stats",
    "#",
    "#",
    testDescription
  )
);
//projectList.push(projectCard2);

function createProjectCard(screenshot, title, link, livelink, description) {
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

  const projectLink = document.createElement("a");
  if (link !== "#") {
    projectLink.href = link;
    projectLink.target = "_blank";
  }
  projectLink.appendChild(processSVG(githubSvg, "Github Icon", "25px"));
  projectIcons.appendChild(projectLink);

  const projectLiveLink = document.createElement("a");

  if (livelink !== "#") {
    projectLiveLink.href = livelink;
    projectLiveLink.target = "_blank";
  }

  projectLiveLink.appendChild(processSVG(linkSvg, "Link Icon", "25px"));
  projectIcons.appendChild(projectLiveLink);

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
