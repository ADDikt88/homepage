import githubSvg from "./icons/github-original.svg";
import linkedinSvg from "./icons/linkedin-plain.svg";
import emailSvg from "./icons/email-outline.svg";
import phoneSvg from "./icons/phone-outline.svg";
import linkSvg from "./icons/icons8-link.svg";

function processSVG(svgFile, height = 100) {
  const svgIcon = document.createElement("img");
  svgIcon.src = svgFile;
  svgIcon.height = height;
  return svgIcon;
}

const githubIcon = processSVG(githubSvg);
const linkedinIcon = processSVG(linkedinSvg);
const emailIcon = processSVG(emailSvg);
const phoneIcon = processSVG(phoneSvg);
const linkIcon = processSVG(linkSvg);

export { githubIcon, linkedinIcon, emailIcon, phoneIcon, linkIcon };
