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
  },
  {
    id: 2,
    img: "",
    name: "Sasuke ",
    level: "Genin",
    des: "Sasuke Uchiha, a complex character from the Naruto series, is driven by revenge and seeks power to avenge his clan. He undergoes personal growth, battles inner demons, and ultimately finds redemption.",
  },
  {
    id: 3,
    img: "",
    name: "Sakura",
    level: "Jonin",
    des: "Sakura Haruno is a ninja from the Naruto series. Initially weak, she trains diligently and becomes a strong kunoichi, known for her intelligence, medical abilities, and unwavering loyalty to her friends.",
  },
  {
    id: 4,
    img: "",
    name: "Kakashi",
    level: "Jonin",
    des: "Kakashi Hatake, a skilled shinobi from the Naruto series, is known for his mysterious nature, Sharingan eye, excellence in combat, and being a mentor to Team 7.",
  },
  {
    id: 5,
    img: "",
    name: "Jiraya",
    level: "Sanin",
    des: "Jiraiya, a legendary shinobi from the Hidden-Leaf Village, was a wise and powerful teacher, known for his eccentricity, mastery of the toad-based fighting style, and his impact on Naruto's growth.",
  },
];

const profileImg = document.getElementById("profile-img");
const profileName = document.getElementById("profile-name");
const profileLevel = document.getElementById("profile-level");
const prpofileDes = document.getElementById("profile-des");
