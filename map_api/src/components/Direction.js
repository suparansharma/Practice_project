import React, { useState } from 'react'
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const locatioon = {
  lat: 28.707397,
  lng: 77.204549

};

function Direction(origin,destination) {
const [directionResponse, setDirectionResponse] = useState(null);
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locatioon}
        zoom={16}
      >
{
    origin !=='' && destination !=='' && <DirectionsService
    // required
    options={{ 
      destination: destination,
      origin: origin,
      travelMode: 'DRIVING'
    }}
    // required
    callback={res=> {
        if(res !== null) {
          setDirectionResponse(res);
        }
    } }

  />
}

                {
                    directionResponse && <DirectionsRenderer
                    // required
                    options={{ 
                      directions: directionResponse
                    }}
                  
                  />
                }

      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(Direction)