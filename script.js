const visokosnyiYearInput = document.querySelector(".visokosnyi-year-input");
console.log(visokosnyiYearInput);
const visokosnyiYearAnswer1 = document.querySelector(
  ".visokosnyi-year-answer1",
);
visokosnyiYearInput.addEventListener("input", (e) => {
  if (leapYear(e.target.value)) {
    visokosnyiYearAnswer1.textContent = "leap Year";
    visokosnyiYearAnswer1.style.color = "#039900";
  } else {
    visokosnyiYearAnswer1.textContent = "not leap Year";
    visokosnyiYearAnswer1.style.color = "#990000";
  }
});
function leapYear(year) {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

















let computersNumber = Math.floor(Math.random() * 10);
let userNumber = document.querySelector(".random-input");
const answer1 = document.querySelector(".random-answer1");
const answer2 = document.querySelector(".random-answer2");

userNumber.addEventListener("input", (input) => {
  if (Number(input.target.value) === computersNumber && input.target.value) {
    answer1.style.display = "block";
    answer2.style.display = "none";
  } else {
    answer1.style.display = "none";
    answer2.style.display = "block";
  }
});        


















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










