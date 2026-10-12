import Navbar from './components/Navbar'
import Banner from './components/Banner'
import GameCard from './components/GameCard'
import RandomGame from './components/RandomGame'
import Footer from './components/Footer'
import { juegos } from './data/juegos'

function App() {
  return (
    <div className="bg-gray-900 min-h-screen">
      <Navbar />
      <Banner />

      <section id="juegos" className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-10">
          Juegos destacados
        </h2>
       <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {juegos.map((juego) => (
            <GameCard key={juego.id} {...juego} />
          ))}
        </div>
      </section>

      <RandomGame />
      <Footer />
    </div>
  )
}

export default App