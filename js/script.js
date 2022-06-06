window.onload = ()=>{
    // $(selector).countMe(delay,speed)
    $("#num1").countMe(40,65);
    $("#num2").countMe(30, 30);
    $("#num3").countMe(40, 50);
 }

// head start


  //  scrolltop
$(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 600) {
        $("#topbtn").fadeIn();
      } else {
        $("#topbtn").fadeOut();
      }
    });
  
    $("#topbtn").click(function () {
      $("html ,body").animate(
        {
          scrollTop: 0,
        },
        800
      );
    });
  });
  
  // preloader
  
  let loader = document.getElementById("preloader");
  window.addEventListener("load", function () {
    loader.style.display = "none";
  });