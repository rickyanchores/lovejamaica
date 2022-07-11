import React from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Nav from './components/Nav/Nav';
import About from './sections/About/About';
import Footer from './sections/Footer/Footer';
import Home from './sections/Home/Home';
import Projects from './sections/Projects/Projects';
import Ui from './tests/Ui';

const App = () => {
  return (
    <div className='App'>
        <Router>
            {/* <Nav /> */}
            <Routes>
                <Route exact component={Home}/>
                <Route path='/test' element={<Ui/>}/>
            </Routes>
            {/* <Home />
            <About />
            <Projects />
            <Footer /> */}
        </Router>
    </div>
  )
}

export default App;