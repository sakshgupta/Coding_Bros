import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function footer() {
    const showInMapClicked = () => {
        window.open("https://maps.google.com?q=" + 28.6417 + "," + 77.1225);
    };

    return (
        <div>
            <section className="colored-section" id="footer">
                <div className="container-fluid-footer">

                    {/* Title */}

                    <div className="row">
                        <div className="col-5">
                            <h1 className="footer-heading">For questions and suggestions</h1>
                            <div className="footer_sub_heading footer_icon" onClick={() => navigator.clipboard.writeText('pawshelterservice@gmail.com')}>
                                <FontAwesomeIcon icon="fa-regular fa-envelope" className="footer_icons" />
                                pawshelterservice@gmail.com
                            </div>
                            <div className="footer_sub_heading footer_icon" onClick={() => navigator.clipboard.writeText('+919851743471')}>
                                <FontAwesomeIcon icon="fa-solid fa-phone" className="footer_icons" />
                                +919851743471
                            </div>
                        </div>
                        <div className="col-5">
                            <h1 className="footer-heading">We are waiting for your visit</h1>
                            <div className="footer_sub_heading footer_icon" onClick={showInMapClicked}>
                                <FontAwesomeIcon icon="fa-solid fa-location-arrow" className="footer_icons" />
                                Rajouri Garden, New Delhi, 110027
                            </div>
                        </div>
                        <div className="col-2">
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default footer