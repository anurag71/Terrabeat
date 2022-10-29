import React, {useEffect, useState} from 'react';
import Properties from './Properties';


    const App = () =>  {

      const [properties, setProperties] = useState([]);

      useEffect(() => {
        async function fetchVideos(){
          const response = await fetch('http://localhost:3000/properties.json');
          const fetchedProperties = await response.json(response);
          setProperties(fetchedProperties);
        }
        fetchVideos();
      }, []);

         return (
          <Properties properties={properties} />
        )

        



      };

    export default App;