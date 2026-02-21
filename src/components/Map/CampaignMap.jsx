import React, { useRef } from 'react';
import Map, { NavigationControl, FullscreenControl } from 'react-map-gl/mapbox';
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
      </Map>
    </div>
  );
};

export default CampaignMap;
