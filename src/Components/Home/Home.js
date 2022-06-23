import React from 'react';
import About from './About';
import Banner from './Banner/Banner';
import BussnessSumary from './BussnessSumary';
import Contact from './Contact/Contact';
import Items from './Items/Items/Items';
import UserReview from './UserReview';


const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Items></Items>
          <BussnessSumary></BussnessSumary>
           <UserReview></UserReview> 
          <Contact></Contact>
          <About></About>
        
          

        </div>
    );
};

export default Home;