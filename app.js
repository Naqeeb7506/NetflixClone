let small_box = document.querySelectorAll(".small_box a");
// let box_text = document.querySelectorAll(".box_text");
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let six = document.querySelector(".six");

small_box.forEach((item) => {
  item.addEventListener("click", (e) => {
    // console.log(item.target.dataset.value);
    let result = e.target.dataset.value;

    if (result === "1") {
      one.classList.toggle("no_display");
      two.classList.add("no_display");
      three.classList.add("no_display");
      four.classList.add("no_display");
      five.classList.add("no_display");
      six.classList.add("no_display");
    } else if (result === "2") {
      two.classList.toggle("no_display");
      one.classList.add("no_display");
      three.classList.add("no_display");
      four.classList.add("no_display");
      five.classList.add("no_display");
      six.classList.add("no_display");
    } else if (result === "3") {
      three.classList.toggle("no_display");
      one.classList.add("no_display");
      two.classList.add("no_display");
      four.classList.add("no_display");
      five.classList.add("no_display");
      six.classList.add("no_display");
    } else if (result === "4") {
      four.classList.toggle("no_display");
      one.classList.add("no_display");
      two.classList.add("no_display");
      three.classList.add("no_display");
      five.classList.add("no_display");
      six.classList.add("no_display");
    } else if (result === "5") {
      five.classList.toggle("no_display");
      one.classList.add("no_display");
      two.classList.add("no_display");
      three.classList.add("no_display");
      four.classList.add("no_display");
      six.classList.add("no_display");
    } else {
      six.classList.toggle("no_display");
      one.classList.add("no_display");
      two.classList.add("no_display");
      three.classList.add("no_display");
      four.classList.add("no_display");
      five.classList.add("no_display");
    }
  });
});
