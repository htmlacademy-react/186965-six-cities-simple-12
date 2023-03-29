import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { City } from '../../types/city';
import { URL_MARKER_DEFAULT } from '../../const/const';
import { CardOffers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';


type MapProps = {
  city: City;
  points: CardOffers;
  // selectedPoint: Point | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

// const currentCustomIcon = new Icon({
//   iconUrl: URL_MARKER_CURRENT,
//   iconSize: [40, 40],
//   iconAnchor: [20, 40]
// });

function Map(props: MapProps): JSX.Element {
  const { city, points } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker
          .setIcon(defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, points]);

  return <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>;
}

export default Map;
