import React from 'react'
import './navbarcss.css';
export default function Navbar() {
    return (
        <>

            <div>
                <div className="container my-3">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <div className="container-fluid">
                            {/* <a className="navbar-brand" href="#">Navbar</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button> */}
                            <div className="collapse navbar-collapse" id="navbarnav">
                                <ul className="navbar-nav ">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page" href="#">HOME</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">ABOUT</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">COMMITTEE</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href='#'>PROGRAMS</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " href='#'>REGISTRATION</a>
                                    </li>
                                    <li className="nav-item ">
                                        <a className="nav-link " href='#'>PATRONS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                </div>
            </>
            )
}
