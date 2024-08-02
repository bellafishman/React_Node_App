import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link  } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Articles from './components/Articles';
import Findings from './components/Findings';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import Build from './components/Build'
import Error from './components/Error';
import { FontProvider, useFont } from './FontContext'

function App() {

  return (
    <FontProvider>
      <Router>
        <NavBar />
        
        <div>
          {/* A <Routes> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />}/>
            <Route path="/index" element={<Home />}/>
            <Route path="/about" element={<About />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/build" element={<Build />} />
            <Route path="/findings" element={<Findings />} />
            <Route path="/*" element={<Error />} />
          </Routes>
        </div>
        <Contact/>
      </Router>
    </FontProvider>

  )
}

export default App
