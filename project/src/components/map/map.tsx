import { useRef, useEffect } from 'react';
import { Icon, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';
import { Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
import { useAppSelector } from '../../hooks/use-app-selector';
import { getChangeCity } from '../../store/offers-data/selectors';
import { memo } from 'react';


type MapProps = {
  offers: Offers;
  selectedPoint?: Offer;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

function Map(props: MapProps): JSX.Element {
  const { selectedPoint, offers } = props;
  const location = useAppSelector(getChangeCity);

  const mapRef = useRef(null);
  const map = useMap(mapRef, location);

  useEffect(() => {
    if (map) {
      offers.forEach((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude
        });

        marker
          .setIcon(selectedPoint !== undefined && point.id === selectedPoint.id
            ? currentCustomIcon
            : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [map, offers, selectedPoint]);


  return <div style={{ width: '100%', height: '100%' }} ref={mapRef}></div>;
}

export default memo(Map);
