let imgElements = document.getElementsByTagName("img");

// constructor for character 
function Character(name,src,href) {
  this.name = name;
  this.src = src;
  this.href = href;
  Character.allChar.push(this)
}

Character.allChar = [];
Character.lastClicked = []; // empty array that stores the last clicked links. 

function renderChar() {
  for (let i = 0; i < Character.lastClicked.length; i++) { // // gives the last clicked images prio in the render order.  
    if (i >= imgElements.length) {
      break;
    }
    imgElements[i].src = Character.lastClicked[i].src;
  }
  for (let i = 0; i < Character.allChar.length; i++) { // give a tag
    let a = document.createElement("a");
    // a.href = Character.allChar[i - Character.lastClicked.length].href;
    imgElements[i].parentNode.insertBefore(a, imgElements[i]);
    a.appendChild(imgElements[i]);
  }
  for (let i = 0; i < Character.allChar.length; i++) { // give imgs
        imgElements[i].src = Character.allChar[i].src
  }
}

// would need to do some local storage for this maybe???
// Add click event listener to all img tags
for (let i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener("click", function() {
    var src = this.src;
    // Check if the image is already in the lastClicked array
    var index = Character.lastClicked.findIndex(function(char) {
      return char.src === src;
    });
    // If it's not in the array, add it
    if (index === -1) {
      Character.lastClicked.push(Character.allChar.find(function(char) {return char.src === src; }));
      // If the array has more than 3 images, remove the oldest one
      if (Character.lastClicked.length > 3) {
        Character.lastClicked.shift();
      }
      // Update the displayed images
      renderChar();
    }
  });
}


// sorry this is gross but i dont have the mental energy to refactor. 
new Character("Armor King", "./imgs/aking.png","armourking.html")
new Character("Akuma", "./imgs/akuma.png","akuma.html")
new Character("Alisa", "./imgs/alisa.png","alisa.html")
new Character("Anna", "./imgs/anna.png","anna.html")
new Character("Asuka", "./imgs/ask.png","asuka.html")
new Character("Bob", "./imgs/bob.png","bob.html")
new Character("Bryan", "./imgs/bryan.png", "bryan.html")
new Character("Claudio", "./imgs/claudio.png", "claudio.html")
new Character("Dragunov", "./imgs/drag.png", "dragunov.html")
new Character("Devil Jin", "./imgs/dvjin.png", "deviljin.html")
new Character("Eddy", "./imgs/eddy.png", "eddy.html")
new Character("Eliza", "./imgs/eliza.png", "eliza.html")
new Character("Fahk", "./imgs/fahk.png", "fahk.html")
new Character("Feng", "./imgs/feng.png", "feng.html")
new Character("Geese", "./imgs/geese.png", "geese.html")
new Character("Gigas", "./imgs/gigas.png", "gigas.html")
new Character("Gunbaru", "./imgs/gunbaru.png", "gunbaru.html")
new Character("Hei", "./imgs/hei.png", "hei.html")
new Character("Hwoarang", "./imgs/hwoarang.png", "hwoarang.html")
new Character("Jack", "./imgs/jack.png", "jack.html")
new Character("Jin", "./imgs/jin.png", "jin.html")
new Character("Josie", "./imgs/josie.png", "josie.html")
new Character("Julia", "./imgs/julia.png", "julia.html")
new Character("Kata", "./imgs/kata.png", "kata.html")
new Character("Kazumi", "./imgs/kazumi.png", "kazumi.html")
new Character("Kazuya", "./imgs/kazuya.png", "kazuya.html")
new Character("King", "./imgs/king.png", "king.html")
new Character("Kuma", "./imgs/kuma.png", "kuma.html")
new Character("Kuni", "./imgs/kuni.png", "kuni.html")
new Character("Lars", "./imgs/lars.png", "lars.html")
new Character("Law", "./imgs/law.png", "law.html")
new Character("Lee", "./imgs/lee.png", "lee.html")
new Character("Lei", "./imgs/lei.png", "lei.html")
new Character("Leo", "./imgs/leo.png", "leo.html")
new Character("Leroy", "./imgs/leroy.png", "leroy.html")
new Character("Lidia", "./imgs/lidia.png", "lidia.html")
new Character("Lili", "./imgs/lili.png", "lili.html")
new Character("Luckyc", "./imgs/luckyc.png", "luckyc.html")
new Character("Marduk", "./imgs/marduk.png", "marduk.html")
new Character("Maven", "./imgs/maven.png", "maven.html")
new Character("Miguel", "./imgs/miguel.png", "miguel.html")
new Character("Negan", "./imgs/negan.png", "negan.html")
new Character("Nina", "./imgs/nina.png", "nina.html")
new Character("Noctis", "./imgs/noctis.png", "noctis.html")
new Character("Panda1", "./imgs/panda1.png", "panda1.html")
new Character("Paul", "./imgs/paul.png", "paul.html")
new Character("Shaheen", "./imgs/shaheen.png", "shaheen.html")
new Character("Steve", "./imgs/steve.png", "steve.html")
new Character("Xiaoyu", "./imgs/xiaoyu.png", "xiaoyu.html")
new Character("Yoshi", "./imgs/yoshi.png", "yoshi.html")
new Character("Zafina", "./imgs/zafina.png", "zafina.html")


// Render all images initially
renderChar();