import React from 'react';
import Footer from '../SharePages/Footer';
import About from './About';
import Banner from './Banner/Banner';
import BussnessSumary from './BussnessSumary';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BussnessSumary></BussnessSumary>
          <Contact></Contact>
          <About></About>
          <Footer></Footer>

        </div>
    );
};

export default Home;