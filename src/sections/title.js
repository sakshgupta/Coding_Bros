import React from 'react';


function title() {
    return (
        <div>
            <section class="colored-section" id="title">
                {/* <img src='/img/only title_cleanup.png' alt="title_image" /> */}

                <div class="container-fluid">

                    {/* Nav Bar */}

                    <nav class="navbar navbar-expand-lg navbar-dark">

                        <a class="navbar-brand" href="">PAWggers</a>

                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">

                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item">
                                    <a class="nav-link" href="#footer">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#pricing">Article</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#cta">Shop</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#cta">About Us</a>
                                </li>
                            </ul>

                        </div>
                    </nav>

                    {/* Title */}

                    <div class="row">

                        <div class="col-lg-6">
                            <h1 class="big-heading">Not only people need a house</h1>
                            <div>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris porttitor quam id leo dignissim, ut efficitur elit interdum. Proin fringilla nisl ac convallis mollis. Curabitur et justo efficitur, consectetur velit sit amet, pharetra orci. Nulla molestie velit vel leo ornare, ut tristique sapien scelerisque.
                            </div>
                            <button type="button" class="btn btn-dark btn-lg download-button">Contact Us</button>
                        </div>

                    </div>

                </div>

            </section>
        </div>
    )
}

export default title;