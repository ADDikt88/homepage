import profileJpg from "./images/addikt8_400.jpg";
import skydomeBackgroundJpg from "./images/pexels-punttim-139762.jpg";
// import img3 from "./images/exc.svg";
// import img4 from "./images/goldstar.svg";
// import img5 from "./images/trash.svg";

function processIMG(imgFile, height) {
  const img = document.createElement("img");
  img.src = imgFile;
  img.alt = "image";
  img.style.objectFit = "fill";
  img.style.height = height;
  img.style.width = "100%";
  return img;
}

const profileImg = processIMG(profileJpg, "300px");
const skydomeBackgroundImg = processIMG(skydomeBackgroundJpg, "300px");

export { profileImg, skydomeBackgroundImg };
