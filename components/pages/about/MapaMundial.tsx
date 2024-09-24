import React, { useState } from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { AdvancedMarker, Map, Pin } from "@vis.gl/react-google-maps";
import { IsotipoRepowerlab, Logo } from "@/components/icons";
import Image from "next/image";
import { locations } from "@/utils/aboutMapData";


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
