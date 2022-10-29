import React/*, {useState}*/ from 'react'

const Search = (props) => {
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
  return <SearchBar/>;
};


function SearchBar({
  filterText, 
  isAvailable,
  onFilterTextChange,
  onIsAvailableChange
}) {
  return (
    // <form>
    //   <input 
    //     type="text" 
    //     value={filterText}
    //     placeholder="Search Titles..." 
    //     onChange={
    //       (e) => onFilterTextChange(e.target.value)
    //     }
    //     />
    //   <label>
    //     <input 
    //     type="checkbox" 
    //     checked={isAvailable}
    //     onChange={
    //       (e) => onIsAvailableChange(e.target.checked)
    //     }
    //     />
    //     {' '}
    //     Only show available titles
    //   </label>
    // </form>
    <div className="input-group d-flex" id="search_bar">
                                <input className="form-control border-end-0 border rounded-pill shadow" type="search"
                                    placeholder="Find your next dream stay" id="example-search-input"/>
                                <span className="input-group-append my-auto mx-auto d-flex">
                                    <button
                                        className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill ms-n5"
                                        type="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" fill="black"
                                            className="bi bi-search" viewBox="0 0 16 16">
                                            <path
                                                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                                        </svg>
                                    </button>
                                </span>
                                <span className="input-group-append my-auto mx-auto d-flex rounded-pill shadow">
                                    <a className="btn btn-outline-secondary bg-white border-bottom-0 border rounded-pill"
                                        data-bs-toggle="collapse" href="#multiCollapseExample1" role="button"
                                        aria-expanded="false" aria-controls="multiCollapseExample1"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="16" height="23" fill="black"
                                            className="bi bi-list" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                                        </svg></a>
                                </span>
                            </div>
    
  );
}

export default Search