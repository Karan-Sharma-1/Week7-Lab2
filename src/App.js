
    // App.js
function Hello() {
  return <p>Hello, Karan!</p>;
}

// App.js
function Bye() {
  return <p>Goodbye, Sharma!</p>;
}

// App.js
function App() {
  return (
    <div>
      <Hello />
      <Hello />
      <Bye />
      <Bye />
    </div>
  );
}

export default App;