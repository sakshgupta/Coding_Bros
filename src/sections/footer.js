import React from 'react'

function footer() {
    return (
        <div>
            <section className="colored-section" id="footer">
                <div className="container-fluid">

                    {/* Title */}

                    <div className="row">
                        <div className="col-4">
                            <h1 className="footer-heading">For questions and suggestions</h1>
                            <div className = "footer_sub_heading">
                                pawshelterservice@gmail.com
                            </div>
                            <div className = "footer_sub_heading">
                                +919851743471
                            </div>
                        </div>
                        <div className="col-4">
                            <h1 className="footer-heading">We are waiting for your visit</h1>
                            <div className = "footer_sub_heading">
                                Rajouri Garden, New Delhi, 110027
                            </div>
                        </div>
                        <div className="col-4">
                            
                        </div>
                    </div>

                </div>
            </section>
        </div>
    )
}

export default footer