import React, { useRef } from 'react';
import Map, { NavigationControl, FullscreenControl, Marker } from 'react-map-gl/mapbox';
import 'mapbox-gl/dist/mapbox-gl.css';
import './CampaignMap.css';

/**
 * CampaignMap Component
 * Displays a Mapbox map with custom style
 * 
 * Features:
 * - Custom Mapbox style
 * - Navigation controls (zoom, compass)
 * - Fullscreen control
 * - Responsive container
 * - Controlled viewport via viewState prop
 */
export const CampaignMap = ({
  viewState,
  onMove,
  markers = [], // Array of { lat, lng, color, label } for zip code markers
  initialViewState = {
    longitude: -122.4,
    latitude: 37.8,
    zoom: 9
  },
  mapboxAccessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN,
  mapStyle = import.meta.env.VITE_MAPBOX_STYLE || 'mapbox://styles/adrianthomasdesign/cmlu39aqq00aj01qp47dx8uol'
}) => {
  const mapRef = useRef();

  return (
    <div className="campaign-map">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxAccessToken}
        {...(viewState ? { 
          ...viewState,
          onMove: onMove 
        } : { 
          initialViewState 
        })}
        style={{ width: '100%', height: '100%' }}
        mapStyle={mapStyle}
        attributionControl={true}
      >
        {/* Navigation Controls (Zoom +/-, Compass) */}
        <NavigationControl position="top-right" />
        
        {/* Fullscreen Control */}
        <FullscreenControl position="top-right" />
        
        {/* Zip Code Markers with color coding */}
        {markers.map((marker, index) => (
          <Marker
            key={index}
            longitude={marker.lng}
            latitude={marker.lat}
            anchor="center"
          >
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: marker.color,
                border: '2px solid white',
                boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '10px',
                fontWeight: 'bold',
                color: 'white'
              }}
              title={marker.label}
            />
          </Marker>
        ))}
      </Map>
    </div>
  );
};

export default CampaignMap;
