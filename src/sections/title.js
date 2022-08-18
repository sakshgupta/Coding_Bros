import React from 'react';


function title() {
    return (
        <div>
            <section className="colored-section" id="title">

                <div className="container-fluid">

                    {/* Nav Bar */}

                    <nav className="navbar navbar-expand-lg navbar-dark">

                        <a className="navbar-brand" href="">PAW - Shelter</a>

                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <a className="nav-link" href="#title">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#articles">Article</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#shop">Shop</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#aboutus">About Us</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    {/* Title */}

                    <div className="row">

                        <div className="col-lg-6">
                            <h1 className="big-heading">Not only people need a house</h1>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor quam id leo dignissim, ut efficitur elit interdum. Proin fringilla nisl ac convallis mollis. Curabitur et justo efficitur, consectetur velit sit amet, pharetra orci. Nulla molestie velit vel leo ornare, ut tristique sapien scelerisque.
                            </div>
                            <a href="#footer">
                                <button type="button" className="btn btn-dark btn-lg download-button">Contact Us</button>
                            </a>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default title;