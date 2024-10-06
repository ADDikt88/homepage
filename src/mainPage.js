import { profileImg, skydomeBackgroundImg } from "./images.js";
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
}
export { mainpage };
