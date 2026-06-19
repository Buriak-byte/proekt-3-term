const visokosnyiYearInput = document.querySelector(".visokosnyi-year-input");
console.log(visokosnyiYearInput);
const visokosnyiYearAnswer1 = document.querySelector(
  ".visokosnyi-year-answer1",
);
const visokosnyiyearanswer2 = document.querySelector(
  ".visokosnyi-year-answer2",
);
function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}
visokosnyiYearInput.addEventListener("input", (e) => {
  const year = Number(e.target.value);

  if (!year) {
    visokosnyiYearAnswer1.textContent = "";
    visokosnyiyearanswer2.textContent = "";
    return;
  }

  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    visokosnyiYearAnswer1.textContent = "це високосний рік!";
    visokosnyiYearAnswer1.style.color = "#039900";
    // visokosnyiyearanswer2.textContent = "";
  } else {
    visokosnyiYearAnswer1.textContent = "це не високосний рік!";
    visokosnyiYearAnswer1.style.color = "#990000";
    // visokosnyiYearAnswer1.textContent = "";
  }
});
















const KNPImg = document.querySelector(".K-N-P-img");
const getStoneBtn = document.querySelector(".K-N-P-stone");
const getScissorsBtn = document.querySelector(".K-N-P-scissors");
const getPaperBtn = document.querySelector(".K-N-P-paper");
const resultOfGame = document.querySelector(".K-N-P-answer");
const computerAnswer1 = document.querySelector(".computerValue");
const computerWins = document.querySelector(".KNP-computerSCORE-num");
const usersWins = document.querySelector(".KNP-yourSCORE-num");

const allAnswers = ["stone", "scissors", "paper"];
const allAnswersIMGS = {
  stone: "./SVGS/rock.svg",
  scissors: "./SVGS/scissors.svg",
  paper: "./SVGS/paper.svg",
};

https: function randomAnswer(answer) {
  const computerChoise = Math.floor(Math.random() * 3);
  const computerAnswer = allAnswers[computerChoise];
  const a = document.createElement("img");
  a.src = allAnswersIMGS[computerAnswer];
  KNPImg.innerHTML = `<img src="${allAnswersIMGS[computerAnswer]}" alt="">`;
  return computerAnswer;
}

let counterUser = 0;
let counterComputer = 0;

getStoneBtn.addEventListener("click", (event) => {
  const computerChoise = randomAnswer();
  console.log(computerChoise);
  const userChoise = allAnswers[0];
  
  if (computerChoise === allAnswers[2]) {
    resultOfGame.textContent = "ви програли!";
resultOfGame.style.color = "#990000";
    counterComputer += 1;
    computerWins.innerHTML = counterComputer;
  }
  if (computerChoise === allAnswers[1]) {
    resultOfGame.textContent = "ви вийграли!";
    resultOfGame.style.color = "#039900";
    counterUser += 1;
    usersWins.innerHTML = counterUser;
  }
  if (computerChoise === allAnswers[0]) {
    resultOfGame.textContent = "нічия";
    resultOfGame.style.color = "#ffd500"
  }
});
getScissorsBtn.addEventListener("click", (event) => {
  const computerChoise = randomAnswer();
  console.log(computerChoise);
  const userChoise = allAnswers[1];
  if (computerChoise === allAnswers[0]) {

   resultOfGame.textContent = "ви програли!";
   resultOfGame.style.color = "#990000";
    counterComputer += 1;
    computerWins.innerHTML = counterComputer;
  }
  if (computerChoise === allAnswers[2]) {
     resultOfGame.textContent = "ви вийграли!";
     resultOfGame.style.color = "#039900";
    counterUser += 1;
    usersWins.innerHTML = counterUser;
  }
  if (computerChoise === allAnswers[1]) {
     resultOfGame.textContent = "нічия";
     resultOfGame.style.color = "#ffd500";
  }
});
getPaperBtn.addEventListener("click", (event) => {
  const computerChoise = randomAnswer();
  console.log(computerChoise);
  const userChoise = allAnswers[2];
  if (computerChoise === allAnswers[2]) {
    resultOfGame.textContent = "нічия";
    resultOfGame.style.color = "#ffd500";
  }
  if (computerChoise === allAnswers[0]) {
      resultOfGame.textContent = "ви вийграли!";
      resultOfGame.style.color = "#039900";
    counterUser += 1;
    usersWins.innerHTML = counterUser;
  }
  if (computerChoise === allAnswers[1]) {
    resultOfGame.textContent = "ви програли!";
    resultOfGame.style.color = "#990000";
    counterComputer += 1;
    computerWins.innerHTML = counterComputer;
  }
});






















