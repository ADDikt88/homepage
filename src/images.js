import profileJpg from "./images/addikt8_400.jpg";
import skydomeBackgroundJpg from "./images/pexels-punttim-139762.jpg";
import snowyBackgroundJpg from "./images/snowy.jpeg";
// import img4 from "./images/goldstar.svg";
// import img5 from "./images/trash.svg";

function processIMG(imgFile, height, width, altText) {
  const img = document.createElement("img");
  img.src = imgFile;
  img.alt = altText;
  img.style.objectFit = "cover";
  img.style.objectPosition = "center";
  img.style.height = "100%";
  img.style.width = "100%";
  return img;
}

const profileImg = processIMG(
  profileJpg,
  "300px",
  "300px",
  "Profile Image of ADDikt"
);
const skydomeBackgroundImg = processIMG(
  skydomeBackgroundJpg,
  "300px",
  "300px",
  "Aerial shot of the Skydome"
);
const snowyBackgroundImg = processIMG(
  snowyBackgroundJpg,
  "200px",
  "200px",
  "Snowy forest background"
);

export { profileImg, skydomeBackgroundImg, snowyBackgroundImg };
