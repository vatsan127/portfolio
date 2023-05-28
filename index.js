// ClassList
//     btn-prev
//     btn-next
//     profile - img
//     profile-name
//     profile-level
//     profile-des

const profiles = [
  {
    id: 1,
    img: "./img/naruto",
    name: "Naruto",
    level: "Genin",
    des: "Naruto Uzumaki is a spirited ninja from the Hidden Leaf Village, determined to become the Hokage, while facing challenges, forming bonds, and mastering powerful techniques on his journey.",
    bgColor: "orange",
  },
  {
    id: 2,
    img: "",
    name: "Sasuke ",
    level: "Genin",
    des: "Sasuke Uchiha, a complex character from the Naruto series, is driven by revenge and seeks power to avenge his clan. He undergoes personal growth, battles inner demons, and ultimately finds redemption.",
    bgColor: "pruple",
  },
  {
    id: 3,
    img: "",
    name: "Sakura",
    level: "Jonin",
    des: "Sakura Haruno is a ninja from the Naruto series. Initially weak, she trains diligently and becomes a strong kunoichi, known for her intelligence, medical abilities, and unwavering loyalty to her friends.",
    bgColor: "pink",
  },
  {
    id: 4,
    img: "",
    name: "Kakashi",
    level: "Jonin",
    des: "Kakashi Hatake, a skilled shinobi from the Naruto series, is known for his mysterious nature, Sharingan eye, excellence in combat, and being a mentor to Team 7.",
    bgColor: "#66f4d3",
  },
  {
    id: 5,
    img: "",
    name: "Jiraya",
    level: "Sanin",
    des: "Jiraiya, a legendary shinobi from the Hidden-Leaf Village, was a wise and powerful teacher, known for his eccentricity, mastery of the toad-based fighting style, and his impact on Naruto's growth.",
    bgColor: "red",
  },
];

const btnNext = document.getElementById("btn-next");
const btnPrev = document.getElementById("btn-prev");

const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const profileLevel = document.getElementById("profile-level");
const prpofileDes = document.getElementById("profile-des");

console.log("profiles length ", profiles.length);
btnNext.addEventListener("click", function () {
  let counter = 0;
  if (counter < profiles.length - 1) {
    counter++;
  } else {
    counter = 0;
  }
  console.log("counter ", counter);
  profileImg.img = profileImg;
});
