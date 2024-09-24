import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";
import { IsotipoRepowerlab, Logo } from "@/components/icons";
import Image from "next/image";

type Poi = {
  id: number;
  key: string;
  location: google.maps.LatLngLiteral;
  type: "Office" | "other";
  projectType:
    | "Refurbished wind turbines"
    | "New wind turbines secondary market"
    | 'Used wind turbines "as is"'
    | "Repowerlab";
  projectDesc: "Projects implemented by Repowerlab staff" | string;
};
const locations: Poi[] = [
  {
    id: 1,
    key: "Sweden",
    location: { lat: 63.025971, lng: 16.214388 },
    type: "other",
    projectType: "New wind turbines secondary market",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 2,
    key: "Poland",
    location: {
      lat: 53.46285,
      lng: 18.184682,
    },
    type: "other",
    projectType: "New wind turbines secondary market",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 3,
    key: "Scotland",
    location: { lat: 57.985997, lng: -4.831163 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 4,
    key: "Ireland",
    location: {
      lat: 53.582606,
      lng: -7.798127,
    },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 5,
    key: "United Kingdom",
    location: { lat: 52.813761, lng: -0.278399 },
    type: "other",
    projectType: "Refurbished wind turbines",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 6,
    key: "Spain",
    location: { lat: 40.7904513, lng: -2.9853098 },
    type: "Office",
    projectType: "Repowerlab",
    projectDesc: "Balcon 98, 19192 Trijueque, Guadalajara, España",
  },
  {
    id: 7,
    key: "Spain",
    location: {
      lat: 38.064223,
      lng: -3.602397,
    },
    type: "other",
    projectType: "Refurbished wind turbines",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 8,
    key: "France",
    location: { lat: 44.420935, lng: 3.895735 },
    type: "other",
    projectType: "New wind turbines secondary market",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 9,
    key: "Italy",
    location: { lat: 43.939791, lng: 10.91641 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 10,
    key: "Italy",
    location: { lat: 40.571418, lng: 17.266168 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 11,
    key: "Greece",
    location: { lat: 40.068682, lng: 21.464399 },
    type: "other",
    projectType: "New wind turbines secondary market",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 12,
    key: "Turkey",
    location: { lat: 39.175314, lng: 27.383441 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 13,
    key: "Usa",
    location: { lat: 38.8886088, lng: -77.0923757 },
    type: "Office",
    projectType: "Repowerlab",
    projectDesc: "2623 Fairfax Drive, Arlington, VA 22201",
  },
  {
    id: 14,
    key: "Nicaragua",
    location: {
      lat: 12.251737,
      lng: -85.256947,
    },
    type: "other",
    projectType: "Refurbished wind turbines",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 15,
    key: "Colombia",
    location: { lat: 3.4556803, lng: -76.5391023 },
    type: "Office",
    projectType: "Repowerlab",
    projectDesc: "Calle 45 No. 45-45, Bogotá, Colombia",
  },
  {
    id: 16,
    key: "Colombia",
    location: {
      lat: 0.976313,
      lng: -72.252799,
    },
    type: "other",
    projectType: "New wind turbines secondary market",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 17,
    key: "Chile",
    location: { lat: -25.636961, lng: -69.562981 },
    type: "other",
    projectType: "Refurbished wind turbines",
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 18,
    key: "Chile",
    location: { lat: -39.631439, lng: -72.461204 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 19,
    key: "Argentina",
    location: { lat: -36.100152, lng: -62.393221 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
  {
    id: 20,
    key: "Kenya",
    location: { lat: -0.135818, lng: 39.182963 },
    type: "other",
    projectType: 'Used wind turbines "as is"',
    projectDesc: "Projects implemented by Repowerlab staff",
  },
];

const MapaMundial = () => {
  const [indexLocation, setIndexLocation] = useState<number>(0);

  return (
    <div className="h-[420px] w-full relative grid place-items-center">
      <div className="absolute h-full w-[99vw]">
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 22.54992, lng: 0 }}
          defaultZoom={3}
          mapId={process.env.NEXT_PUBLIC_MAP_DESIGN_ID as string}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          {locations.map((poi, index) => (
            <AdvancedMarker
              key={poi.key + index}
              position={poi.location}
              onMouseEnter={() => setIndexLocation(index + 1)}
              onClick={() => {}}
            >
              <div
                data-tooltip-id="my-tooltip"
                className="group -z-[1] h-10 w-10 bg-primary rounded-full grid place-items-center relative after:absolute after:bg-primary after:h-6 after:w-6 after:rotate-45 after:translate-y-[0.73rem] after:rounded-[3px] "
              >
                <span
                  className={`z-30 ${poi.type === "Office" ? "fill-accent" : "fill-secondary"}`}
                >
                  <IsotipoRepowerlab />
                </span>
              </div>
            </AdvancedMarker>
          ))}
        </Map>
      </div>
      <Tooltip
        id="my-tooltip"
        arrowColor="transparent"
        opacity={1}
        className={`shadow-[0px_4px_4px_0px_#00000040] py-[15px] px-[15px]  rounded-lg w-[270px] flex flex-col gap-2 text-start text-primary bg-pink-50 ${locations.find((item) => item.id === indexLocation)?.type === "Office" ? "bg-accent" : "bg-secondary"} `}
        style={{
          backgroundColor:
            locations.find((item) => item.id === indexLocation)?.type ===
            "Office"
              ? "#E8B516"
              : "#BACCE6",
          paddingBlock: "12px",
          width: 270,
          borderRadius: 8,
          zIndex: 999999999999,
        }}
      >
        <figure className="relative inline-block h-[87px] w-full">
          <Image
            alt=""
            src={"/images/noImage.png"}
            fill
            className=" bg-gray-600 rounded-[7px] h-3 object-contain py-6"
          />
        </figure>
        <h3 className="text-base text-primary font-extrabold">
          {locations.find((item) => item.id === indexLocation)?.projectType}
        </h3>
        <span className="text-xs text-primary font-medium uppercase">
          {locations.find((item) => item.id === indexLocation)?.key}
        </span>
        <span className="text-xs text-primary">
          {locations.find((item) => item.id === indexLocation)?.projectDesc}
        </span>
      </Tooltip>
    </div>
  );
};

export default MapaMundial;
