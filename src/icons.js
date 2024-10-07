import githubSvg from "./icons/github-original.svg";
import linkedinSvg from "./icons/linkedin-plain.svg";
import emailSvg from "./icons/email-outline.svg";
import phoneSvg from "./icons/phone-outline.svg";
import linkSvg from "./icons/icons8-link.svg";

function processSVG(svgFile, altText, height = 100) {
  const svgIcon = document.createElement("img");
  svgIcon.src = svgFile;
  svgIcon.alt = altText;
  svgIcon.style.height = height;
  svgIcon.style.width = height;
  return svgIcon;
}

export { processSVG, githubSvg, linkedinSvg, emailSvg, phoneSvg, linkSvg };
