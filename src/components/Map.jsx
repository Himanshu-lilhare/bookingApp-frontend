import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
const [hotels, setHotels] = useState();

async function getHotels() {
  const { data } = await axios.get(`${url}/gethotels`);
  setHotels(() => data.hotels);
}

useEffect(() => {
  getHotels();
  console.log("1");
}, []);
<>
<main className="main">
  <div className="hotelswrapper">
    {hotels ? (
      hotels?.map((hotel) => {
        return <div key={hotel._id}>{hotel?.properties?.name}</div>;
      })
    ) : (
      <h1>no Hotels</h1>
    )}
  </div>
  <div className="hotelmap" >
    <MapContainer
      center={[20.5937,78.9629]}
      zoom={5}
      scrollWheelZoom={true}
      style={{height:'100%'}}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        hotels && hotels.map((hotel,index)=>{
return   <Marker key={index} position={hotel?.geometry?.coordinates}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>

        })
      }
    
    </MapContainer>
  </div>
</main>
</>