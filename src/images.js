import profileJpg from "./images/addikt8_400.jpg";
import snowyBackgroundJpg from "./images/snowy.jpeg";
import battleship_ssPng from "./images/battleship_ss.png";
import todo_ssPng from "./images/todo_ss.png";
import dashboard_ssPng from "./images/dashboard_ss.png";
import weather_ssPng from "./images/weather_ss.png";
import tt_ssPng from "./images/tt_ss.png";
import skydomeBackgroundJpg from "./images/pexels-punttim-139762.jpg";

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

const snowyBackgroundImg = processIMG(
  snowyBackgroundJpg,
  "200px",
  "200px",
  "Snowy forest background"
);

const todo_ssImg = processIMG(
  todo_ssPng,
  "300px",
  "400px",
  "To Do List project screenshot"
);

const dashboard_ssImg = processIMG(
  dashboard_ssPng,
  "300px",
  "400px",
  "Dashboard project screenshot"
);

const weather_ssImg = processIMG(
  weather_ssPng,
  "300px",
  "400px",
  "Weather API project screenshot"
);

const battleship_ssImg = processIMG(
  battleship_ssPng,
  "300px",
  "400px",
  "Battleship project screenshot"
);

const tt_ssImg = processIMG(
  tt_ssPng,
  "300px",
  "400px",
  "Tic-tac-toe project screenshot"
);

const skydomeBackgroundImg = processIMG(
  skydomeBackgroundJpg,
  "300px",
  "300px",
  "Aerial shot of the Skydome"
);

export {
  profileImg,
  skydomeBackgroundImg,
  snowyBackgroundImg,
  battleship_ssImg,
  todo_ssImg,
  dashboard_ssImg,
  weather_ssImg,
  tt_ssImg,
};
