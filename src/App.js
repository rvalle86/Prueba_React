import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <form>
          <label>Pantalla Inicial</label><br></br>
            <input type="text" name="ciudad" placeholder='Ingrese Ciudad' />
          <input type="submit" name='ubi' value="Usar mi ubicación" />
          <input type="submit" name='envi' value="Buscar" />
          
        </form>
      </header>
    </div>
  );
}

export default App;
