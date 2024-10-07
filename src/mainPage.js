import {
  profileImg,
  skydomeBackgroundImg,
  snowyBackgroundImg,
} from "./images.js";
import {
  processSVG,
  githubSvg,
  linkedinSvg,
  emailSvg,
  phoneSvg,
  linkSvg,
} from "./icons.js";
import { projectList } from "./projects.js";

function mainpage() {
  const aboutMeIcons = document.querySelector(".about-me-icons");
  aboutMeIcons.appendChild(processSVG(githubSvg, "Github Icon", "35px"));
  aboutMeIcons.appendChild(processSVG(linkedinSvg, "LinkedIn Icon", "35px"));

  const aboutMeLeft = document.querySelector(".about-me-left");
  aboutMeLeft.appendChild(profileImg);

  const projectsContainer = document.querySelector(".projects-container");

  projectList.forEach((card) => {
    projectsContainer.appendChild(card);
  });

  const phoneContainer = document.querySelector(".phone-container");
  phoneContainer.appendChild(
    aboutMeIcons.appendChild(processSVG(phoneSvg, "Phone Icon", "20px"))
  );
  const phoneNumber = document.createElement("p");
  phoneNumber.textContent = "314-159-2653";
  phoneContainer.appendChild(phoneNumber);

  const emailContainer = document.querySelector(".email-container");
  emailContainer.appendChild(
    aboutMeIcons.appendChild(processSVG(emailSvg, "Email Icon", "20px"))
  );
  const emailAddress = document.createElement("p");
  emailAddress.textContent = "addikt8.is.masters@gmail.com";
  emailContainer.appendChild(emailAddress);

  const contactIcons = document.querySelector(".contact-me-icons");
  contactIcons.appendChild(processSVG(githubSvg, "Github Icon", "35px"));
  contactIcons.appendChild(processSVG(linkedinSvg, "LinkedIn Icon", "35px"));

  const footerRight = document.querySelector(".footer-right");
  footerRight.appendChild(snowyBackgroundImg);
}

export { mainpage };
