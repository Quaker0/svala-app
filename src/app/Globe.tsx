"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import the Globe component with SSR disabled
const ReactGlobe = dynamic(() => import("react-globe.gl"), {
  ssr: false,
  loading: () => (
    <div className="w-[500px] h-[500px] bg-gray-200 animate-pulse rounded-lg" />
  ),
});

export default function Globe() {
  const globeRef = useRef<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  const pointsData = [
    {
      lat: -33.9249,
      lng: 18.4241,
      name: "Cape Town",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated && globeRef.current) {
            // Animate to Cape Town when component comes into view
            globeRef.current.pointOfView(
              {
                lat: pointsData[0].lat + 2,
                lng: pointsData[0].lng - 5,
                altitude: 2,
              },
              2000
            );
            setHasAnimated(true);
          } else if (globeRef.current && !entry.isIntersecting) {
            globeRef.current.pointOfView({
              lat: 0,
              lng: 0,
              altitude: 2,
            });
            setHasAnimated(false);
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the component is visible
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [hasAnimated, pointsData]);

  return (
    <div ref={containerRef} className="relative w-full px-6 sm:px-16">
      <div className="flex items-center justify-between gap-8">
        <ReactGlobe
          ref={globeRef}
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
          pointsData={pointsData}
          height={500}
          width={500}
          backgroundColor="#E6F4FF"
          pointRadius={2}
          pointAltitude={0.01}
          pointResolution={100}
        />
        <div className="max-w-md">
          <p className="text-xl text-[#0a2540] leading-relaxed">
            <strong>Cape Town</strong> based, but available anywhere online.
          </p>
        </div>
      </div>
    </div>
  );
}
