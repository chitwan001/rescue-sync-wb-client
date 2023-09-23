export function generateRandomCoordinatesWithinRadius(): { latitude: number; longitude: number } {
    const randomLatitude = Math.random() * 180 - 90;

    // Generate random longitude (-180 to 180 degrees)
    const randomLongitude = Math.random() * 360 - 180;

    return { latitude: randomLatitude, longitude: randomLongitude };
}