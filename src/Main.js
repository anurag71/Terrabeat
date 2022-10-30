import React from "react";
import Properties from "./Properties";

const Main = (props) => {
    return (
        <main>
            <div className="container-fluid">
                <div className="offcanvas offcanvas-end" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                      <h5 className="offcanvas-title" id="offcanvasRightLabel">Filters</h5>
                      <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div> 
                    <div className="offcanvas-body">
                    <div className="me-2">
                            <div className="container p-1">
                                <div className="accordion" id="accordionExample">
    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseOne"
                                                aria-expanded="false" aria-controls="collapseOne">
                                                Price
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse"
                                            aria-labelledby="headingOne" data-bs-parent="#FilterAccordion">
                                            <div className="accordion-body">
                                                <input type="text" id="range_03" name="example_name" value="" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingTwo">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseTwo"
                                                aria-expanded="false" aria-controls="collapseTwo">
                                                Ratings
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className="accordion-collapse collapse"
                                            aria-labelledby="headingTwo" data-bs-parent="#FilterAccordion">
                                            <div className="accordion-body pt-2 pb-2">
                                                <div>
                                                    <div className="btn-group" role="group"
                                                        aria-label="Rating Button Group">
                                                        <input type="checkbox" className="btn-check p-1" id="btncheck1"
                                                            autocomplete="off"/>
                                                        <label className="btn btn-outline-secondary m-0 p-1 btn-text"
                                                            for="btncheck1">5 Star</label>
    
                                                        <input type="checkbox" className="btn-check p-1" id="btncheck2"
                                                            autocomplete="off"/>
                                                        <label className="btn btn-outline-secondary m-0 p-1 btn-text"
                                                            for="btncheck2">4 Star</label>
    
                                                        <input type="checkbox" className="btn-check p-1" id="btncheck3"
                                                            autocomplete="off"/>
                                                        <label className="btn btn-outline-secondary m-0 p-1 btn-text"
                                                            for="btncheck3">3 Star</label>
    
                                                        <input type="checkbox" className="btn-check p-1" id="btncheck4"
                                                            autocomplete="off"/>
                                                        <label className="btn btn-outline-secondary m-0 p-1 btn-text"
                                                            for="btncheck4">2 Star</label>
    
                                                        <input type="checkbox" className="btn-check p-1" id="btncheck5"
                                                            autocomplete="off"/>
                                                        <label className="btn btn-outline-secondary m-0 p-1 btn-text"
                                                            for="btncheck5">1 Star</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingThree">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseThree"
                                                aria-expanded="false" aria-controls="collapseThree">
                                                Distance
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className="accordion-collapse collapse"
                                            aria-labelledby="headingThree" data-bs-parent="#FilterAccordion">
                                            <div className="accordion-body">
                                                <input type="text" id="distance-range-slider"
                                                    name="distance-range-slider" value="" />
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFour">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFour"
                                                aria-expanded="false" aria-controls="collapseFour">
                                                Place Type
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className="accordion-collapse collapse"
                                            aria-labelledby="headingFour" data-bs-parent="#FilterAccordion">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="private-room-check"/>
                                                    <label className="form-check-label" for="private-room-check">
                                                        Private Room
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="entire-house-check"/>
                                                    <label className="form-check-label" for="entire-house-check">
                                                        Entire House
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="hotel-room-check"/>
                                                    <label className="form-check-label" for="hotel-room-check">
                                                        Hotel Room
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="shared-room-check"/>
                                                    <label className="form-check-label" for="shared-room-check">
                                                        Shared Room
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
    
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingFive">
                                            <button className="accordion-button collapsed" type="button"
                                                data-bs-toggle="collapse" data-bs-target="#collapseFive"
                                                aria-expanded="false" aria-controls="collapseFive">
                                                Amenities
                                            </button>
                                        </h2>
                                        <div id="collapseFive" className="accordion-collapse collapse"
                                            aria-labelledby="headingFive" data-bs-parent="#FilterAccordion">
                                            <div className="accordion-body">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="wifi-amenity-check"/>
                                                    <label className="form-check-label" for="wifi-amenity-check">
                                                        Wi-Fi
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="television-amenity-check"/>
                                                    <label className="form-check-label" for="television-house-check">
                                                        Television
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="refrigerator-amenity-check"/>
                                                    <label className="form-check-label" for="refrigerator-amenity-check">
                                                        Refrigerator
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="washer-amenity-check"/>
                                                    <label className="form-check-label" for="washer-room-check">
                                                        Washer
                                                    </label>
                                                </div>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value=""
                                                        id="dryer-amenity-check"/>
                                                    <label className="form-check-label" for="dryer-amenity-check">
                                                        Dryer
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </div>
                </div>
            </div>
                <div className="row">
    
                    <div className="col-lg-10 col-md-12 mt-50 mb-50" id="property_listing">

                        {<Properties 
          filterText = {props.filterText}
          properties={props.properties} />}
    
                    </div>
                    <div className="col-lg-2 col-md-12 mt-50 mb-50">
                        
                        <button className="btn" type="button" >
                        <span className="my-auto mx-auto d-flex rounded-pill shadow">
                            <a className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill"
                                role="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> 
                                <div className="row">
                                    <div className="col-sm-8">
                                        Filters
                                    </div>
                                    <div className="col-sm-4">
                                        <svg
                                    xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="black"
                                    className="bi bi-sliders" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3h9.05zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8h2.05zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zm-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1h9.05z"/>
                                </svg>
                                    </div>
                                </div>
                            </a>
                        </span>
                    </button>
                    </div>
                </div>
            </div>
    
        </main>
    );
}

export default Main