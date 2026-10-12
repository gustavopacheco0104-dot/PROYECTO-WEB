import { useState } from 'react'
import { juegos } from '../data/juegos'

function RandomGame() {
  const [juego, setJuego] = useState(null)

  const elegirAleatorio = () => {
    const indice = Math.floor(Math.random() * juegos.length)
    setJuego(juegos[indice])
  }

  return (
    <section id="aleatorio" className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-white">¿No sabes qué jugar?</h2>
      <button
        onClick={elegirAleatorio}
        className="mt-6 px-8 py-3 bg-cyan-500 text-gray-900 font-bold rounded-full hover:bg-cyan-400 hover:scale-105 transition"
      >
        🎲 Sorpréndeme
      </button>

      {juego && (
        <div className="mt-8 max-w-sm mx-auto bg-gray-800 rounded-2xl overflow-hidden shadow-lg">
          <img
            src={juego.imagen}
            alt={juego.titulo}
            className="h-48 w-full object-cover"
          />
          <div className="p-5">
            <h3 className="text-2xl font-bold text-white">{juego.titulo}</h3>
            <p className="text-gray-400">{juego.plataforma}</p>
          </div>
        </div>
      )}
    </section>
  )
}

export default RandomGame