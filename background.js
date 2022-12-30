// // Find all question elements on the page
// const questionElements = document.querySelectorAll('.question');

// // Loop through each question element
// questionElements.forEach(questionElement => {
//   // Find the answer element that belongs to the question
//   const answerElement = questionElement.querySelector('.answer');

//   // Create a button element
//   const buttonElement = document.createElement('button');
//   buttonElement.innerText = '+';

//   // Add a click event listener to the button element
//   buttonElement.addEventListener('click', () => {
//     // Toggle the visibility of the answer element
//     answerElement.classList.toggle('collapsed');
//   });

//   // Insert the button element into the question element
//   questionElement.insertBefore(buttonElement, questionElement.firstChild);
// });

// Find all answer elements on the page
// const answerElements = document.querySelectorAll('div:has(svg)');

// Loop through each answer element
// answerElements.forEach(element => {
    // Find the question element that the answer belongs to
    // const questionElement = element.closest('.question');

    // Add a click event listener to the question element
    //questionElement.addEventListener('click', () => {
    // Toggle the visibility of the answer element
    //  element.classList.toggle('collapsed');
    //});
// });

function start() {
    // Find all question elements on the page
    const answerElements = document.querySelectorAll('.bg-gray-50');
    // Loop through each answer element
    answerElements.forEach(element => {
        // Toggle the visibility of the answer element
        element.style.display = 'none';
    });

    // .bg-gray-800
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: start
        });
    }
});