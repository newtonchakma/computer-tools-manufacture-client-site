import React from 'react';
import Banner from './Banner/Banner';
import BussnessSumary from './BussnessSumary';
import Contact from './Contact/Contact';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <BussnessSumary></BussnessSumary>
          <Contact></Contact>
        </div>
    );
};

export default Home;