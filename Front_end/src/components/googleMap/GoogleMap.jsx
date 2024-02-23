import React, { useEffect, useState } from 'react';
import './GoogleMap.css';
// const key = process.env.REACT_APP_GOOGLE_MAPS_KEY;


const GoogleMap = () => {
  useEffect(() => {
    initMap();
  },[])

  let map;

  async function initMap() {
    // The location of Uluru
    const position = { lat: -25.344, lng: 131.031 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
  
    // The map, centered at Uluru
    map = new Map(document.getElementById("map"), {
      zoom: 4,
      center: position,
      mapId: "DEMO_MAP_ID",
    });
  
    // The marker, positioned at Uluru
    const marker = new AdvancedMarkerElement({
      map: map,
      position: position,
      title: "Uluru",
    });
  }
  


  return (
    <>
    <div id="map"></div>
    </>
  );
};

export default GoogleMap;
