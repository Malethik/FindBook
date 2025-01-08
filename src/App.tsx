import './App.css';
import { Header } from './components/header';
import Homepage from './components/homepage';

function App() {
  return (
     <div className="App">
      <Header title='Find a book'/>
      <Homepage />
    </div>
  );
}

export default App;
