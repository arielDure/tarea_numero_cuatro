import React from 'react'
import { Tarjeta } from './Components/Tarjeta/Tarjeta'
import hombreUno from './assets/hombre1.jpg'
import hombreDos from './assets/hombre2.jpg'
import hombreTres from './assets/hombre3.jpg'
import './app.css'

function App() {

  return (
    <div className='contenedor-tarjetas'>
      <Tarjeta 
      name= "Ariel Duré"
      imagen= {hombreUno}
      profesion="Mantenimiento General"
      descripcion="Pertenezco al equipo de mantenimiento de Puente Hns."
      />
      <Tarjeta 
      name= "Joel Verón"
      imagen={hombreDos}
      profesion="Electricista"
      descripcion="Poseo la matricula de electricista, ejerzo hace 12 años en una empresa"
      />
      <Tarjeta 
      name= "Nicolas Rodriguez"
      imagen={hombreTres}
      profesion="Vidriero"
      descripcion="Pertenezco al equipo de colocación de cristales en WinGlass."
      />
    </div>
  )
}

export default App
