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
import { projectList } from "./projects.js";

function mainpage() {
  //const header = document.querySelector("header");
  //header.appendChild(skydomeBackgroundImg);
  //   const main = document.querySelector("main");
  //   main.appendChild(githubIcon);

  const aboutMeLeft = document.querySelector(".about-me-left");
  aboutMeLeft.appendChild(profileImg);

  const projectsContainer = document.querySelector(".projects-container");

  projectList.forEach((card) => {
    projectsContainer.appendChild(card);
  });

  const footerRight = document.querySelector(".footer-right");
  footerRight.appendChild(snowyBackgroundImg);
}

export { mainpage };
