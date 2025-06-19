"use client";

import {
  useLoadScript,
  GoogleMap,
  MarkerF,
  OverlayView,
} from "@react-google-maps/api";
import { useMemo, useState } from "react";
import { FaLocationArrow } from "react-icons/fa";

function GoogleMapComponent() {
  const [clickPin, setClickPin] = useState(true);

  const handleClickPin = () => {
    setClickPin((prevClickPin) => !prevClickPin);
  };

  const libraries = useMemo(() => ["places"], []);

  const mapCenter = useMemo(() => ({ lat: 44.9848723, lng: 25.6403603 }), []);

  const mapOptions = useMemo<google.maps.MapOptions>(
    () => ({
      disableDefaultUI: false,
      clickableIcons: true,
      scrollwheel: true,
    }),
    []
  );

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_MAP_KEY as string,
    libraries: libraries as any,
  });

  if (!isLoaded) {
    return <p>Loading...</p>;
  }

  return (
    <div className="py-10">
      <GoogleMap
        options={mapOptions}
        zoom={14}
        center={mapCenter}
        mapTypeId={google.maps.MapTypeId.ROADMAP}
        mapContainerClassName="w-[300px] h-[300px] md:w-[700px] md:h-[700px] lg:w-[1000px] lg:h-[1000px] mx-auto"
      >
        <MarkerF
          onClick={handleClickPin}
          position={mapCenter}
          title="Locația noastră"
        >
          {clickPin && (
            <OverlayView position={mapCenter} mapPaneName={"floatPane"}>
              <>
                <div className="text-black font-semibold bg-white p-10 flex flex-col justify-center items-center gap-3 rounded-lg relative right-25 top-1 w-50 h-25 border border-background/10 text-md">
                  <div className="flex justify-center items-center gap-2">
                    <a
                      href="https://www.google.com/maps/place/Mobila+Moreni+Elit+Parc/@44.7034853,25.6811424,10z/data=!4m6!3m5!1s0x40b257b84fcea415:0xf366654a82a49664!8m2!3d44.9849337!4d25.640312!16s%2Fg%2F11b6sydf1w?entry=ttu&g_ep=EgoyMDI1MDYxNi4wIKXMDSoASAFQAw%3D%3D"
                      target="_blank"
                    >
                      Imprimax Solutions
                    </a>
                    <span>
                      <FaLocationArrow />
                    </span>
                  </div>

                  <p>Program:</p>
                  <p>9:00 - 17:00</p>
                </div>
              </>
            </OverlayView>
          )}
        </MarkerF>
      </GoogleMap>
    </div>
  );
}

export default GoogleMapComponent;
