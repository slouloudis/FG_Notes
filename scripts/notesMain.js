
const textArea = document.getElementById('text-area');
    
// check if there is saved text in local storage
if (localStorage.getItem('text')) {
  // set the text area value to the saved text
  textArea.value = localStorage.getItem('text');
}

// add an event listener to the text area
textArea.addEventListener('input', () => {
  // save the text to local storage
  localStorage.setItem('text', textArea.value);
});