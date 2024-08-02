import { MutableRefObject, useEffect, useRef, useState } from 'react';
// import { MapConst } from '../const';
import { Map, TileLayer } from 'leaflet';
import leaflet from 'leaflet';
import { useAppSelector } from '../store/hook';

function useMap(mapRef: MutableRefObject<HTMLElement | null>): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);
  const { IFlat } = useAppSelector((state) => state.sliceCity);
  // console.log(IFlat);

  useEffect(() => {
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: IFlat[0].city.location.latitude,
          lng: IFlat[0].city.location.longitude,
        },
        zoom: IFlat[0].city.location.zoom,
      });

      const layer = new TileLayer(
        'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        }
      );
      instance.addLayer(layer);

      setMap(instance);
      isRenderedRef.current = true;
    }
  }, [IFlat, mapRef]);

  return map;
}

export default useMap;
