import React from 'react'

function navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <img className="navbar_logo" src="./logo512.png" />
                <a className="navbar-brand" href="#title">PAW - Shelter</a>

                <button className="navbar-toggler all_btn" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02">
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
                        <li className="nav-item">
                            <a className="nav-link" href="/healthcare">HealthCare</a>
                        </li>
                    </ul>

                </div>
            </nav>
        </div>
    )
}

export default navbar