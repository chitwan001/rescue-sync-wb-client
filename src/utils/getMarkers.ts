export function generateRandomCoordinatesWithinRadius(
    centerLatitude: number,
    centerLongitude: number,
    radiusInKilometers: number
) {
    // Earth's radius in kilometers
    const earthRadius = 6371;

    // Convert latitude and longitude from degrees to radians
    const centerLatRad = (centerLatitude * Math.PI) / 180;
    const centerLonRad = (centerLongitude * Math.PI) / 180;

    // Generate a random angle in radians (0 to 2 * π)
    const randomAngleRad = Math.random() * 2 * Math.PI;

    // Generate a random distance within the specified radius
    const randomDistance = Math.random() * radiusInKilometers;

    // Calculate new latitude and longitude
    const newLatitudeRad = Math.asin(
        Math.sin(centerLatRad) * Math.cos(randomDistance / earthRadius) +
        Math.cos(centerLatRad) * Math.sin(randomDistance / earthRadius) * Math.cos(randomAngleRad)
    );

    const newLongitudeRad =
        centerLonRad +
        Math.atan2(
            Math.sin(randomAngleRad) * Math.sin(randomDistance / earthRadius) * Math.cos(centerLatRad),
            Math.cos(randomDistance / earthRadius) - Math.sin(centerLatRad) * Math.sin(newLatitudeRad)
        );

    // Convert new latitude and longitude from radians to degrees
    const newLatitude = (newLatitudeRad * 180) / Math.PI;
    const newLongitude = (newLongitudeRad * 180) / Math.PI;

    return [newLongitude,newLatitude];
}