const calculatormegaUlinput1 = document.querySelector(
  ".calculator-megaUl-input1",
);
const calculatormegaUlinput2 = document.querySelector(
  ".calculator-megaUl-input2",
);
const calculatormegaUlinput3 = document.querySelector(
  ".calculator-megaUl-input3",
);
const dorivnue = document.querySelector(".dorivnue");
const plus = document.querySelector(".plus");
const mnozhennia = document.querySelector(".mnozhennia");
const minus = document.querySelector(".minus");
const dilennia = document.querySelector(".dilennia");
console.log(plus, minus, mnozhennia, dilennia);

let operator = null;
plus.addEventListener("click", (plus) => {
  operator = "+";
});

minus.addEventListener("click", (minus) => {
  operator = "-";
});
mnozhennia.addEventListener("click", (mnozhennia) => {
  operator = "*";
});
dilennia.addEventListener("click", (dilennia) => {
  operator = "/";
  console.log(operator);
});
dorivnue.addEventListener("click", (dorivnue) => {
  const calculatormegaUlinput1Value = Number(calculatormegaUlinput1.value);
  const calculatormegaUlinput2Value = Number(calculatormegaUlinput2.value);
  //  console.log(calculatormegaUlinput2Value, calculatormegaUlinput1Value);
  if (
    isNaN(calculatormegaUlinput2Value) ||
    isNaN(calculatormegaUlinput1Value)
  ) {
    console.log("напиши число!!!");
    return;
  }
  let resultOfCalculator = null;
  switch (operator) {
    case "+":
      resultOfCalculator =
        calculatormegaUlinput1Value + calculatormegaUlinput2Value;
      break;
    case "-":
      resultOfCalculator =
        calculatormegaUlinput1Value - calculatormegaUlinput2Value;
      break;
    case "*":
      resultOfCalculator =
        calculatormegaUlinput1Value * calculatormegaUlinput2Value;
      break;
    case "/":
      resultOfCalculator =
        calculatormegaUlinput1Value / calculatormegaUlinput2Value;
      break;
  }
  console.log(resultOfCalculator);
  calculatormegaUlinput3.value = resultOfCalculator;
});










const timeryears = document.querySelector(".timer-years");
const timermonths = document.querySelector(".timer-mounts");
const timerdays = document.querySelector(".timer-days");
const timerminutes = document.querySelector(".timer-minutes");
const timerseconds = document.querySelector(".timer-seconds");
const timeCalculatorinput = document.querySelector(".timeCalculator-input");
const timeCalculatortimer = document.querySelector(".timeCalculator-timer");

// ось тут — після querySelector
timeCalculatorinput.addEventListener("input", () => {
  const totalSeconds = Number(timeCalculatorinput.value);

  const years = Math.floor(totalSeconds / 31536000);
  const months = Math.floor((totalSeconds % 31536000) / 2592000);
  const days = Math.floor((totalSeconds % 2592000) / 86400);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  timeryears.textContent = years + "р.";
  timermonths.textContent = months + "міс.";
  timerdays.textContent = days + "дн.";
  timerminutes.textContent = minutes + "хв.";
  timerseconds.textContent = seconds + "с.";
});





















let computersNumber = Math.floor(Math.random() * 10);
let userNumber = document.querySelector(".random-input");
const answer1 = document.querySelector(".random-answer1");
const answer2 = document.querySelector(".random-answer2");

userNumber.addEventListener("input", (input) => {
  if (Number(input.target.value) === computersNumber && input.target.value) {
    answer1.style.display = "block";
    answer2.style.display = "none";
  } else if (
    Number(input.target.value) !== computersNumber &&
    input.target.value
  ) {
    answer1.style.display = "none";
    answer2.style.display = "block";
  } else {
    answer1.style.display = "none";
    answer2.style.display = "none";
  }
});

