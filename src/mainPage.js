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

  const githubLink = document.createElement("a");
  githubLink.href = "https://github.com/ADDikt88";
  githubLink.target = "_blank";
  githubLink.appendChild(processSVG(githubSvg, "Github Icon", "35px"));
  aboutMeIcons.appendChild(githubLink);

  const linkedinLink = document.createElement("a");
  linkedinLink.href = "https://www.linkedin.com/";
  linkedinLink.target = "_blank";
  linkedinLink.appendChild(processSVG(linkedinSvg, "LinkedIn Icon", "35px"));
  aboutMeIcons.appendChild(linkedinLink);

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

  const githubLinkC = document.createElement("a");
  githubLinkC.href = "https://github.com/ADDikt88";
  githubLinkC.target = "_blank";
  githubLinkC.appendChild(processSVG(githubSvg, "Github Icon", "35px"));
  contactIcons.appendChild(githubLinkC);

  const linkedinLinkC = document.createElement("a");
  linkedinLinkC.href = "https://www.linkedin.com/";
  linkedinLinkC.target = "_blank";
  linkedinLinkC.appendChild(processSVG(linkedinSvg, "LinkedIn Icon", "35px"));
  contactIcons.appendChild(linkedinLinkC);

  const footerRight = document.querySelector(".footer-right");
  footerRight.appendChild(snowyBackgroundImg);
}

export { mainpage };
