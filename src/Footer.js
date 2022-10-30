import React from "react";


const Footer = () => {
    return (
        <footer className="d-flex container flex-wrap justify-content-between align-items-center py-3 my-4 custom-footer">
            <p className="col-md-4 mb-0 text-muted">TerraGate, Richardson, TX</p>
    
            <a href="/"
                className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
                {/* <svg className="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"/></svg> */}
                <img className="bi me-2" src="img\project-logo.svg" width="40" height="32" alt="Logo" />
            </a>
    
            <ul className="nav col-md-4 justify-content-end">
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">About</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">FAQs</a></li>
                <li className="nav-item"><a href="#" className="nav-link px-2 text-muted">Contact Us</a></li>
            </ul>
        </footer>
    );
}

export default Footer