const visokosnyiYearInput = document.querySelector(".visokosnyi-year-input");
console.log(visokosnyiYearInput);
const visokosnyiYearAnswer1 = document.querySelector(
  ".visokosnyi-year-answer1");
  const visokosnyiyearanswer2 = document.querySelector(
    ".visokosnyi-year-answer2",
  );
  // function leapYear(year) {
  //   return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  // }
// visokosnyiYearInput.addEventListener("input", (e) => {
//   if (
//     visokosnyiYearInput.e.target.value % 4 === 0 &&
//       visokosnyiYearInput.e.target.value % 100 !== 0 ||
//     visokosnyiYearInput.e.target.value % 400 === 0
//   ) {
//     visokosnyiYearAnswer1.textContent = "це високосний рік!";
//     visokosnyiYearAnswer1.style.color = "#039900";
//   } else if (visokosnyiYearInput.e.target.value % 4 !== 0) {
//     visokosnyiYearAnswer1.textContent = "це не високосний рік!";
//     visokosnyiYearAnswer1.style.color = "#990000;";
//   } else {
//     visokosnyiYearAnswer1.style.display = "none";
//     visokosnyiyearanswer2.style.display = "none";
//   }
// });






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
console.log(plus, minus, mnozhennia, dilennia)






let operator = null
 plus.addEventListener("click", (plus) => {
  operator = "+"
   
 });

 minus.addEventListener("click", (minus) => {
  operator = "-"
 });
 mnozhennia.addEventListener("click", (mnozhennia) => {
  operator = "*"
  
 });
 dilennia.addEventListener("click", (dilennia) => {
  operator = "/"
  console.log(operator);
 });
dorivnue.addEventListener("click", (dorivnue) => {
  const calculatormegaUlinput1Value = Number(calculatormegaUlinput1.value)
  const calculatormegaUlinput2Value = Number(calculatormegaUlinput2.value);
  //  console.log(calculatormegaUlinput2Value, calculatormegaUlinput1Value);
   if (
     isNaN(calculatormegaUlinput2Value) ||
     isNaN(calculatormegaUlinput1Value)
   ) {
     console.log("напиши число!!!");
     return
   }
   let resultOfCalculator = null
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
   console.log(resultOfCalculator)
 calculatormegaUlinput3.value = resultOfCalculator
  })
  
















const timeCalculatorinput = document.querySelector(".timeCalculator-input")
const timeCalculatortimer = document.querySelector(".timeCalculator-timer");
console.log(timeCalculatorinput.value)













let computersNumber = Math.floor(Math.random() * 10);
let userNumber = document.querySelector(".random-input");
const answer1 = document.querySelector(".random-answer1");
const answer2 = document.querySelector(".random-answer2");

