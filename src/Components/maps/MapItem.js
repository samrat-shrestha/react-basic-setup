import { Map, TileLayer, LayersControl, GeoJSON } from "react-leaflet";

//It is important to import leaflet styles in your component
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";

const MyData = () => {

    // create state variable to hold data when it is fetched
    const [data, setData] = useState();

    const getData = async () => {
        try {
            debugger;
            const response = await fetch("http://localhost:5000/geom");

            //jsonData is an array cotaining the json object
            const jsonData = await response.json();

            //Accessing the json object and then obtaining the geojson object
            //which is the value of st_asgeojson key
            setData(JSON.parse(jsonData[0].st_asgeojson));

        } catch (err) {
            console.error(err.message);
        }
    };
    useEffect(() => {
        // getData();
        fetch('http://localhost:5000/maps/geom')
            .then((response) => {
                return response.json();
            }).then((data) => {
                // debugger;
                console.log(data);
                setData(JSON.parse(data[0].st_asgeojson));
            });
    }, []);

    // debugger;
    // render react-leaflet GeoJSON when the data is ready
    if (data) {
        return <GeoJSON data={data} />;
    } else {
        return null;
    }
};

function MapItem() {
    const [center, setCenter] = useState({ lat: 27.711694, lng: 85.322108 });
    const zoomLevel = 14;
    return (
        <Map center={center} zoom={zoomLevel}>
            {/*The LayersControl tag help us organize our layers into baselayers and tilelayers*/}
            <LayersControl position="topright">
                {/*Using an OpenStreetMap basemap as a basemap*/}
                <LayersControl.BaseLayer name="OpenStreetMap" checked>
                    <TileLayer
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                </LayersControl.BaseLayer>
                <LayersControl.Overlay name="My GeoJSON layer" checked>
                    <MyData />
                </LayersControl.Overlay>
            </LayersControl>

        </Map>
    );
}

export default MapItem;