// Add Event Handler and reference
document.querySelector('button').addEventListener('click', handleSubmitForm);

// Add Function to handle button click
// generates random color and uses it to style background and outputs text
// Change button background color when clicked
function handleSubmitForm(e) {
    e.preventDefault();
    console.log("Clicked")
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
    document.getElementById('main').style.backgroundColor = "#" + randomColor;
    document.getElementById('button').style.backgroundColor = "#" + randomColor;
    bodytext.innerHTML = '#' + randomColor;
}
