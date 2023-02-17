// Get the unique identifier from the URL
let identifier = window.location.pathname.split('/')[2];
let split2 = identifier.split('.')[0]
console.log(split2)

// Generate a unique key for the text area data
let key = 'text-' + split2;

let textArea = document.getElementById(split2 + '-text');
console.log(textArea)

// check if there is saved text in local storage
if (localStorage.getItem(key)) {
  // set the text area value to the saved text
  textArea.value = localStorage.getItem(key);
}

// add an event listener to the text area
textArea.addEventListener('input', () => {
  // save the text to local storage
  localStorage.setItem(key, textArea.value);
});