// let changeOftime = false
// let timeofjump = true
// let play = false
// const dinosaurStartButton = document.querySelector(".dinosaur-startButton");
// const dinosaurUnit = document.querySelector(".dinosaur-unit");
// const dinosaurRock = document.querySelector(".dinosaur-rock")
// document.addEventListener("keydown", (jump) => {
//   jump.preventDefault()
//   console.log(jump);
//   console.log(jump.code)
//   if(play === true && jump.code === "Space" && timeofjump === true){
// timeofjump = false
// dinosaurUnit.classList.add("dino-jump")
// setTimeout((timer) => {dinosaurUnit.classList.remove("dino-jump");
//   timeofjump = true
// }, 1200)

//   }
// })
//  dinosaurStartButton.addEventListener("click", (start) => {
//   play = true

//   dinosaurStartButton.style.display = "none";
//   setInterval(() => {
//     changeOftime === true
//   let randomrockspeed = Math.floor(Math.random() * 3 + 1);
//   changeOftime === false
//     dinosaurRock.style.animationDuration = `${randomrockspeed}s`;
//   }, 3000);

//  })
// function hitofhitbox(){
// const dinoTop = window.getComputedStyle(dinosaurUnit).getPropertyValue("top");
// const rockLeft = window.getComputedStyle(dinosaurRock).getPropertyValue("left");
// const rockRight = window.getComputedStyle(dinosaurRock).getPropertyValue("right");
// if (dinoTop <= "1530px" && rockLeft >= "415px") {
//   alert("game over")

// }
// }
// setInterval((time) => {
// hitofhitbox()
// }, 100);

// let timeofjump = true;
// let play = false;

// const dinosaurStartButton = document.querySelector(".dinosaur-startButton");
// const dinosaurUnit = document.querySelector(".dinosaur-unit");
// const dinosaurRock = document.querySelector(".dinosaur-rock");

// document.addEventListener("keydown", (jump) => {
//   jump.preventDefault();
//   if (play === true && jump.code === "Space" && timeofjump === true) {
//     timeofjump = false;
//     dinosaurUnit.classList.add("dino-jump");
//     setTimeout(() => {
//       dinosaurUnit.classList.remove("dino-jump");
//       timeofjump = true;
//     }, 1200);
//   }
// });

// dinosaurStartButton.addEventListener("click", () => {
//   play = true;
//   dinosaurStartButton.style.display = "none";

//   // Функція для зміни швидкості каменю
//   function changeRockSpeed() {
//     let randomRockSpeed = Math.floor(Math.random() * 3 + 1);

//     // Перезапускаємо анімацію з новою швидкістю
//     dinosaurRock.style.animation = "none";
//     dinosaurRock.offsetHeight; // примусовий reflow — скидає анімацію
//     dinosaurRock.style.animationDuration = `${randomRockSpeed}s`;
//     dinosaurRock.style.animation = "";
//     dinosaurRock.style.animationDuration = `${randomRockSpeed}s`;
//   }

//   changeRockSpeed(); // перший запуск
//   setInterval(changeRockSpeed, 3000); // кожні 3 секунди
// });

// function hitofhitbox() {
//   const dinoTop = window.getComputedStyle(dinosaurUnit).getPropertyValue("top");
//   const rockLeft = window
//     .getComputedStyle(dinosaurRock)
//     .getPropertyValue("left");

//   if (parseInt(dinoTop) <= 1530 && parseInt(rockLeft) >= 415) {
//     play = false;
//     alert("Game Over");
//   }
// }

// setInterval(hitofhitbox, 100);

let timeofjump = true;
let play = false;

const dinosaurStartButton = document.querySelector(".dinosaur-startButton");
const dinosaurUnit = document.querySelector(".dinosaur-unit");
const dinosaurRock = document.querySelector(".dinosaur-rock");

document.addEventListener("keydown", (jump) => {
  if (jump.code === "Space") {
    jump.preventDefault();
  }
  if (play === true && jump.code === "Space" && timeofjump === true) {
    timeofjump = false;
    dinosaurUnit.classList.add("dino-jump");
    setTimeout(() => {
      dinosaurUnit.classList.remove("dino-jump");
      timeofjump = true;
    }, 1200);
  }
});

dinosaurStartButton.addEventListener("click", () => {
  play = true;
  dinosaurStartButton.style.display = "none";

  let randomRockSpeed = 1.5;
  dinosaurRock.style.animationDuration = `${randomRockSpeed}s`;
});

