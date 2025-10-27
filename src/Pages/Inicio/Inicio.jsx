import Banner from '../../Layout/Banner/Banner'
import Header from '../../Layout/Header/Header'
import Proyectos from '../Proyectos/Proyectos'
import About from '../About/About'
import './Inicio.css'
import Contact from '../Contact/Contact'
import Footer from '../../Layout/Footer/Footer'

export default function Inicio() {
  return (
    <section id='inicio'>

   <Header/>
   <Banner/>
   <Proyectos/>
   <About/>
   <Contact/>
   <Footer/>


    </section>

  )
}
