// Home.js
import React from 'react';

const Home = () => {
    return (
        <section className="home-bg section h-100vh" id="home" style={{ backgroundColor: '#000', color: '#fff', paddingTop: '50px' }}>
            <div className="bg-overlay"></div>
            <div className="container z-index">
                <div className="row justify-content-center">
                    <div className="col-lg-12">
                        <div className="text-white text-center">
                            <h4 className="header_title"> Welcome</h4>
                            <p className=" mb-0 mt-3">
                                Welcome to Zgamer where gaming dreams come true!
                                Dive into a world of endless possibilities with our curated selection of games,
                                accessories, and hardware. Level up your gaming experience with every purchase. Start exploring now!</p>
                            <div className="header_btn">
                                <a href="" className="btn btn-outline-custom btn-rounded mt-4" style={{ color: '#fff', borderColor: '#fff' }}>Shop Now</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;
