import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import { useTranslation } from 'react-i18next';

const pinIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [0, -34],
  shadowSize: [41, 41]
});

const MapInner = () => {
  const { t } = useTranslation();
  const mapTitle = t('surfcamp.villa.map.popupTitle');
  const mapAddress = t('surfcamp.villa.map.addressLines', { returnObjects: true });
  return (
    <MapContainer center={[-8.8885, 116.2829]} zoom={15} scrollWheelZoom={false} className="w-full h-full z-10">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-8.8885, 116.2829]} icon={pinIcon}>
        <Popup>
          {mapTitle}<br />
          {mapAddress[0]}<br />
          {mapAddress[1]}
        </Popup>
      </Marker>
    </MapContainer>
  );
};
export default MapInner;
