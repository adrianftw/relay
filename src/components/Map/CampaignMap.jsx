import React, { useRef, useImperativeHandle, forwardRef, useEffect } from 'react';
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
 * - Animated transitions when transitionDuration is provided
 */
export const CampaignMap = forwardRef(({
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
}, ref) => {
  const mapRef = useRef();
  const prevViewStateRef = useRef(viewState);

  // Expose map methods to parent
  useImperativeHandle(ref, () => ({
    getMap: () => mapRef.current?.getMap(),
  }));

  // Handle animated transitions when viewState changes with transitionDuration
  useEffect(() => {
    const prevViewState = prevViewStateRef.current;
    
    if (viewState && viewState.transitionDuration && mapRef.current) {
      // Check if position/zoom actually changed
      const hasChanged = !prevViewState || 
        prevViewState.longitude !== viewState.longitude ||
        prevViewState.latitude !== viewState.latitude ||
        prevViewState.zoom !== viewState.zoom;
      
      if (hasChanged) {
        const map = mapRef.current.getMap();
        if (map) {
          map.flyTo({
            center: [viewState.longitude, viewState.latitude],
            zoom: viewState.zoom,
            duration: viewState.transitionDuration,
            essential: true
          });
        }
      }
    }
    
    prevViewStateRef.current = viewState;
  }, [viewState]);

  // Determine which props to pass to Map based on whether we're animating
  const mapProps = viewState ? (
    viewState.transitionDuration ? {
      // During animation, don't pass the new coordinates - let flyTo handle it
      onMove: onMove
    } : {
      // No animation, update immediately
      longitude: viewState.longitude,
      latitude: viewState.latitude,
      zoom: viewState.zoom,
      onMove: onMove
    }
  ) : {
    initialViewState
  };

  return (
    <div className="campaign-map">
      <Map
        ref={mapRef}
        mapboxAccessToken={mapboxAccessToken}
        {...mapProps}
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
});

CampaignMap.displayName = 'CampaignMap';

export default CampaignMap;
