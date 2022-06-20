import React from 'react';
import Footer from '../SharePages/Footer';
import About from './About';
import Banner from './Banner/Banner';
import BussnessSumary from './BussnessSumary';
import Contact from './Contact/Contact';
import Items from './Items/Items/Items';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Items></Items>
          <BussnessSumary></BussnessSumary>
          <Contact></Contact>
          <About></About>
        
          <Footer></Footer>

        </div>
    );
};

export default Home;