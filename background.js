function start() {
    // Find all answer elements on the page
    const answerElements = document.querySelectorAll('.bg-gray-50');
    // Loop through each answer element
    answerElements.forEach(element => {
        // Toggle the visibility of the answer element
        element.style.display = 'none';
    });
}

chrome.action.onClicked.addListener((tab) => {
    if (!tab.url.includes("chrome://")) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            function: start
        });
    }
});