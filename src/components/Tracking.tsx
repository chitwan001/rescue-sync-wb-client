import useGeolocationAPI from "../hooks/useGeolocationAPI";
// @ts-ignore
import mapboxgl from 'mapbox-gl';
import React, {createRef, useEffect, useRef, useState} from "react";
import {generateRandomCoordinatesWithinRadius} from "../utils";
import {createRoot} from "react-dom/client";

mapboxgl.accessToken = 'pk.eyJ1IjoiY2hpdHdhbjAwMSIsImEiOiJjbG12dm96b2QwcG11MmtxcHNoZDlnaGRjIn0._TyEyd1cd8mPBzOTp10Dfw';

const Marker = ({feature}: { feature: string }) => {

    return (
        <div className="bg-blue-600 rounded-md text-white text-xl">
            {feature}
        </div>
    );
};

export default function Tracking() {
    const {position, positionError} = useGeolocationAPI()
    const [initialized, setInitialized] = useState(false)
    const mapContainerRef = useRef(null);
    const mapRef = useRef<mapboxgl.Map | null>(null)
    // Initialize map when component mounts
    useEffect(() => {
        if (position && !initialized) {
            mapRef.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: 'mapbox://styles/mapbox/dark-v10',
                center: [position.LONGITUDE, position.LATITUDE],
                zoom: 14,
                dragRotate: false,
                scrollZoom: false,
                minZoom: 8
            });

// Create a default Marker and add it to the map.
            const coords = generateRandomCoordinatesWithinRadius()
            console.log(coords)
            new mapboxgl.Marker({color: 'green', rotation: 90})
                .setLngLat([position.LONGITUDE, position.LATITUDE])
                .addTo(mapRef.current);
            setInitialized(true)
        }

        // Clean up on unmount
    }, [position]);


    return (
        <div ref={mapContainerRef} className={'grid overflow-hidden w-screen h-screen'}>

        </div>
    )
}