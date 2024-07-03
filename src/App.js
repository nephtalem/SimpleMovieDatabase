import "./App.css";
import Movies from "./movies";
import Nav from "./components/nav";

function App() {
  return (
    <>
      <Nav />
      <main className="container">
        <Movies />
      </main>
    </>
  );
}

export default App;
