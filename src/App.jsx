import { Routes, Route } from 'react-router';
import Main from './Layout/Main/Main';
import Inicio from './Pages/Inicio/Inicio';
import Contact from './Pages/Contact/Contact';
import Proyectos from './Pages/Proyectos/Proyectos';
import About from './Pages/About/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Inicio />} />
        <Route path='proyectos' element={<Proyectos />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />

        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
    </>
  );
}

export default App;