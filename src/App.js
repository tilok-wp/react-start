import './App.css'
import Book from './Components/Book/Book';
import Device from './Components/Device/Device';


function App() {
  return (
    <div className="App">
      <Device name="Laptop" price="15000"></Device>
      <Book></Book>
    </div>
  );
}

export default App;
