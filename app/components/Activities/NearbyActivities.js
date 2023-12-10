
import React, { useState, useEffect } from 'react';

export default function NearByActivity() {
    const [userLocation, setUserLocation] = useState(null);
    const [locationError, setLocationError] = useState("");

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setUserLocation({ latitude, longitude });
                    // Initialize map here using latitude and longitude
                },
                (error) => {
                    setLocationError(error.message);
                }
            );
        } else {
            setLocationError("Geolocation is not supported by this browser.");
        }
    }, []);

    return (
        <>
            <div className="flex flex-col overflow-y-auto scroll-smooth">
                {userLocation ? (
                    <>
                        <div id="map" /* Add your map container styles here */></div>
                        <div>
                            Latitude: {userLocation.latitude}, Longitude: {userLocation.longitude}
                        </div>
                    </>
                ) : (
                    <div>{locationError || "Requesting location..."}</div>
                )}
            </div>
        </>
    );
}
// import React, { useState, useEffect } from 'react';
// import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

// const mapStyles = {
//   width: '100%',
//   height: '100%',
// };

// function NearByActivity(props) {
//     const [userLocation, setUserLocation] = useState(null);
//     const [locationError, setLocationError] = useState("");

//     useEffect(() => {
//         const watchId = navigator.geolocation.watchPosition(
//             (position) => {
//                 const { latitude, longitude } = position.coords;
//                 setUserLocation({ lat: latitude, lng: longitude });
//             },
//             (error) => {
//                 setLocationError(error.message);
//             },
//             { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
//         );

//         return () => navigator.geolocation.clearWatch(watchId);
//     }, []);

//     return (
//         <div className="flex flex-col overflow-y-auto scroll-smooth" style={{ height: '400px' }}>
//             {userLocation ? (
//                 <Map
//                     google={props.google}
//                     zoom={14}
//                     style={mapStyles}
//                     initialCenter={userLocation}
//                     center={userLocation}
//                 >
//                     <Marker position={userLocation} />
//                 </Map>
//             ) : (
//                 <div>{locationError || "Requesting location..."}</div>
//             )}
//         </div>
//     );
// }

// export default GoogleApiWrapper({
//     apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // Ensure you have the API key in your .env file
// })(NearByActivity);
