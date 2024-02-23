// let hero = document.querySelector(".hero");
// let slider = document.querySelector(".slider");
// let animation = document.querySelector("section.animation-wrapper");

// const time_line = new TimelineMax();
// // 使用 fromTo 方法添加動畫序列
// // .fromTo(要控制的對象, duration, 控制對象的原始狀態, 控制對象的動畫結束後的狀態)
// // parameter1 是要控制的對象
// // parameter2 是duration
// // parameter3 是控制對象的原始狀態
// // parameter4 是控制對象的動畫結束後的狀態
// time_line
//   .fromTo(hero, 1, { height: "0%" }, { height: "100%", ease: Power2.easeInOut })
//   .fromTo(
//     hero,
//     1.2,
//     { width: "80%" },
//     { width: "100%", ease: Power2.easeInOut }
//   )
//   .fromTo(
//     slider,
//     1,
//     { x: "-100%" },
//     { x: "0%", ease: Power2.easeInOut },
//     "-=1.2"
//   )
//   .fromTo(animation, 0.3, { opacity: 1 }, { opacity: 0 });

// setTimeout(() => {
//   animation.style.pointerEvents = "none";
// }, 2500);

//讓整個網站的ENTER KEY不被使用
window.addEventListener("keypress", (e) => {
  if (e.key == "Enter") {
    e.preventDefault();
  }
});

//防止FORM內部的BUTTON交出表單
let allButtons = document.querySelectorAll("button");
allButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
  });
});

let allSelects = document.querySelectorAll("select");
allSelects.forEach((select) => {
  select.addEventListener("change", (e) => {
    changeColor(e.target);
  });
});
function changeColor(target) {
  if (target.value == "A" || target.value == "A-") {
    target.style.backgroundColor = "LightGreen";
    target.style.color = "black";
  } else if (
    target.value == "B" ||
    target.value == "B-" ||
    target.value == "B+"
  ) {
    target.style.backgroundColor = "yellow";
    target.style.color = "black";
  } else if (
    target.value == "C" ||
    target.value == "C-" ||
    target.value == "C+"
  ) {
    target.style.backgroundColor = "orange";
    target.style.color = "black";
  } else if (
    target.value == "D" ||
    target.value == "D-" ||
    target.value == "D+"
  ) {
    target.style.backgroundColor = "red";
    target.style.color = "black";
  } else if (target.value == "F") {
    target.style.backgroundColor = "grey";
    target.style.color = "white";
  } else {
    target.style.backgroundColor = "grey";
  }
}
