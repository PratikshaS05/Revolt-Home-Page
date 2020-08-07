import L from 'leaflet';

export const VenueLocationIcon = L.icon({
  iconUrl: require('./icons8-marker-storm-48.png'),
  iconRetinaUrl: require('./icons8-marker-storm-48.png'),
  iconAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: [35, 35],
  className: 'leaflet-venue-icon'
});
