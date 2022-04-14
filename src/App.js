import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import About from './pages/About';
import DiveTypeInfo from './pages/DiveTypeInfo';
import { DiveLogProvider } from './context/divelog/DiveLogContext'

function App() {
  return (
    <DiveLogProvider>
      <Router>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/divetypeinfo' element={<DiveTypeInfo />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </DiveLogProvider>
  );
}

export default App;
