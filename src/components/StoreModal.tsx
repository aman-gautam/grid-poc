import React, { useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Store } from '../types';
import { 
  generateRandomAmount, 
  generateRandomMonths, 
  generateRandomCrimeIndex, 
  generateRandomSites 
} from '../data';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const blueIcon = L.icon({
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const redIcon = L.icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-red.png',
  iconRetinaUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

interface StoreModalProps {
  store: Store;
  onClose: () => void;
}

const StoreModal: React.FC<StoreModalProps> = ({ store, onClose }) => {
  const coordinates = useMemo(() => {
    const lat = 39.8283 + (Math.random() - 0.5) * 10;
    const lng = -98.5795 + (Math.random() - 0.5) * 20;
    return [lat, lng] as [number, number];
  }, [store.id]);

  const nearbyMarkers = useMemo(() => {
    const markers = [];
    for (let i = 0; i < 5; i++) {
      markers.push([
        coordinates[0] + (Math.random() - 0.5) * 0.02,
        coordinates[1] + (Math.random() - 0.5) * 0.02
      ] as [number, number]);
    }
    return markers;
  }, [coordinates]);

  const messages = useMemo(() => {
    const msgs = [];
    
    if (store.recommendService) {
      const randomAmount = generateRandomAmount();
      const randomMonths = generateRandomMonths();
      msgs.push(`$${randomAmount.toLocaleString()} invested in the systems, not maintained from last ${randomMonths} months; Service recommended.`);
    }
    
    if (store.recommendPurchek) {
      if (Math.random() < 0.5) {
        const crimeIndex = generateRandomCrimeIndex();
        msgs.push(`Site is High Crime Area with Robbery index of ${crimeIndex} with US average being 100; Purchek recommended.`);
      } else {
        const sites = generateRandomSites();
        msgs.push(`The store is surrounded by ${sites} Purchek Customers with documented Pushout events; Purchek recommended.`);
      }
    }
    
    if (store.recommendContainment) {
      msgs.push('The store is required to have a Containment solution by law');
    }
    
    if (store.recommendPairedWheel && store.customerId) {
      msgs.push('There are Pushout events and Cart Thefts, so paired wheels are recommended. Learn More.');
    }
    
    return msgs;
  }, [store]);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-title">Store Details</div>
          <button className="modal-close" onClick={onClose}>×</button>
        </div>
        
        <div className="modal-content">
          <div style={{ marginBottom: '20px' }}>
            <p><strong>Store ID:</strong> {store.id}</p>
            {store.customerId && <p><strong>Customer ID:</strong> {store.customerId}</p>}
            <p><strong>Address:</strong> {store.address1}, {store.zipcode}</p>
          </div>

          <div className="map-container">
            <MapContainer 
              center={coordinates} 
              zoom={13} 
              style={{ height: '100%', width: '100%' }}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              
              <Marker position={coordinates} icon={blueIcon}>
                <Popup>
                  Main Store Location<br />
                  {store.address1}
                </Popup>
              </Marker>
              
              {nearbyMarkers.map((marker, index) => (
                <Marker key={index} position={marker} icon={redIcon}>
                  <Popup>
                    Nearby Location {index + 1}
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>

          {messages.length > 0 && (
            <div className="message-list">
              <h3 style={{ marginBottom: '15px' }}>Recommendations</h3>
              {messages.map((message, index) => (
                <div key={index} className="message-item">
                  {message}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StoreModal;