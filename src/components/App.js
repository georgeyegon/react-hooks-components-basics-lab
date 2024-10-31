import React from "react";

function NavBar() {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

function Home() {
  return (
    <div id="home">
      <h1>Home</h1>
    </div>
  );
}

// Define the <About> component with the ID "about"
function About() {
  return (
    <div id="about">
      <h1>About</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <NavBar />
      <Home /> {/* Render the <Home> component */}
      <About /> {/* Render the <About> component */}
    </div>
  );
}

export default App;
