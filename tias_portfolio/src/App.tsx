import { Outlet } from 'react-router-dom';
import Header from './components/header';
import Footer from './components/footer'


function App() {
  return (
    <>
    <header>
      <Header />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
    </>
  )
}

export default App
