import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import GoogleMapReact from "google-map-react";
// eslint-disable-next-line
const AnyReactComponent = ({}) => (
  <div>
    <FaMapMarkerAlt className="text-2xl text-red-700" />
  </div>
);
const Map = () => {
  return (
    <div className="my-6 px-2 xl:px-0">
      <h1 className="font-semibold text-[#1F3D9D] text-[30px] my-2">
      Xaritadan topish
      </h1>
      <div className="h-[244px] md:h-[450px] xl:h-[550px] ">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "" }}
          defaultCenter={{
            lat: 40.379779329340764,
            lng: 71.78977062803216,
          }}
          defaultZoom={16}
        >
          <AnyReactComponent lat={40.379779329340764} lng={71.78977062803216} />
        </GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
