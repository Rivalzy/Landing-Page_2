// Jam start
function updateClock() {
  let now = new Date();
  let dname = now.getDay(),
    mo = now.getMonth(),
    dnum = now.getDate(),
    yr = now.getFullYear(),
    hou = now.getHours(),
    min = now.getMinutes(),
    sec = now.getSeconds(),
    pe = "AM";

  if (hou == 0) {
    hou = 12;
  }
  if (hou > 12) {
    hou -= 12;
    pe = "PM";
  }

  Number.prototype.pad = function (digits) {
    let n;
    for (n = this.toString(); n.length < digits; n = 0 + n);
    return n;
  };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const week = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const ids = [
    "dayname",
    "month",
    "daynum",
    "year",
    "hour",
    "minutes",
    "seconds",
    "period",
  ];
  const values = [
    week[dname],
    months[mo],
    dnum.pad[2],
    yr,
    "Clock : " + hou.pad(2) + " :",
    min.pad(2) + " :",
    sec.pad(2),
    pe,
  ];
  for (let i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = values[i];
}

function initClock() {
  updateClock();
  window.setInterval("updateClock()", 1000);
}
// Jam End

// review start
let sliderContainer = document.getElementById("SliderContainer");
let slider = document.getElementById("slider");
let cards = slider.getElementsByTagName("li");
const like = document.getElementById("like");

let sliderContainerWidht = sliderContainer.clientWidth;
let elementShow = 4;
if (document.body.clientWidth < 1000) {
  elementShow = 2;
}

let cardWidht = sliderContainerWidht / elementShow;

slider.style.width = cards.length * cardWidht + "px";
slider.style.transition = "margin";
slider.style.transitionDuration = "1s";

for (let index = 0; index < cards.length; index++) {
  const element = cards[index];
  element.style.widht = cardWidht + "px";
}

function prev() {
  if (+slider.style.marginLeft.slice(0, -2) != 0)
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) + cardWidht + "px";
}

function next() {
  if (
    +slider.style.marginLeft.slice(0, -2) !=
    -cardWidht * (cards.length - elementShow)
  )
    slider.style.marginLeft =
      +slider.style.marginLeft.slice(0, -2) - cardWidht + "px";
}

function color() {
  like.style.color = "#7CE3F5";
}
// review end
