// Define the initial state of the app
const state = {
    currentPage: 'default'
  };  

// Define a function that will handle the routing
function handleRoute() {
    // Get the path name from the URL
    const pathName = window.location.pathname;
  
    // Determine which page to show based on the path name
    if (pathName === '/home') {
      // Show home page content and update state
      state.currentPage = 'home';
      render();
    } else if (pathName === '/about') {
      // Show about page content and update state
      state.currentPage = 'about';
      render();
    } else {
      // Show default content and update state
      state.currentPage = 'default';
      render();
    }
  }
  
  // Call the handleRoute function when the page loads and when the URL changes
  window.addEventListener('load', handleRoute);
  window.addEventListener('popstate', handleRoute);
  
  // Define a function to change the URL and update the routing
  function navigateTo(pathName) {
    // Update the URL without reloading the page
    window.history.pushState(null, null, pathName);
  
    // Update the routing based on the new URL
    handleRoute();
  }
  
  function render() {
    const app = document.querySelector('#app');

    if (state.currentPage === 'home' || state.currentPage === 'default') {
        app.innerHTML = `
            <section class="todoapp">
                <header class="header">
                    <h1>todos</h1>
                    <input class="new-todo" placeholder="What needs to be done?" autofocus>
                </header>
                <section class="main">
                    <input id="toggle-all" class="toggle-all" type="checkbox">
                    <label for="toggle-all">Mark all as complete</label>
                    <ul class="todo-list"></ul>
                </section>
                <footer class="footer">
                    <span class="todo-count"></span>
                    <ul class="filters">
                        <li>
                            <a href="#/" class="selected">All</a>
                        </li>
                        <li>
                            <a href="#/active">Active</a>
                        </li>
                        <li>
                            <a href="#/completed">Completed</a>
                        </li>
                    </ul>
                    <button class="clear-completed">Clear completed</button>
                </footer>
            </section>
            <footer class="info">
                <p>Double-click to edit a todo</p>
                <p>Created by <a href="http://example.com">Ulriked</a></p>
                <p>Part of <a href="http://todomvc.com">TodoMVC (un-officially)</a></p>
            </footer>
        `;

        const scriptElement = document.createElement('script');
        scriptElement.type = 'module';
        scriptElement.src = 'js/app.js';
        app.appendChild(scriptElement);
        console.log("script added")
    } else if (state.currentPage === 'about') {
        app.innerHTML = `<h1>About Us</h1><p>We are a company that does stuff</p>`;
    } else {
        app.innerHTML = `<h1>Page Not Found</h1>`;
    }
}

  