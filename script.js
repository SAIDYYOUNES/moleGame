let current =[];
var desiredSrc = "/img/hungry.png";
function moleTransition(rand) {
    current.push(rand);
    var hole = document.querySelector("#hole-" + rand+" img");
    hole.parentNode.addEventListener("click", function() {
        // console.log(new URL(hole.src).pathname);
        if(new URL(hole.src).pathname === desiredSrc){
            var section = document.querySelector("#cursor");
            clearInterval(intervalId);
            feedMole(rand);
            section.classList.remove('costum-cursor')
            section.classList.add('cursor-worm')
            setTimeout(function() {
                section.classList.remove('cursor-worm')
                section.classList.add('costum-cursor')
              }, 800);
          }
      });
    var images = ["","./img/hungry.png","./img/sad.png", "./img/leaving.png" ,""];
    var currentIndex = 0;
    var intervalId = setInterval(function() {
        hole.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
         if (currentIndex === 0) {
    clearInterval(intervalId);
    var index = current.indexOf(rand);
    current.splice(index, 1);
        }
    }, 1300); 
}
function random() {
    var rand1 = Math.floor(Math.random() * 10);
     if (current.includes(rand1)) {
        
        random()
        // console.log('skipped');
        
      }else{

          moleTransition(rand1);
      }


}

var intervalId = setInterval(function(){
 
    random();

}, 1000);
window.addEventListener("beforeunload", function () {
    clearInterval(intervalId);
});

function feedMole(rand){
var hole = document.querySelector("#hole-" + rand+" img");
var worm = document.querySelector("#worm");
var currentWidth = parseFloat(worm.style.width);
currentWidth += 5;
worm.style.width = currentWidth + "%";
// var worm = document.getElementById("worm");
if (worm.style.width === "100%") {
  var modal = document.getElementById("myModal");
  modal.style.display = "block";

}

var images = ["./img/fed.png", "./img/leaving.png" ,""];
var currentIndex = 0;
var intervalId = setInterval(function() {
    hole.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
     if (currentIndex === 0) {
clearInterval(intervalId);

    }
}, 800); 
}



function closeModal() {
  var modal = document.getElementById("myModal");
  modal.style.display = "none";
}
