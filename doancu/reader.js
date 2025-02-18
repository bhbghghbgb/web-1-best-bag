// Dinh Chien
// chuyển trang
var index = 0;
var arr_img = [
  "images/anhnen.jpg",
  "images/bao.jpg",
  "images/block.jpg",
  "images/chien.jpg",
  "images/cover-1.jpg",
  "images/cover-2.jpg",
  "images/cover-3.jpg",
  "images/cover-4.jpg",
  "images/cover-5.jpg",
  "images/cuong.jpg",
  "images/duong.jpg",
  "images/folow.jpg",
  "images/meocon.webp",
  "images/message.jpg",
  "images/report.jpg",
  "images/sgu.png",
];
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("img").src = arr_img[0];
  document
    .getElementsByClassName("main")[0]
    .addEventListener("wheel", function (e) {
      if (e.deltaX > 0 || e.deltaY > 0) next();
      else back();
    });
});
function next() {
  if (index == arr_img.length - 1) {
    // alert(" Hết!");
    index = 0;
  } else {
    index++;
  }
  document.getElementById("img").src = arr_img[index];
}
function back() {
  if (index < 1) {
    // alert("Error");
    index = arr_img.length - 1;
  } else {
    index--;
  }
  document.getElementById("img").src = arr_img[index];
}
//controller
var zoomin = 1.0;
var zoomout = 1.0;
document.addEventListener("keydown", (e) => {
  // console.log(keypressed)
  switch (e.key.toLowerCase()) {
    case "w":
    case "arrowup":
      window.scrollBy({
        top: -200,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "s":
    case "arrowdown":
      window.scrollBy({
        top: 200,
        left: 0,
        behavior: "smooth",
      });
      break;
    case "a":
    case "arrowleft":
      back();
      break;
    case "d":
    case "arrowright":
      next();
      break;
    case "equal":
      document.body.style.zoom = zoomin = zoomin + 0.2;
      break;
    case "minus":
      document.body.style.zoom = zoomout = zoomout - 0.2;

      break;
    case "u":
      topFunction();
      break;
  }
});

// button on top
//scroll
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("button_top").style.display = "block";
  } else {
    document.getElementById("button_top").style.display = "none";
  }
}

// click and on top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// click home
function first() {
  document.getElementById("img").src = arr_img[0];
  index = 0;
}
// clock last
function last() {
  var length = arr_img.length - 1;
  document.getElementById("img").src = arr_img[length];
  index = length;
}
