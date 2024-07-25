import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { MapConst } from '../const';
import { Map, TileLayer } from 'leaflet';
import leaflet from 'leaflet';
// import { IUser } from '../store/slice';

function useMap(
  mapRef: MutableRefObject<HTMLElement | null>,
  // cityValue: IUser[]
): Map | null {
  const [map, setMap] = useState<Map | null>(null);
  const isRenderedRef = useRef<boolean>(false);

  useEffect(() => {
    // const mapLat = cityValue.map((loc) => {
    //   loc.mapLocation.forEach((mapLoc) => mapLoc.location.latitude);
    // });
    if (mapRef.current !== null && !isRenderedRef.current) {
      const instance = leaflet.map(mapRef.current, {
        center: {
          lat: MapConst.lat,
          lng: MapConst.lng,
        },
        zoom: MapConst.zoom,
      });

      // if (mapRef.current !== null && !isRenderedRef.current) {
      //   const instance = leaflet.map(mapRef.current, {
      //     center: {
      //       lat: cityValue.map((loc) => loc.mapLocation.forEach((mapLoc) => mapLoc.location.latitude)),
      //       lng: cityValue.map((loc) => loc.mapLocation.forEach((mapLoc) => mapLoc.location.longitude)),
      //     },
      //     zoom: cityValue.map((loc) => loc.mapLocation.forEach((mapLoc) => mapLoc.location.zoom)),
      //   });

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
  }, [mapRef]);

  return map;
}

export default useMap;
