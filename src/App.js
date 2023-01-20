//import logo from './logo.svg';
import './App.css';
//import Greet from './components/Greeting';
import {Greet} from './components/Greeting';
import Welome from './components/Welcome';
import Mystatment from './components/Hello';
function App() {
  return (
    <div className="App">
      <Greet name="Khubaib khan" lastname="Islam">
        <button>
          Action
        </button>
      </Greet>
      <Greet name="Noman" lastname="Alexar" />
      <Welome></Welome>
      <Welome name="Khubaib" lastname="Khan"></Welome>
      <Mystatment></Mystatment>
    </div>
  );
}

export default App;