function hitofhitbox() {
  const dinoTop = parseInt(
    window.getComputedStyle(dinosaurUnit).getPropertyValue("top"),
  );
  const rockLeft = parseInt(
    window.getComputedStyle(dinosaurRock).getPropertyValue("left"),
  );

  if (rockLeft <= 700 && dinoTop <= 1530) {
    play = false;
    alert("Game Over");
  }
}




const footballballBUTTON = document.querySelector(".football-ball-BUTTON");
let ballFocusLet = false;
let startFootball = false;
let antiBAGfootball = false;
const field = document.querySelector(".football-field");
let cursorIMG = document.querySelector(".football-cursor");
const ball = document.querySelector(".football-ball");
field.addEventListener("mousemove", (cursorFocus) => {
  cursorIMG.style.left = cursorFocus.offsetX - 11 + "px";
  cursorIMG.style.top = cursorFocus.offsetY - 11 + "px"

});
field.addEventListener("click", (ballFocus) => {
  
  ball.style.left = ballFocus.offsetX - 25 + "px";
  ball.style.top = ballFocus.offsetY - 25 + "px";
  
});
// footballballBUTTON.addEventListener("mousemove", (ballfocus) => {
//   ballFocusLet === true;
// ball.style.left = ballfocus.offsetX + "px";
// ball.style.top = ballfocus.offsetY + "px";
// })

const biggestNumresult = document.querySelector(".biggestNum-result");
const biggestNuminput1 = document.querySelector(".biggestNum-input-1");
const biggestNuminput2 = document.querySelector(".biggestNum-input-2");
const biggestNuminput3 = document.querySelector(".biggestNum-input-3");
const biggestNuminput = document.querySelector(".biggestNum-input");
function biggestNum(){
const biggestNuminput1Value = parseFloat(biggestNuminput1.value)
const biggestNuminput3Value = parseFloat(biggestNuminput3.value);
const biggestNuminput2Value = parseFloat(biggestNuminput2.value);
console.log(typeof biggestNuminput1Value);
if (
  typeof biggestNuminput1Value !== "number" ||
  typeof biggestNuminput2Value !== "number" ||
  typeof biggestNuminput3Value !== "number"
) {
  return

}else{ 
  let maxNum = Math.max(
    biggestNuminput1Value,
    biggestNuminput2Value,
    biggestNuminput3Value,
  );
  biggestNumresult.textContent = `найбільше число яке ви ввели число(${maxNum})`;
}
}
  biggestNuminput1.addEventListener("input", biggestNum);
 biggestNuminput2.addEventListener("input", biggestNum);
  biggestNuminput3.addEventListener("input", biggestNum);
let indexStudents = 0;
const studentsarrowsli1 = document.querySelector(".students-arrows-li1-style");
const studentsarrowsli2 = document.querySelector(".students-arrows-li2-style");
const student1 = document.querySelector(".student1");
const student2 = document.querySelector(".student2");
const student3 = document.querySelector(".student3");
const student4 = document.querySelector(".student4");
const student5 = document.querySelector(".student5");
const student6 = document.querySelector(".student6");
const student7 = document.querySelector(".student7");
const student = document.querySelectorAll(".students-imgs-position");
studentsarrowsli1.addEventListener("click", (turnLeft) => {
  if (indexStudents === 0) {
    indexStudents = student.length - 1;
  }
  indexStudents = indexStudents - 1;
  student.forEach((stud) => {
    stud.classList.remove("activeRight");
    stud.classList.remove("activeLeft");
  });
  student[indexStudents].classList.add("activeRight");
  student[indexStudents].classList.add("activeLeft");
});

studentsarrowsli2.addEventListener("click", (turnRight) => {
  if (indexStudents === student.length - 1) {
    indexStudents = 0;
  }
  indexStudents = indexStudents + 1;
  student.forEach((stud) => {
    stud.classList.remove("activeLeft");
    stud.classList.remove("activeRight");
  });
  student[indexStudents].classList.add("activeRight");
});

