let questions = document.querySelectorAll(".question_boxes .box");
questions.forEach(function (item) {
  let smallbox = item.querySelector(".small_box");
  smallbox.addEventListener("click", function () {
    questions.forEach(function (e) {
      if (e !== item) {
        e.classList.remove("show_text");
      }
    });

    item.classList.toggle("show_text");
  });
});
