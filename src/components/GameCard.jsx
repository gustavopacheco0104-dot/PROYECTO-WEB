function GameCard({ titulo, plataforma, precio, imagen }) {
  return (
    <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:-translate-y-2 transition">
      <img
        src={imagen}
        alt={titulo}
        className="h-48 w-full object-cover"
      />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-white">{titulo}</h3>
        <span className="inline-block mt-2 px-3 py-1 text-sm text-white bg-blue-500 rounded-full">
          {plataforma}
        </span>
        <p className="mt-3 text-lg font-semibold text-gray-300">{precio}</p>
        <button className="mt-4 px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition">
          Comprar
        </button>
      </div>
    </div>
  )
}

export default GameCard