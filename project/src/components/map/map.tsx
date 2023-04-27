import { useRef, useEffect, useState } from 'react';
import { Icon, LayerGroup, Marker } from 'leaflet';
import useMap from '../../hooks/useMap';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const/const';
import { Offer, Offers } from '../../types/offer';
import 'leaflet/dist/leaflet.css';
// import { useAppSelector } from '../../hooks/use-app-selector';
// import { getChangeCity } from '../../store/offers-data/selectors';
import { memo } from 'react';
import { City } from '../../types/city';


type MapProps = {
  city: City;
  offers: Offers;
  selectedPoint: Offer | null;
  className?: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [28, 40],
  iconAnchor: [14, 40]
});

function Map(props: MapProps): JSX.Element {
  const { selectedPoint, offers, className, city } = props;
  const [currentCity, setCurrentCity] = useState<City>(city);

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      if (currentCity.city.name !== city.city.name) {
        map.flyTo(
          [
            city.city.location.latitude,
            city.city.location.longitude,
          ],
          city.city.location.zoom,
          {
            animate: true,
            duration: 1
          }
        );

        setCurrentCity(city);
      }

      const points = offers.map(
        (point) =>
          new Marker(
            {
              lat: point.location.latitude,
              lng: point.location.longitude,
            },
            {
              icon: point.id === selectedPoint?.id ? currentCustomIcon : defaultCustomIcon,
            }
          )
      );

      const markersLayer = new LayerGroup(points);
      markersLayer.addTo(map);

      return () => {
        map.removeLayer(markersLayer);
      };

    }
  }, [city, map, offers, selectedPoint, currentCity]);


  return <section className={`${className ? className : ''} map`} data-testid="map" ref={mapRef}></section>;
}

export default memo(Map);
