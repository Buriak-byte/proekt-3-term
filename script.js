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
