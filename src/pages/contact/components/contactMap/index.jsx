import React from 'react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Link } from 'react-router';
import mapImg from '../../../../assets/map/map.jpg';
const position = [23.685, 90.3563];
import L from 'leaflet';
import mapMarkerImg from '../../../../assets/map/mapMarkar.jpg';
import { Icon } from 'leaflet';

const ContactMap = () => {
  const customIcon = new Icon({
    iconUrl: mapMarkerImg,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
  });
  return (
    <>
      <div>
        <div className="container">
          <div className=" xl:mx-auto max-w-[98%] h-[600px] bg-blue-400 mt-[32px] mb-[64px] rounded-md overflow-hidden">
            <MapContainer
              center={position}
              zoom={13}
              style={{ height: '600px', width: '100%' }}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a>'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  A sample popup! <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className="relative z-[100000] lg:block hidden">
            <div className="lg:w-[467px] h-[186px] bg-white rounded-md absolute -top-[640px] left-[20px] p-[28px]">
              <div className="flex gap-x-[32px]">
                <div>
                  <h3 className="font-poppins text-[20px] font-semibold leading-[30px] text-colorFour">
                    E-Shop Headquarter
                  </h3>
                  <p className="font-montserrat text-base font-normal leading-[24px] opacity-75 text-colorFour mt-[8px]">
                    123 Main Street, Anytown New York, USA
                  </p>
                  <div className="mt-[24px]">
                    <Link to="https://www.google.com/maps/place/Dhaka/@23.7809194,90.263798,12z/data=!3m1!4b1!4m6!3m5!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.804093!4d90.4152376!16zL20vMGZuYjQ?entry=ttu&g_ep=EgoyMDI1MDYxNy4wIKXMDSoASAFQAw%3D%3D">
                      View on Google Maps
                    </Link>
                  </div>
                </div>
                <div className="w-[169px] h-[130px] rounded-md overflow-hidden">
                  <img
                    src={mapImg}
                    alt="loation img"
                    className="w-full h-full object-cover cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMap;
