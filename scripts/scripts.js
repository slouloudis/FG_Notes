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
    a.href = Character.allChar[i].href
  }
  for (let i = 0; i < Character.allChar.length; i++) { // render if no last clicked. 
    imgElements[i].src = Character.allChar[i].src
  }
}

// would need to do some local storage for this maybe???
// Add click event listener to all img tags
for (let i = 0; i < imgElements.length; i++) {
  imgElements[i].addEventListener("click", function() { 
    let src = this.src; // gets src attribute of the img clicked.
    // Check if the image is already in the lastClicked array
    let index = Character.lastClicked.findIndex(function(char) { // findIndex looks to see if the clicked img.src is shared with an an img in the lastClicked array. 
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
new Character("Armor King", "./imgs/aking.png","./charLinks/armourking.html")
new Character("Akuma", "./imgs/akuma.png","./charLinks/akuma.html")
new Character("Alisa", "./imgs/alisa.png","./charLinks/alisa.html")
new Character("Anna", "./imgs/anna.png","./charLinks/anna.html")
new Character("Asuka", "./imgs/ask.png","./charLinks/asuka.html")
new Character("Bob", "./imgs/bob.png","./charLinks/bob.html")
new Character("Bryan", "./imgs/bryan.png", "./charLinks/bryan.html")
new Character("Claudio", "./imgs/claudio.png", "./charLinks/claudio.html")
new Character("Dragunov", "./imgs/drag.png", "./charLinks/dragunov.html")
new Character("Devil Jin", "./imgs/dvjin.png", "./charLinks/deviljin.html")
new Character("Eddy", "./imgs/eddy.png", "./charLinks/eddy.html")
new Character("Eliza", "./imgs/eliza.png", "./charLinks/eliza.html")
new Character("Fahk", "./imgs/fahk.png", "./charLinks/fahk.html")
new Character("Feng", "./imgs/feng.png", "./charLinks/feng.html")
new Character("Geese", "./imgs/geese.png", "./charLinks/geese.html")
new Character("Gigas", "./imgs/gigas.png", "./charLinks/gigas.html")
new Character("Gunbaru", "./imgs/gunbaru.png", "./charLinks/gunbaru.html")
new Character("Hei", "./imgs/hei.png", "./charLinks/hei.html")
new Character("Hwoarang", "./imgs/hwoarang.png", "./charLinks/hwoarang.html")
new Character("Jack", "./imgs/jack.png", "./charLinks/jack.html")
new Character("Jin", "./imgs/jin.png", "./charLinks/jin.html")
new Character("Josie", "./imgs/josie.png", "./charLinks/josie.html")
new Character("Julia", "./imgs/julia.png", "./charLinks/julia.html")
new Character("Kata", "./imgs/kata.png", "./charLinks/kata.html")
new Character("Kazumi", "./imgs/kazumi.png", "./charLinks/kazumi.html")
new Character("Kazuya", "./imgs/kazuya.png", "./charLinks/kazuya.html")
new Character("King", "./imgs/king.png", "./charLinks/king.html")
new Character("Kuma", "./imgs/kuma.png", "./charLinks/kuma.html")
new Character("Kuni", "./imgs/kuni.png", "./charLinks/kuni.html")
new Character("Lars", "./imgs/lars.png", "./charLinks/lars.html")
new Character("Law", "./imgs/law.png", "./charLinks/law.html")
new Character("Lee", "./imgs/lee.png", "./charLinks/lee.html")
new Character("Lei", "./imgs/lei.png", "./charLinks/lei.html")
new Character("Leo", "./imgs/leo.png", "./charLinks/leo.html")
new Character("Leroy", "./imgs/leroy.png", "./charLinks/leroy.html")
new Character("Lidia", "./imgs/lidia.png", "./charLinks/lidia.html")
new Character("Lili", "./imgs/lili.png", "./charLinks/lili.html")
new Character("Luckyc", "./imgs/luckyc.png", "./charLinks/luckyc.html")
new Character("Marduk", "./imgs/marduk.png", "./charLinks/marduk.html")
new Character("Maven", "./imgs/maven.png", "./charLinks/maven.html")
new Character("Miguel", "./imgs/miguel.png", "./charLinks/miguel.html")
new Character("Negan", "./imgs/negan.png", "./charLinks/negan.html")
new Character("Nina", "./imgs/nina.png", "./charLinks/nina.html")
new Character("Noctis", "./imgs/noctis.png", "./charLinks/noctis.html")
new Character("Panda1", "./imgs/panda1.png", "./charLinks/panda1.html")
new Character("Paul", "./imgs/paul.png", "./charLinks/paul.html")
new Character("Shaheen", "./imgs/shaheen.png", "./charLinks/shaheen.html")
new Character("Steve", "./imgs/steve.png", "./charLinks/steve.html")
new Character("Xiaoyu", "./imgs/xiaoyu.png", "./charLinks/xiaoyu.html")
new Character("Yoshi", "./imgs/yoshi.png", "./charLinks/yoshi.html")
new Character("Zafina", "./imgs/zafina.png", "./charLinks/zafina.html")


// Render all images initially
renderChar();