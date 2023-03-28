import { useEffect, useRef } from 'react';
import { Icon, Marker } from 'leaflet';
import { CardOffer, CardOffers } from '../../types/offer';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../../const/const';
import useMap from '../../hooks/useMap';


type MapProps = {
  city: CardOffer;
  points: CardOffers;
  selectedPoint: CardOffer | undefined;
}

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
  const { city, points, selectedPoint } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        const marker = new Marker({
          lat: point.lat,
          lng: point.lng
        });

        marker.setIcon(selectedPoint !== undefined && point.city === selectedPoint.city ? currentCustomIcon : defaultCustomIcon).addTo(map);
      });
    }
  }, [map, points, selectedPoint]);


  return <div style={{ height: '500px' }} ref={mapRef}></div>;
}

export default Map;
