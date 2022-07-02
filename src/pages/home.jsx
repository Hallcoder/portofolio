import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Testimonial from '../components/testimonial';
import Info from './../components/info';
function Home() {
    return (
        <React.Fragment>
            <div className="h-full flex flex-col justify-around">
            <NavBar />
            <Info />
            <Testimonial />
            <Footer />
            </div>
        </React.Fragment>
     );
}

export default Home;