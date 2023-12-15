import "./App.css";
import Todo from "./components/Todo";
import "bootstrap/dist/css/bootstrap.min.css"
import Head from "./components/Head";
import CounterText from "./components/CounterText";
import Buttons from "./Buttons";
function App() {
  return (
    <div className="App">
      <div className="card text-center">
        <Head />
        <div className="card-body">
         <CounterText/>
         &nbsp;
          <Buttons/>
        </div>
        {/* <div className="card-footer text-body-secondary">2 days ago</div> */}
      </div>
    </div>
  );
}

export default App;