const scientists = [
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
    Img: "https://static6.depositphotos.com/1001003/559/i/450/depositphotos_5598181-stock-illustration-isaac-newton.jpg",
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
    Img: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Galileo.arp.300pix.jpg",
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
    Img: "https://upload.wikimedia.org/wikipedia/commons/7/77/Marie_Curie_%281900%29_%28cropped%29.jpg",
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuRDRkbekHHxXWF7u-HOxZBjUAl55iVcNCBg&s",
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
    Img: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Nikolaus_Kopernikus.jpg",
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
    Img: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Max_Planck_1933.jpg",
  },
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQEEw7e0uEqfH-31jevGZU4WKdknJruD50Xw&s",
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAYsC9vk6W-jA7pZUzpwDr0Wh7CzBRFuArg&s",
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL8tbYJ4igOpwnE9Tmd5xgca6n_Utylgjxg&s",
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
    Img: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Sarah_Goode_t580.png",
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
    Img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJL6h_cm-zFnR0NHTcCpk8jZouKzMPsanoiQ&s",
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
    Img: "https://upload.wikimedia.org/wikipedia/commons/d/d2/Hanna_Hammarstr%C3%B6m.jpg",
  },
];
function createli(scientists){
  emptyUL.innerHTML = "";
scientists.forEach((scientist, index, array) => {
  const createli = document.createElement("li")
   const increateliimg = document.createElement("img");
  const increateliname = document.createElement("p")
    const increatelilife = document.createElement("p");
   
    increateliimg.src = scientist.Img
    increateliimg.style.width = "100px";
     increateliimg.style.height = "100px";
    increateliname.textContent = `${scientist.name} ${scientist.surname}`
     increatelilife.textContent = `${scientist.born}-${scientist.dead}`;
     createli.classList.add("createli")
     createli.append(increateliimg, increateliname, increatelilife);
     emptyUL.append(createli)
})
}

const emptyUL = document.querySelector(".emptyUL")
const button1 = document.querySelector("#button1");
button1.addEventListener("click", bornIn19ST);
function bornIn19ST() {
  const whobornIn19ST = scientists.filter((human) => {
    return 1800 <= human.born && human.born <= 1900;
  });
  createli(whobornIn19ST);
}


const button3 = document.querySelector("#button3");

button3.addEventListener("click", orderYears);
function orderYears() {
  const orderYearsArrA = scientists.sort((a, b) => {
    const lifeYearsA = a.dead - a.born;
    const lifeYearsB = b.dead - b.born;
    return lifeYearsA - lifeYearsB;
  });
  createli(orderYearsArrA);
}




const button4 = document.querySelector("#button4");
button4.addEventListener("click", futureborned);
function futureborned() {
  const orderYearsArrB = scientists.sort((a, b) => {
    return b.born - a.born;
  });
 createli([orderYearsArrB[0]])
 console.log(orderYearsArrB)
}
const button2 = document.querySelector("#button2");
button2.addEventListener("click", sortByAlfabet);
function sortByAlfabet(){
  const sorted = scientists.sort((a, b) => {
    return a.surname.localeCompare(b.surname)
    
  })
createli(sorted);
}

const button5 = document.querySelector("#button5")
button5.addEventListener("click", yearsOfAlbertEnstein)
function yearsOfAlbertEnstein() {
  const AlbertEnsteinYears = scientists.find((scientist) => {
    return scientist.born === 1879;
  });
  createli([AlbertEnsteinYears]); // ← [] навколо
}

const button6 = document.querySelector("#button6");
button6.addEventListener("click", StartC);
function StartC() {
  const chelC = scientists.filter((chel) => {
    return chel.name.startsWith("C") || chel.surname.startsWith("C")
  })
  createli(chelC)
  console.log(chelC)
}

const button7 = document.querySelector("#button7");
button7.addEventListener("click", noA);
function noA() {
  const filteredScientists = scientists.filter((scientist) => {
    return (
      !scientist.name.startsWith("A") && !scientist.surname.startsWith("A")
    );
  });
  createli(filteredScientists);
}


const button8 = document.querySelector("#button8")
button8.addEventListener("click", timeOfLife)
function timeOfLife() {
  const sorted = [...scientists].sort((a, b) => {
    return a.dead - a.born - (b.dead - b.born);
  });
  createli([sorted[0], sorted[sorted.length - 1]]);
}




const button9 = document.querySelector("#button9")
button9.addEventListener("click", izgoy)
function izgoy(){
  const filteredScientists = scientists.filter(
    ({ name, surname }) =>
      name && surname && name[0].toLowerCase() === surname[0].toLowerCase(),
  );
  createli(filteredScientists)
}

















