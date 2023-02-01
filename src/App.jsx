import './App.css';
import { useState } from 'react';
import Tarjeta from './tarjeta'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {


  // const apiclima = fetch(`https://run.mocky.io/v3/c16a14cb-ee7b-40be-a733-5d5162eaaf57`)
  const handleInput = (event) => {
    setCiudad(event.target.value)
  }

  const [clima, setClima] = useState()
  const [ciudad, setCiudad] = useState()

  const buscarCiudad = async () => {

    // const apiClima = await (await fetch(`https://run.mocky.io/v3/7f20945b-98c6-4236-bc5a-752bfa2d3496`)).json()
    const apiClima = await (await fetch(`https://run.mocky.io/v3/9d56266c-be4a-439b-94df-59e2deded5f6`)).json()
    const result = apiClima.Regiones.filter((region) => region.region.includes(ciudad))[0]
    setClima(result)
  }

  const buscar = async () => {
    // const apiClima = await (await fetch(`https://run.mocky.io/v3/9becbdaf-4d7e-4fac-aea8-afded071c172`)).json()
    // const apiClima = await (await fetch(`https://run.mocky.io/v3/a425d703-ea12-4f6f-ac93-89e31e13f9f4`)).json()
    // const apiClima = await (await fetch(`https://run.mocky.io/v3/7f20945b-98c6-4236-bc5a-752bfa2d3496`)).json()
    const apiClima = await (await fetch(`https://run.mocky.io/v3/9d56266c-be4a-439b-94df-59e2deded5f6`)).json()

    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords.latitude);
      console.log(position.coords.longitude);

      const result = apiClima.Regiones.filter((region) => position.coords.latitude === region.latitud && position.coords.longitude === region.longitud)[0];

      setClima(result)

    });
  }


  return (
    <div className="App">
      <header className="App-header">
        <form>
          <label className='h1 mb-3'>Pantalla Inicial</label>
          <div className='input-group mb-4'>
            <input className='form-control' type="text" name="ciudad" id='ciudad' placeholder='Ingrese Ciudad' onChange={handleInput} />
            <input className='btn btn-primary' type="button" name='ubi' value="Usar mi ubicación" onClick={buscar} />
            <input className='btn btn-success' type="button" name='envi' value="Buscar" onClick={buscarCiudad} />
          </div>
        </form>
        <form>
          <h6>Región: {!!clima ? clima.region : "No hay una región para mostrar o la región es inválida"}</h6>
          <div className='input-group mt-4'>
            {!!clima &&
              clima.next_days.map((day, key) => {
                return (<Tarjeta days={day} key={key} />)
              })
            }
          </div>
        </form>

      </header >
    </div >
  );
}

export default App;
