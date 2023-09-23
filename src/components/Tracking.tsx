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
    const mapContainer = useRef(null);
    const map = useRef(null);
    const locationRef = useRef<HTMLDivElement>();
    const [zoom, setZoom] = useState(15);
    useEffect(() => {
        // if (map.current) return; // initialize map only once
        if (position) {
            let newMap = new mapboxgl.Map({
                container: mapContainer.current,
                style: 'mapbox://styles/mapbox/streets-v11',
                center: [position.LONGITUDE, position.LATITUDE],
                zoom: zoom
            });
            new mapboxgl.Marker().setLngLat([position.LONGITUDE, position.LATITUDE]).addTo(newMap)
            const coords = generateRandomCoordinatesWithinRadius(position.LATITUDE, position.LONGITUDE, 1)
            // Create a new DOM node and save it to the React ref
            locationRef.current = document.createElement('div');
            // Render a Marker Component on our new DOM node
            createRoot(locationRef.current).render(
                <Marker feature={"HELP LOCATION"}/>
            );
            // new mapboxgl.Marker().setLngLat([coords.longitude, coords.latitude]).addTo(newMap)
            map.current = newMap
        }
    }, [position]);

    const markerClicked = (title: string) => {
        window.alert(title);
    };

    return (
        <div ref={mapContainer} className={'grid w-screen h-screen'}>

        </div>
    )
}