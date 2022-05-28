import React from 'react'
import { GoogleMap, LoadScript,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px'
};

const locatioon = {
  lat: 28.707397,
  lng: 77.204549

};

function map() {
    const onLoad = marker => {
        console.log('marker: ', marker)
      }
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyAlLvZr-xXGkQuzjj2tSmOzCKQMahFLh4U"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={locatioon}
        zoom={16}
      >
         <Marker
      onLoad={onLoad}
      position={locatioon}
    />
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(map)