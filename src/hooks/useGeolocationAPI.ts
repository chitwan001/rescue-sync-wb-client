import {Position} from "../types";
import {useState} from "react";

export default function useGeolocationAPI(){
    const [position,setPosition] = useState<Position | null>(null)
    const [error,setError] = useState<GeolocationPositionError | null>(null)
    if(navigator.geolocation){
        navigator.geolocation.watchPosition((geoPos) => {
            setPosition({
                LATITUDE: geoPos.coords.latitude,
                LONGITUDE: geoPos.coords.longitude
            })
        },(positionError) => {
            setError(positionError)
            setPosition(null)
        })
    }
    return {position,positionError: error}
}