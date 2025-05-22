
import { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize map when the component mounts
    const initMap = () => {
      if (!mapRef.current) return;
      
      // Create the map iframe with a zoomed out view of South Sri Lanka
      const iframe = document.createElement('iframe');
      iframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d505738.5363947297!2d79.82140656953123!3d6.385185899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae138d151538e6d%3A0xaa446ab9d8a3b37d!2sWeligama!5e0!3m2!1sen!2slk!4v1621498089101!5m2!1sen!2slk";
      iframe.width = "100%";
      iframe.height = "100%";
      iframe.style.border = "0";
      iframe.allowFullscreen = true;
      iframe.loading = "lazy";
      iframe.title = "Shen Taxi & Tours Location Map";
      
      // Clear previous content and append the iframe
      if (mapRef.current.firstChild) {
        mapRef.current.removeChild(mapRef.current.firstChild);
      }
      mapRef.current.appendChild(iframe);
    };

    initMap();
  }, []);

  return (
    <div ref={mapRef} className="h-[400px] w-full rounded-lg shadow-md" />
  );
};

export default Map;
