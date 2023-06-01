import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Formulario from './components/formulario';


function App() {
  

  return (
    <>
    
        <Container className='my-5 main'>
        <section className='text-light'>
      <h1 className='text-center display-4 formulario'>Formulario</h1>
      <hr />
      </section>
      <Formulario></Formulario>
      </Container>
        
      
      <footer className='bg-dark text-center text-light py-4'>
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App
