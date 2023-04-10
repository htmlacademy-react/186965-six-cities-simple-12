import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
// import { City } from '../../types/city';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';
import { Offer } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/use-app-selector';


type MapProps = {
  // city: City;
  // offers: Offers;
  selectedPoint: Offer | undefined;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const { selectedPoint } = props;
  const offers = useAppSelector((state) => state.offers);

  const location = useAppSelector((state) => state.city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.city.location.lat,
          lng: point.city.location.lng
        });

        marker
          .setIcon(selectedPoint !== undefined && point.title === selectedPoint.title
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);


  return <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>;
}

export default Map;
