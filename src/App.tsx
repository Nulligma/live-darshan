import {
  FaArrowLeft,
  FaArrowRight,
  FaFilter,
  FaPray,
  FaSearch,
} from "react-icons/fa";
import "./App.css";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Deity, Event, templeList } from "./data";

function App() {
  const [open, setOpen] = useState(false);
  const [templeIndex, setTempleIndex] = useState(0);
  const mapRef = useRef(null);

  return (
    <main className="font-display flex flex-col h-screen">
      <div className="p-6 h-[25vh] bg-purple-800">
        <h1 className="text-2xl md:text-5xl text-white text-center font-bold mb-6">
          Live Darshan
        </h1>
        <form action="/" className="flex items-center justify-center">
          <input
            type="text"
            id="ip-input"
            placeholder="Search for any city or live location"
            className="bg-white rounded-l-lg p-3 w-3xl h-16 text-lg"
          />
          <button
            type="submit"
            className="bg-gray-800 text-center p-6 text-xl hover:bg-gray-700 rounded-r-lg cursor-pointer text-white"
          >
            <FaSearch />
          </button>
        </form>

        <div
          className="z-10 flex flex-col gap-4 max-w-7xl mx-auto md:flex-row md:justify-between text-center items-center rounded-lg bg-white p-6 relative top-10 shadow-2xl"
          id="info"
        >
          <div className="md:h-40 md:w-[25%] px-4 flex flex-col md:gap-3 gap-2">
            <span className="uppercase text-gray-500 font-bold">Name</span>
            <span
              className="text-gray-700 text-lg md:text-xl font-bold"
              id="ip-info"
            >
              {templeList[templeIndex].name}
            </span>
          </div>
          <div className="md:h-40 md:w-[25%] px-4 flex flex-col md:gap-3 gap-2 md:border-l">
            <span className="uppercase text-gray-500 font-bold">location</span>
            <span
              className="text-gray-700 text-lg md:text-xl font-bold"
              id="location-info"
            >
              {templeList[templeIndex].location}
            </span>
          </div>
          <div className="md:h-40 md:w-[25%] px-4 flex flex-col md:gap-3 gap-2 md:border-l">
            <span className="uppercase text-gray-500 font-bold">Event</span>
            <span
              className="text-gray-700 text-lg md:text-xl font-bold"
              id="timezone-info"
            >
              {Event[templeList[templeIndex].event]}
            </span>
          </div>
          <div className="md:h-40 md:w-[25%] px-4 flex flex-col md:gap-3 gap-2 md:border-l">
            <span className="uppercase text-gray-500 font-bold">Deity</span>
            <span
              className="text-gray-700 text-lg md:text-xl font-bold"
              id="isp-info"
            >
              {Deity[templeList[templeIndex].deity]}
            </span>
          </div>
        </div>
      </div>

      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95"
            >
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <FaPray
                      aria-hidden="true"
                      className="size-6 text-red-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold text-gray-900"
                    >
                      {templeList[templeIndex].name}
                    </DialogTitle>
                    <div className="mt-2">
                      <iframe
                        allowFullScreen
                        src={templeList[templeIndex].video}
                        title="YouTube video player"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        width={400}
                        height={250}
                        className="mx-auto"
                      ></iframe>
                    </div>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {templeList[templeIndex].about}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-red-500 sm:ml-3 sm:w-auto"
                >
                  Like
                </button>
                <button
                  type="button"
                  data-autofocus
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <div className="mb-auto bg-red-200 h-full">
        <MapContainer
          center={[templeList[0].lat, templeList[0].long]}
          zoom={15}
          scrollWheelZoom={true}
          ref={mapRef}
          style={{ height: "100%", width: "100%", zIndex: "0" }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Map
            templeIndex={templeIndex}
            openModal={setOpen}
            changeLocation={(i) => {
              if (i === templeIndex) setOpen(true);
              setTempleIndex(i);
            }}
            key={templeIndex}
          />
        </MapContainer>
      </div>

      <footer className="h-[10vh] bg-purple-200 py-2 px-20 text-gray-700 border-t-3 border-purple-500">
        <div className="max-w-7xl flex justify-between mx-auto">
          <button
            className="flex flex-col items-center gap-2 text-center bg-purple-100 rounded-lg p-3 w-50 cursor-pointer"
            disabled={templeIndex === 0}
            onClick={() => setTempleIndex((old) => old - 1)}
          >
            <span className="text-3xl">
              <FaArrowLeft />
            </span>
            <span>
              Previous <br /> Darshan
            </span>
          </button>
          <button
            className="flex flex-col items-center gap-2 text-center bg-purple-100 rounded-lg p-3 w-50 cursor-pointer"
            onClick={() => {}}
          >
            <span className="text-3xl">
              <FaFilter />
            </span>
            <span>
              Filter <br /> Map
            </span>
          </button>
          <button
            className="flex flex-col items-center gap-2 text-center bg-purple-100 rounded-lg p-3 w-50 cursor-pointer disabled:bg-gray-200"
            disabled={templeIndex === templeList.length - 1}
            onClick={() => setTempleIndex((old) => old + 1)}
          >
            <span className="text-3xl">
              <FaArrowRight />
            </span>
            <span>
              Next <br /> Darshan
            </span>
          </button>
        </div>
      </footer>
    </main>
  );
}

function Map({
  templeIndex,
  openModal,
  changeLocation,
}: {
  templeIndex: number;
  openModal: (resullt: boolean) => void;
  changeLocation: (index: number) => void;
}) {
  const map = useMap();

  useEffect(() => {
    map.flyTo([templeList[templeIndex].lat, templeList[templeIndex].long]);
  }, [templeIndex, map]);

  useMapEvents({
    click() {
      openModal(true);
    },
  });

  return templeList.map((temple, index) => (
    <Marker
      position={[temple.lat, temple.long]}
      eventHandlers={{
        click: () => {
          changeLocation(index);
        },
      }}
      icon={
        new Icon({
          iconUrl: temple.icon,
          iconSize: [100, 100],
        })
      }
    ></Marker>
  ));
}

export default App;
