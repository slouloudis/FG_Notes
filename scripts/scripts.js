// will be used way later to check if a character was recently clicked on, and if so, show the character on the landing page. 
let recent = 0;
// constructor for character (for landing page, will need another constructor for notes)
function Character(name,src) {
  this.name = name;
  this.recent = recent;
  this.src = src;
  this.href = href; // want the link?
  Character.allCharImg.push(this.src)
}

Character.allCharImg = [];
// landing page img constructor. 

var imgs = document.getElementsByTagName("img")
console.log(imgs)
function giveID(img) {
  Array.prototype.forEach.call(imgs => {
    // img index add .src? 
    for (let i = 0; i < imgs.length; i++) {

    }}
    )
}
// assign all images an Id assign to variable

// create array of all images?

// 


// for each img id, assign.src by looping through allCharImg array. 

// generate links and img

new Character("Asuka", "./imgs/ask.png")