import './App.css';
import Card from "./components/Card";
import Exercise from "./components/Exercise";
import MusicalEx from "./components/MusicalEx";

function App() {
  return (
    <div className="App">
      <div className="cardsContainer">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="cardsContainer">
        <Card></Card>
        <Card></Card>
      </div>
      <div className="exerciseContainer">
          <Exercise></Exercise>
      </div>
      <MusicalEx></MusicalEx>
    </div>
  );
}

export default App;
