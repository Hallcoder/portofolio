import React from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navBar';
import Info from './../components/info';
function Home() {
    return (
        <React.Fragment>
            <div className="h-full ">
            <NavBar />
            <Info />
            <Footer />
            </div>
            
        </React.Fragment>
     );
}

export default Home;