import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from './use-map';
import { URL_MARKER_CURRENT, URL_MARKER_DEFAULT } from '../const';
import { Point } from '../types/point';
import { IUser } from '../store/slice';

type MapProps = {
  selectedPoint: Point | undefined;
  cityValue: IUser[];
  height: string;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map(props: MapProps) {
  const { cityValue, selectedPoint, height } = props;

  const mapRef = useRef(null);
  const map = useMap(mapRef);

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      cityValue.map((point) => {
        const marker = new Marker({
          lat: point.location.latitude,
          lng: point.location.longitude,
        });
        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });
      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, cityValue, selectedPoint]);

  return <div ref={mapRef} style={{ height }}></div>;
}

export { Map };
