import React/*, {useState}*/ from 'react'

const Properties = (props) => {
  // return (
  //   <div>
  //     <h1>Video List</h1>
  //     {props.videos.map((video) => (
  //       <div className="card">
  //         <div className="card-body">
  //           <h5 className="card-title">{video.title}</h5>
  //           <h6 className="card-subtitle mb-2 text-muted">{video.genre}</h6>
  //           <p className="card-text">{video.description}</p>
  //         </div>
  //       </div>
  //     ))}
  //   </div>
  // )
  let new_properties=[]
  props.properties.map((property) => {
    if (
      property.title.toLowerCase().indexOf(
        props.filterText.toLowerCase()
      ) === -1
    ) {
      return;
    }
    new_properties.push(
      property
    );

  });

  return <PropertyDisplay 
  properties={new_properties} />;
};

// function PropertyListTable({ properties }) {
//   // const [filterText, setFilterText] = useState('');
//   // const [isAvailable, setIsAvailable] = useState(false);
//   {/* <SearchBar 
//       filterText = {filterText}
//       isAvailable = {isAvailable}
//       onFilterTextChange = {setFilterText}
//       onIsAvailableChange = {setIsAvailable}
//       /> */}
//   return <PropertyDisplay videos={properties} />;
//   // filterText= {filterText}
//   // isAvailable= {isAvailable}
// }

function PropertyDisplay({ 
  properties
  // filterText, isAvailable
}) {
  return (
    // {rows}b


    
    <div className="d-flex flex-wrap">
      {properties.map((property) => (
        <div className="col-lg-4 col-sm-6 top-margin">
          <div className="card">
            <div className="image-container">
              {<ImageCarousal id={property.id} images={property.images} />}
              </div>


              <div className="m-2 p-1">
                <div className="row justify-content-between align-items-right" >
                  {/* <div className='col-sm-7' style={{textAlign: 'left'}}> */}
                  <div className="col-sm-7" >
                  <span className="property-title">{property.title}</span>
                  </div>
                  {/* </div> */}

                  <div className="col-sm-5" style={{textAlign: 'right'}}>
                    
                    <h6 className="property-rating">{property.rating.toFixed(2) + "  "}
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gold" className="bi bi-star-fill" viewBox="0 0 16 16">
  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
</svg></h6>
                      
                  </div>
                  
                </div>

                <div className="col-sm-12 features pt-2">
                  
                    <p>{property.short_description}</p>
                    <p>{property.extras}</p>
                </div>

                <div className="d-flex justify-content-between align-items-right">
                  <div>
                    <span className="price">${property.price}/Night</span>
                  </div>
                  <span>
                    <a href="#">
                      <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="black" className="bi bi-heart-fill" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                      </svg>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

function ImageCarousal({
  id,
  images
}) {
  const carousal_div_id = "Carousel-Card" + id;
  let len = images.length;
  let i = 0;
  let carousel_indicators = []
  let carousel_images = []
  while (i < len) {
    if (i === 0) {
      carousel_indicators.push(<button type="button" data-bs-target={"#" + carousal_div_id} data-bs-slide-to={i} class="active" aria-current="true" aria-label={"Slide " + (i + 1)}></button>)
      carousel_images.push(<div className="carousel-item active">
        <img src={"img/Properties/" + id + "/" + images[i] + ".jpg"} className="d-block w-100 img-fluid rounded thumbnail-image" alt="..." />
      </div>)
    }
    else {
      carousel_indicators.push(<button type="button" data-bs-target={"#" + carousal_div_id} data-bs-slide-to={i} aria-current="true" aria-label={"Slide " + (i + 1)}></button>)
      carousel_images.push(<div className="carousel-item">
        <img src={"img/Properties/" + id + "/" + images[i] + ".jpg"} className="d-block w-100 img-fluid rounded thumbnail-image" alt="..." />
      </div>)
    }
    i++;
  }
  return (
    <div id={carousal_div_id} className="carousel slide carousel-fade" data-bs-ride="false">
      <div class="carousel-indicators">
        <div className="carousel-indicators">
          {carousel_indicators}
        </div>
      </div>

      <div className="carousel-inner">
        {carousel_images}
      </div>

      <button className="carousel-control-prev" type="button" data-bs-target={"#" + carousal_div_id} data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target={"#" + carousal_div_id} data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

// function SearchBar({
//   filterText, 
//   isAvailable,
//   onFilterTextChange,
//   onIsAvailableChange
// }) {
//   return (
//     <form>
//       <input 
//         type="text" 
//         value={filterText}
//         placeholder="Search Titles..." 
//         onChange={
//           (e) => onFilterTextChange(e.target.value)
//         }
//         />
//       <label>
//         <input 
//         type="checkbox" 
//         checked={isAvailable}
//         onChange={
//           (e) => onIsAvailableChange(e.target.checked)
//         }
//         />
//         {' '}
//         Only show available titles
//       </label>
//     </form>
//   );
// }

export default Properties