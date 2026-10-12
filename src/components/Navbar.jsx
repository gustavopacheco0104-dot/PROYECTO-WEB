function Navbar() {
  return (
    <nav className="bg-gray-950 border-b border-purple-500 px-6 py-4 flex justify-between items-center sticky top-0 z-10">
      <h1 className="text-2xl font-extrabold text-purple-400">🎮 GameZone</h1>
      <div className="flex gap-6 text-gray-300">
        <a href="#juegos" className="hover:text-purple-400 transition">Juegos</a>
        <a href="#aleatorio" className="hover:text-purple-400 transition">Aleatorio</a>
      </div>
    </nav>
  )
}

export default Navbar