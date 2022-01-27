import './App.css';
import Card from "./Card";
import Exercise from "./Exercise";
import MusicalEx from "./MusicalEx";

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
