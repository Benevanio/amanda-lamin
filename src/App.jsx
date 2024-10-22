// src/App.jsx
import styles from './App.module.css';
import { About } from './components/about/about';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';
import { Hero } from './components/hero/Hero';
import { Navbar } from './components/navbar/Navbar';

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <div id="hero">
        <Hero />
      </div>
      <div id="sobre">
        <About />
      </div> 
     <div id="contato">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default App;
