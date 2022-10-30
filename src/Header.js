import React, { useEffect, useState } from "react";
import Search from "./Search";

const Header = (props) => {

    const [numGuests,setNumGuests] = useState(1);
    const [numBedrooms,setNumBedrooms] = useState(1);
    const [numBathrooms,setNumBathrooms] = useState(1);

    return (
        <header className="sticky-lg-top">
            <nav className="navbar navbar-expand-lg p-3 ps-5 pe-5 custom-navbar">
                <div className="container-fluid">
    
                    <button className="btn navbar-brand" type="button" data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><img
                            src="img\project-logo.svg" alt="Logo" width="50" height="44" className="d-inline-block "/>
                        TerraGate</button>
    
    
    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
    
                    <div className="collapse navbar-collapse" id="navbarText">
                        <div className="row d-flex mx-auto my-auto col-md-5 p-2">
                            <div className="mx-auto d-flex" id="search_bar">
                                {<Search 
            filterText={props.filterText}
            setFilterText={props.setFilterText}/>}
                            </div>
                        </div>
    
                        <ul className="navbar-nav flex-row-inverse">
                            <li className="nav-item p-2 mx-auto my-auto">
                                <a className="nav-link active" aria-current="page" href="#">Register as Host</a>
                            </li>
    
                            <li className="nav-item p-2 mx-auto my-auto">
                                <button type="button" className="btn btn-secondary bg-light rounded-pill mx-auto my-auto"
                                    data-container="body" data-bs-toggle="popover" placement="bottom"
                                    data-bs-trigger="focus" data-bs-html="true" data-bs-content='
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Sign in</li>
                                            <li class="list-group-item">Sign up</li>
                                        </ul>
                                   '>
    
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="black"
                                        className="bi bi-person-fill" viewBox="0 0 16 16">
                                        <path
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                                    </svg>
    
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="collapse multi-collapse border-top" id="multiCollapseExample1">
                <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
                    <div className="container-fluid">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <div className="d-flex d-flex  ">
                                    <div className="p-2 col-sm-4 col-4 align-middle navbar-labels">
                                        <span>Check In:</span>
                                    </div>
                                    <div className="p-2 col-sm-8 col-8 my-auto mx-auto">
                                        <div className="input-group w-auto my-auto mx-auto">
                                            <input className="form-control" id="from-date" name="from-date"
                                                placeholder="MM/DD/YYYY" type="date" />
                                        </div>
                                    </div>
                                </div>
                            </li>
    
                            <li className="nav-item">
                                <div className="d-flex d-flex  ">
                                    <div className="p-2 col-sm-4 col-4 align-middle navbar-labels">
                                        <span>Check Out:</span>
                                    </div>
                                    <div className="p-2 col-sm-8 col-8 my-auto mx-auto">
                                        <div className="input-group w-auto my-auto mx-auto">
                                            <input className="form-control" id="to-date" name="to-date" placeholder="MM/DD/YYYY"
                                                type="date" />
                                        </div>
                                    </div>
                                </div>
                            </li>
    
                            <li className="nav-item">
                                <div className="d-flex d-flex  ">
                                    <div className="p-2 col-sm-4 col-4 align-middle navbar-labels">
                                        <span>Guests:</span>
                                    </div>
                                    <div className="p-2 col-sm-8 col-8 my-auto mx-auto">
                                        <div className="input-group w-auto my-auto mx-auto">
                                            <input type="button" value="-" id="decrement" onClick={() => numGuests-1>0 ? setNumGuests(numGuests - 1) : setNumGuests(numGuests)}
                                                className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                                data-field="quantity"/>
                                            <input type="number" id="guests" step="1" max="10" value={numGuests} name="quantity"
                                                className="quantity-field border-0 text-center w-25" style={{borderRadius: '10px'}}/>
                                            <input type="button" value="+" id="increment" onClick={() => setNumGuests(numGuests + 1)}
                                                className="button-plus border rounded-circle icon-shape icon-sm "
                                                data-field="quantity"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
    
                            <li className="nav-item">
                                <div className="d-flex d-flex  ">
                                    <div className="p-2 col-sm-4 col-4 align-middle navbar-labels">
                                        <span>Bedroom:</span>
                                    </div>
                                    <div className="p-2 col-sm-8 col-8 my-auto mx-auto">
                                        <div className="input-group w-auto my-auto mx-auto">
                                            <input type="button" value="-" onClick={() => numBedrooms-1>0 ? setNumBedrooms(numBedrooms - 1) : setNumBedrooms(numBedrooms)}
                                                className="button-minus border rounded-circle  icon-shape icon-sm mx-1 "
                                                data-field="quantity"/>
                                            <input type="number" step="1" id="bedrooms" max="10" value={numBedrooms} name="quantity"
                                                className="quantity-field border-0 text-center w-25" style={{borderRadius: '10px'}}/>
                                            <input type="button" value="+" onClick={() => setNumBedrooms(numBedrooms + 1)}
                                                className="button-plus border rounded-circle icon-shape icon-sm lh-0"
                                                data-field="quantity"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
    
                            <li className="nav-item">
                                <div className="d-flex d-flex  ">
                                    <div className="p-2 col-sm-4 col-4 align-middle navbar-labels">
                                        <span>Bathroom:</span>
                                    </div>
                                    <div className="p-2 col-sm-8 col-8 my-auto mx-auto">
                                        <div className="input-group w-auto my-auto mx-auto">
                                            <input type="button" value="-" onClick={() => numBathrooms-1>0 ? setNumBathrooms(numBathrooms - 1) : setNumBathrooms(numBathrooms)}
                                                className="button-minus border rounded-circle  icon-shape icon-sm mx-1 lh-0"
                                                data-field="quantity"/>
                                            <input type="number" step="1" id="bathrooms" max="10" value={numBathrooms} name="quantity"
                                                className="quantity-field border-0 text-center w-25" style={{borderRadius: '10px'}}/>
                                            <input type="button" value="+" onClick={() => setNumBathrooms(numBathrooms + 1)}
                                                className="button-plus border rounded-circle icon-shape icon-sm lh-0"
                                                data-field="quantity"/>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header