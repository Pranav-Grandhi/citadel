import { useRef, useState, useEffect } from "react";
import useWindowDimensions from "../utils/useWindowSize";
import createGlobe from "../utils/globe";

export default function GlobeExplorer() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { width, height } = useWindowDimensions();
  const [interalPhi, setInternalPhi] = useState(0);

  useEffect(() => {
    let phi = 0;

    const globe = createGlobe(canvasRef.current!, {
      devicePixelRatio: 2,
      width: width!,
      height: width!,
      phi: 0,
      theta: 0,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 6,
      baseColor: [0.3, 0.3, 0.3],
      markerColor: [0.1, 0.8, 1],
      glowColor: [1, 1, 1],
      markers: [
        // longitude latitude
      ],
      onRender: (state) => {
        let phi = interalPhi;
        state.phi + phi;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <>
      <canvas
        ref={canvasRef}
        style={{ width: width! / 2, height: width! / 2 }}
      />
      <div className="absolute w-1/2 h-full px-8 py-6">
        <div className="flex space-x-4">
          <div>
            <button className="px-2 py-1 rounded-l-md bg-neutral-200 active:bg-neutral-300 border-x border-y border-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
            </button>
            <button className="px-2 py-1 rounded-r-md bg-neutral-200 active:bg-neutral-300 border-r border-y border-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M18 12H6"
                />
              </svg>
            </button>
          </div>
          <div>
            <button
              className="px-2 py-1 rounded-l-md bg-neutral-200 active:bg-neutral-300 border-x border-y border-neutral-400"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 11l5-5m0 0l5 5m-5-5v12"
                />
              </svg>
            </button>
            <button className="px-2 py-1 rounded-r-md bg-neutral-200 active:bg-neutral-300 border-r border-y border-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 13l-5 5m0 0l-5-5m5 5V6"
                />
              </svg>
            </button>
          </div>
          <div>
            <button className="px-2 py-1 rounded-l-md bg-neutral-200 active:bg-neutral-300 border-x border-y border-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
            <button className="px-2 py-1 rounded-r-md bg-neutral-200 active:bg-neutral-300 border-r border-y border-neutral-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
