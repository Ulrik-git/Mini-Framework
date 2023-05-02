// Define an object to hold all the event listeners
const eventListeners = {};

// Define a function to register a new event listener
function customAddEventListener(eventName, callback) {
  if (!eventListeners[eventName]) {
    eventListeners[eventName] = [];
  }
  eventListeners[eventName].push(callback);
  document.addEventListener(eventName, callback);
}

// Define a function to trigger an event
function triggerEvent(eventType, eventOptions) {
  const event = new Event(eventType, eventOptions);
  document.dispatchEvent(event);
}

// Example usage
customAddEventListener('scroll', (eventData) => {
  console.log('scroll event triggered!');
});

customAddEventListener('click', (eventData) => {
  //console.log('click event triggered!', eventData.clientX, eventData.clientY);
});

triggerEvent('scroll', { /* event data */ });
