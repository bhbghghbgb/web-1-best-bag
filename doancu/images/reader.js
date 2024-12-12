// Dinh Chien
// chuyển trang
var index = 0;
var arr_img = ["anhnen.jpg","bao.jpg","block.jpg","chien.jpg","cover-1.jpg","cover-2.jpg","cover-3.jpg","cover-4.jpg","cover-5.jpg","cuong.jpg","desktop.ini","duong.jpg","folow.jpg","meocon.webp","message.jpg","report.jpg","sgu.png"];
function next()
{
    if ( index == (arr_img.length -1))
    {
        // alert(" Hết!");
        window.location.href = "manga.html";
    }
    else 
    {
        index++;
    }
    document.getElementById("img").src= arr_img[index];
}
function back()
{
    if ( index < 1)
    {
        // alert("Error");
        window.location.href = "manga.html";
    }
    else {
    index--;

    }
    document.getElementById("img").src= arr_img[index];
}
//controller
var zoomin = 1.0;
var zoomout =1.0;
document.addEventListener('keydown', e => {
  // console.log(keypressed)
  switch(e.key.toLowerCase())
  {
    case "w":
      case "arrowup":
      window.scrollBy({
        top: -200,
        left: 0,
        behavior: 'smooth'
      });
    break;
    case "s":
      case"arrowdown":
      window.scrollBy({
        top: 200,
        left: 0,
        behavior: 'smooth'
      });
    break;
    case "a":
      case"arrowleft":
    back();
    break;
    case "d":
      case"arrowright":
    next();
    break;
    case "equal":
      document.body.style.zoom = zoomin = zoomin + 0.2;
    break;
    case 'minus':
      document.body.style.zoom = zoomout = zoomout - 0.2;

    break;
    case 'u':
      topFunction();
    break;
  
  }
})
// button on top 
//scroll
window.onscroll = function() {scrollFunction()};
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
function first()
{
  document.getElementById("img").src= arr_img[0];
}
// clock last 
var length = arr_img.length -1;
function last()
{
  document.getElementById("img").src= arr_img[length];
}
