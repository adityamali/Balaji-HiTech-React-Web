import './App.css';

// components import

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Hero from './components/hero/hero';
import About from './components/about/about';
import Product from './components/products/product';
import Contact from './components/contact/contact';



function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Product />
      {/* <Footer /> */}
      <Contact />
    </>
  );
}

export default App;
