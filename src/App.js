import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import JobSearch from "./components/JobSearch";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <JobSearch />
    </div>
  );
}

export default App;
