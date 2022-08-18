import React from 'react';

function food() {
    return (
        <div>
            <section className="white-section" id="pricing">

                <h2 className="section-heading">A Plan for Every Dog's Needs</h2>
                <p>Simple and affordable price plans for your and your dog.</p>

                <div className="row">

                    <div className="pricing-column col-lg-4 col-md-6">
                        <div className="card">
                            <img src='/img/dogs/1.png' className="card-img-top" alt="dog1" />
                            <div className="card-body">
                                <h2 className="price-text">Free</h2>
                                <p>5 Matches Per Day</p>
                                <p>10 Messages Per Day</p>
                                <p>Unlimited App Usage</p>
                                <button className="btn btn-lg btn-block btn-outline-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-column col-lg-4 col-md-6">
                        <div className="card">
                            <img src='/img/dogs/2.png' className="card-img-top" alt="dog1" />
                            <div className="card-body">
                                <h2 className="price-text">$49 / mo</h2>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>
                            </div>
                        </div>
                    </div>

                    <div className="pricing-column col-lg-4">
                        <div className="card">
                            <img src='/img/dogs/3.png' className="card-img-top" alt="dog1" />
                            <div className="card-body">
                                <h2 className="price-text">$99 / mo</h2>
                                <p>Pirority Listing</p>
                                <p>Unlimited Matches</p>
                                <p>Unlimited Messages</p>
                                <p>Unlimited App Usage</p>
                                <button className="btn btn-lg btn-block btn-dark" type="button">Sign Up</button>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default food