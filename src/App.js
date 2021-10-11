import logo from './logo.svg';
import Bidder from './Bidder';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>MATT</h1>
      <h2>Maximizing Artist Turnout and Takings</h2>
      <Bidder/>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0FJ3sYcoLwA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <footer>
        You can learn more about the idea behind this type of auction <a href="https://roamresearch.com/#/app/capabul/page/Z72zJ8WKS">here</a>.
      </footer>
    </div>
  );
}

export default App;
