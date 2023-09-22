let current =[];
var desiredSrc = "/img/hungry.png";
function moleTransition(rand) {
    current.push(rand);
    var hole = document.querySelector("#hole-" + rand+" img");
    hole.addEventListener("click", function() {
        // console.log(new URL(hole.src).pathname);
        if(new URL(hole.src).pathname === desiredSrc){
            console.log('hole.src');
            feedMole();
            return;
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
    var rand1 = Math.floor(Math.random() * 9) + 0;
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

function feedMole(){
console.log('mnamnam');
}
