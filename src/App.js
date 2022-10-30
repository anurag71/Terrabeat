import React, {useEffect, useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';


    const App = () =>  {

      const [properties, setProperties] = useState([]);
      const [filterText, setFilterText] = useState('');
      // const search_bar_div = ReactDOM.createRoot(document.getElementById('search_bar'));
      
      useEffect(() => {
        async function fetchVideos(){
          const response = await fetch('http://localhost:3000/properties.json');
          const fetchedProperties = await response.json(response);
          setProperties(fetchedProperties);
        }
        fetchVideos();
      }, []);

      

         return (
          <div>
            <Header
            filterText = {filterText}
            setFilterText = {setFilterText}
            />
            
          <Main 
          filterText = {filterText}
          properties = {properties}/>
          <Footer />
          </div>
            
        )

        



      };

    export default App;