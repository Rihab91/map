import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({mapContainerStyle, center ,zoom}) =>{
    return(
        
        <>
{/*  LoadScript component ensures that Google Maps JavaScript API is loaded */}
<LoadScript
        googleMapsApiKey="AIzaSyBB9B-Rk8go54u0Ty2z-gNS28IhIQbG_lg">
            {/* GoogleMap component renders the map */}
        <GoogleMap
         // Styling for the map container
        mapContainerStyle={mapContainerStyle}
        // The geographical center of the map
        center={center}
        // The zoom level of the map
        zoom={zoom} 
        >
        <Marker position={center} />
        {/* Marker component renders a marker at the specified center position */}
        </GoogleMap>
        </LoadScript>
        </>
        
        
    );
};

export default Map;