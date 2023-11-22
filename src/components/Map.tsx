import { useEffect, useRef, useState } from "react";

import mapboxgl, { LngLatBoundsLike, LngLatLike } from "mapbox-gl";
mapboxgl.accessToken =
  "pk.eyJ1IjoiYnBhY2h1Y2EiLCJhIjoiY2lxbGNwaXdmMDAweGZxbmg5OGx2YWo5aSJ9.zda7KLJF3TH84UU6OhW16w";

import "mapbox-gl/dist/mapbox-gl.css";
import MapboxLanguage from "@mapbox/mapbox-gl-language";
import bbox from "@turf/bbox";

import centroid from "@turf/centroid";
import bboxPolygon from "@turf/bbox-polygon";
import { featureCollection } from "@turf/helpers";

const BASE_PATH = "https://cms.weser-erfahren-natur-erleben.de/storage/uploads";

const Map = ({
  geojson,
  stationen,
  icon,
}: {
  icon: string;
  stationen?: Array<any>;
  geojson: Array<{
    path: string;
    title: string;
    slug?: string;
    color: string;
    markierung?: string;
  }>;
}) => {
  const mapContainer = useRef(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current || "",
      style: `mapbox://styles/mapbox/streets-v11`,

      scrollZoom: true,
    });
    map.addControl(
      new MapboxLanguage({
        defaultLanguage: "de",
      })
    );

    map.on("load", async () => {
      if (!geojson) {
        setIsMapLoaded(true);
        return;
      }
      const geoJsonDataRes = await Promise.all(
        geojson.map(({ path }) => fetch(BASE_PATH + path))
      );
      const geoJSONData = await Promise.all(
        geoJsonDataRes.map((res) => res.json())
      );

      const allBounds: Array<Array<number>> = [];

      map.addLayer({
        id: `weserradweg-layer`,
        type: "line",
        source: {
          type: "geojson",
          data: "https://cms.weser-erfahren-natur-erleben.de/storage/uploads/2023/06/22/weserradweg_uid_64942a6235ec2.geojson",
        },
        paint: {
          "line-color": "#703266",
          "line-width": 3,
        },
      });
      geojson.map(({ title, color, markierung, slug }, index) => {
        map.addSource(title, {
          type: "geojson",
          // Use a URL for the value for the `data` property.
          data: geoJSONData[index],
        });

        map.addLayer({
          id: `${title}-layer`,
          type: "line",
          source: title,
          paint: {
            "line-color": color,
            "line-width": 4,
          },
        });
        const bounds = bbox(geoJSONData[index]);
        allBounds.push(bounds);
        const pos = centroid(geoJSONData[index]);
        const container = document.createElement("div");
        const image = document.createElement("img");
        image.src = markierung ? BASE_PATH + markierung : "/logo.png";

        container.style.width = "60px";
        container.style.height = "60px";
        container.style.padding = "4px";

        container.classList.add(
          "flex",
          "items-center",
          "justify-center",
          "bg-white",
          "rounded-full",
          "overflow-hidden",
          "shadow-lg",
          "shadow-[#0006]"
        );

        container.appendChild(image);

        const popup = new mapboxgl.Popup({
          offset: 48,
          className: "rounded-xl shadow-lg bg-white p-2 border-0",
        }).setHTML(
          `<div class="flex flex-col item-center"><h3 class="text-center text-xl mb-2 font-bold " style="color:${color}">${title}</h3><a class=" text-center text-sm" href="/pfade/${slug}">Details anzeigen</a></div>`
        );

        if (!stationen) {
          const marker = new mapboxgl.Marker({
            element: container,
          })
            .setLngLat(pos.geometry.coordinates as LngLatLike)
            .addTo(map);
          marker.setPopup(popup);
        }
      });

      const uni = allBounds.map((b: any) => bboxPolygon(b));
      const bounds = bbox(featureCollection(uni)) as LngLatBoundsLike;
      map.fitBounds(bounds, {
        padding: 50,
        animate: false,
      });

      if (stationen) {
        stationen.map(
          ({ location, title }: { location: string; title: string }) => {
            const image = document.createElement("img");
            image.src = icon ? BASE_PATH + icon : "/logo.png";

            const container = document.createElement("div");
            container.style.width = "40px";
            container.style.height = "40px";

            container.classList.add(
              "flex",
              "items-center",
              "justify-center",
              "bg-white",
              "rounded-full",
              "overflow-hidden",
              "shadow-lg",
              "shadow-[#0006]"
            );

            container.appendChild(image);

            const position = location
              .split(",")
              .map((pos) => parseFloat(pos)) as LngLatLike;

            const marker = new mapboxgl.Marker({
              element: container,
            })

              .setLngLat(position)
              .addTo(map);

            const popupStation = new mapboxgl.Popup({
              offset: 48,
              className: "rounded-xl shadow-lg bg-white p-2 border-0",
            }).setHTML(
              `<div class="flex flex-col item-center">
              <span class="text-center text-sm opacity-20" >Station</span>
              <h3 class="text-center text-lg mb-2 font-bold text-main " >${title}</h3>
              </div>`
            );

            marker.setPopup(popupStation);
          }
        );
      }

      setTimeout(() => {
        setIsMapLoaded(true);
      }, 500);
    });

    return () => {
      map.remove();
    };
  }, [geojson, icon, stationen]);

  return (
    <>
      {!isMapLoaded && (
        <div className="absolute top-0 z-50 h-full w-full bg-gray-100" />
      )}
      <div ref={mapContainer} className="map-container h-full w-full" />
    </>
  );
};
export default Map;
