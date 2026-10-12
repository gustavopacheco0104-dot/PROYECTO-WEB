function Banner() {
  return (
    <section className="bg-gradient-to-r from-purple-700 via-blue-700 to-cyan-500 text-white text-center py-24 px-6">
      <h2 className="text-5xl md:text-7xl font-extrabold tracking-wider">
        GAME ZONE
      </h2>
      <p className="mt-4 text-xl text-blue-100">
        Los mejores videojuegos en un solo lugar
      </p>
      <a
        href="#juegos"
        className="inline-block mt-8 px-8 py-3 bg-white text-purple-700 font-bold rounded-full hover:scale-105 transition"
      >
        Ver juegos
      </a>
    </section>
  )
}

export default Banner