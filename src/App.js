import "./app.css";
import Row from "./components/Row";
import requests from "./requests";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />
      {/* Banner */}
      <Banner />
      {requests.map(genre => {
        return <Row key={genre.url} data={genre} />;
      })}
    </div>
  );
}

export default App;
