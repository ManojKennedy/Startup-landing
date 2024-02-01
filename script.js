let x = 0;
let y = 0;
function right(){
    if(x < 430){
        x = x + 210
        document.querySelector(".clients").style.transform = `translateX(${-x}px)`
        document.querySelector(".clients").style.transition = "0.5s all"
    }
    console.log(x)
    if(x > 430){
        document.querySelector(".clients").style.transform = `translateX(${-660}px)`
        document.querySelector(".clients").style.transition = "0.5s all"
        document.querySelector(".direction1").style.fontSize = "40px"
        document.querySelector(".direction1").style.color = "black"
        document.querySelector(".direction2").style.fontSize = "30px"
        document.querySelector(".direction2").style.color = "gray"
    }
}
function left(){
    if(x > 0){
        x = x - 210
        document.querySelector(".clients").style.transform =  `translateX(${-x}px)`
        document.querySelector(".clients").style.transition = "0.5s all"
    }
    if (x==0){
        document.querySelector(".direction2").style.fontSize = "40px"
        document.querySelector(".direction2").style.color = "black"
        document.querySelector(".direction1").style.fontSize = "30px"
        document.querySelector(".direction1").style.color = "gray"
    }
    console.log(x)
}

document.addEventListener("DOMContentLoaded", function () {
    var header = document.getElementById("header");

    window.onscroll = function () {
      // Get the current scroll position
    var scrollPos = document.documentElement.scrollTop || document.body.scrollTop;

      // Change the header background color based on the scroll position
    if (scrollPos > 50) {
        header.style.backgroundColor = "white";
    } else {
        header.style.backgroundColor = "transparent";
    }
    };
});


