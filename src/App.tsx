// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <>
    <NavBar />
    <ParallaxProvider>
      <Home />
    </ParallaxProvider>
    </>
  );
}


export default App
