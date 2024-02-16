import React from "react";
// Import styled-components for styling
import styled from 'styled-components'
// Import styled-components for styling
import Map from "./components/Map";

// Styled component for the main container of the application
const AppContainer =styled.div`
diplay :flex;
height:100vh;
justify-content:center;
align-items:center;

`;
// Style configuration for the map container
const mapContainerStyle={
  width:'700px',
  height:'500px',
};
// Center coordinates for the map
const center={
  lat: 35.8245,
  lng: 10.6346,
};

const zoom = 13;
// App component, the main component of the application
function App() {
  return(
    <AppContainer>
    <Map 
     // Pass the map container style as prop
        mapContainerStyle={mapContainerStyle}
        center={center}
        zoom={zoom}/>
    </AppContainer>
  )
}

export default App;