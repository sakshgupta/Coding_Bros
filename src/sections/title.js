import React from 'react';
import AboutUs from '../sections/about'
import Footer from '../sections/footer'
import Article from '../sections/article'
import Shop from '../sections/shop'
import Form1 from '../components/shelter_form'
import Form2 from '../components/info_form'
import Navbar from '../components/navbar'

function title() {
    return (
        <div>
            <section className="colored-section" id="title">

                <div className="container-fluid">

                    {/* Nav Bar */}

                    <Navbar/>

                    {/* Title */}

                    <div className="row">

                        <div className="col-lg-6">
                            <h1 className="big-heading">Not only people need a house</h1>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor quam id leo dignissim, ut efficitur elit interdum. Proin fringilla nisl ac convallis mollis. Curabitur et justo efficitur, consectetur velit sit amet, pharetra orci. Nulla molestie velit vel leo ornare, ut tristique sapien scelerisque.
                            </div>
                            <a href="#footer">
                                <button type="button" className="btn all_btn btn-dark btn-lg download-button">Contact Us</button>
                            </a>
                        </div>

                    </div>

                </div>

            </section>
            <AboutUs />
            <Form1 />
            <Form2 />
            <Article />
            <Shop />
            <Footer />
        </div>
        
    )
}

export default title;