userNumber.addEventListener("input", (input) => {
  if (Number(input.target.value) === computersNumber && input.target.value) {
    answer1.style.display = "block";
    answer2.style.display = "none";
  } else if (Number(input.target.value) !== computersNumber && input.target.value) {
    answer1.style.display = "none";
    answer2.style.display = "block";
  } else{
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
  jump.preventDefault();
  if (play === true && jump.code === "Space" && timeofjump === true) {
    timeofjump = false;
    dinosaurUnit.classList.add("dino-jump");
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

  let randomRockSpeed = 1.5
  dinosaurRock.style.animationDuration = `${randomRockSpeed}s`;
});

function hitofhitbox() {
  const dinoTop = parseInt(
    window.getComputedStyle(dinosaurUnit).getPropertyValue("top"),
  );
  const rockLeft = parseInt(
    window.getComputedStyle(dinosaurRock).getPropertyValue("left"),
  );

  if (rockLeft <= 700 &&  dinoTop <= 1530){
    play = false;
    alert("Game Over");
  }
}














let startFootball = false
const field = document.querySelector(".football-field");
const cursorIMG = document.querySelector(".football-corsor");
const ball = document.querySelector(".football-ball");
cursorIMG.addEventListener("mousemove", (cursorFocus) => {
  element.style.left = e.clientX + "px";
  element.style.top = e.clientY + "px";
});
// cursorIMG.addEventListener("click", (ballfocus) => {
 
// })























const studentsarrowsli1 = document.querySelector(".students-arrows-li1");
const studentsarrowsli2 = document.querySelector(".students-arrows-li2");
const student1 = document.querySelector(".student1");
const student2 = document.querySelector(".student2");
const student3 = document.querySelector(".student3");
const student4 = document.querySelector(".student4");
const student5 = document.querySelector(".student5");
const student6 = document.querySelector(".student6");
const student7 = document.querySelector(".student7");


















const scientists = [
  {
    name: "Isaac",
    surname: "Newton",
    born: 1643,
    dead: 1727,
    id: 2,
  },
  {
    name: "Galileo",
    surname: "Galilei",
    born: 1564,
    dead: 1642,
    id: 3,
  },
  {
    name: "Marie",
    surname: "Curie",
    born: 1867,
    dead: 1934,
    id: 4,
  },
  {
    name: "Johannes",
    surname: "Kepler",
    born: 1571,
    dead: 1630,
    id: 5,
  },
  {
    name: "Nicolaus",
    surname: "Copernicus",
    born: 1473,
    dead: 1543,
    id: 6,
  },
  {
    name: "Max",
    surname: "Planck",
    born: 1858,
    dead: 1947,
    id: 7,
  },
  {
    name: "Albert",
    surname: "Einstein",
    born: 1879,
    dead: 1955,
    id: 1,
  },
  {
    name: "Katherine",
    surname: "Blodgett",
    born: 1898,
    dead: 1979,
    id: 8,
  },
  {
    name: "Ada",
    surname: "Lovelace",
    born: 1815,
    dead: 1852,
    id: 9,
  },
  {
    name: "Sarah E.",
    surname: "Goode",
    born: 1855,
    dead: 1905,
    id: 10,
  },
  {
    name: "Lise",
    surname: "Meitner",
    born: 1878,
    dead: 1968,
    id: 11,
  },
  {
    name: "Hanna",
    surname: "Hammarström",
    born: 1829,
    dead: 1909,
    id: 12,
  },
];
function bornIn19ST(scientists) {
  const whobornIn19ST = scientists.filter((human) => {
    return 1800 <= human.born && human.born <= 1900;
  });
  return whobornIn19ST;
}
console.log(bornIn19ST(scientists));
function orderYears(scientists) {
  const orderYearsArr = scientists.sort((a, b) => {
    const lifeYearsA = a.dead - a.born;
    const lifeYearsB = b.dead - b.born;
    return lifeYearsA - lifeYearsB;
  });
  return orderYearsArr;
}
console.log(orderYears(scientists));
function futureborned(scientists) {
  const orderYearsArr = scientists.sort((a, b) => {
    return b.born - a.born;
  });
  return orderYearsArr[0];
}
console.log(futureborned(scientists));
function yearsOfAlbertEnstein(scientists) {
  const AlbertEnsteinYears = scientists.find((AlbertEnstein) => {
    return AlbertEnstein.born === 1879;
  });
  return AlbertEnsteinYears.born;
}
console.log(yearsOfAlbertEnstein(scientists));

function StartC(scientists) {
  return scientists.filter((scientist) => {
    return scientist.surname.startsWith("C");
  });
}

console.log(StartC(scientists));
// function StartC(scientists) {
//   scientists.filter((scientist) => {
//    return scientist.surname.includes("C")
//   });
//   return StartC
// }
// console.log(StartC(scientists))
function deleteA(scientists) {
  const UNdeletedscientists = scientists.filter((UNdelited) => {
    return !UNdelited.name.startsWith("A");
  });
  return UNdeletedscientists;
}
console.log(deleteA(scientists));























const scientistsBorningConstA = scientists.sort((a, b) => {
  return a.born - b.born;
});
const scientistsBorningConstB = scientists.sort((a, b) => {
  return b.born - a.born;
});


function scientistsBorning(scientists,minusA,minusB) {
return scientistsBorningConstA[0], scientistsBorningConstB[0]
}
console.log(
  scientistsBorning(
    scientists,
    scientistsBorning.minusA,
    scientistsBorning.minusB,
  ),
);
























// function similarLitters(scientists){
//   const similarLittersScintists = scientists.filter((scientist) => {
//     let someLetterName = scientist.indexOf(0)
//     let someLetterSurname = someLetterName
//     return 
//   })
//   return similarLittersScintists
// }
// console.log(similarLitters(scientists))










