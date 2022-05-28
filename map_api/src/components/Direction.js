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

function Direction() {
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

<DirectionsService
                  // required
                  options={{ 
                    destination: 'Gulsan 1 circle Dhaka Bangladesh',
                    origin: 'Banani 11 City Bank Dhaka Bangladesh',
                    travelMode: 'DRIVING'
                  }}
                  // required
                  callback={res=> {
                      if(res !== null) {
                        setDirectionResponse(res);
                      }
                  } }
                 


                />
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