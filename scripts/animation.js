
// character img card needs a name, a src img for the card, and its link to the next page in the website. 
// each of the character pages have a forum. on the side bar should be the formatting, and then a forum for the user to write down there own notes. 
// There will also be a section to select a vs character mode to look into specific matchups. Will display a list of the other characters common moves?

// will need to write a function to change string into proper formating?
// d/b 1+2, 1+2*, qcf ,3 ,4 ,3, FC d/b+3, WS 2 , 1 : 1, 3 < 4, ff1. 
// eg create image for qcf, WS, ff1

//---------- ANIMATION ---------------------
// gsap.to(".true-inner-shadow", {
//   top: 10,
//   duration: 1,
//   delay: 0.5,
// });

gsap.fromTo("svg",
{y: -5},
{y: 4,
repeat: -1,
yoyo:true 
})
