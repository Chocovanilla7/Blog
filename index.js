let len = document.querySelectorAll(".drop-down").length;
console.log(len);

// items.forEach((item) =>
//   item.addEventListener("click", (e) => {
//     console.log(e.target.getAttribute("class"));
//   })
// );

// const divs = document.querySelectorAll(".drop-down");
// console.log(divs);

// divs.forEach((el) =>
//   el.addEventListener("click", (event) => {
//     console.log($(event).attr("class"));
//   })
// );

for (let i = 0; i < len; i++) {
  document.getElementsByClassName("drop-down")[i].addEventListener("click", () => {
    const id = $(".drop-down-" + Number(i + 1)).attr("data-target");
    console.log(id);
    console.log($(id).css("display", "block"));
    $(id).mouseleave(function () {
      console.log($(id).css("display", "none"));
    });
  });
}
//   function qqt() {
//     console.log($(this).attr());
// var id = $(".drop-down-" + Number(i + 1)).data("target");
// console.log(id);
// var itemId = $(id).attr("class");
// console.log(this.className);
