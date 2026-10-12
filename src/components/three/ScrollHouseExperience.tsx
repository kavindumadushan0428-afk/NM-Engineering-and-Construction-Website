"use client";
import { Component, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import Arrow from "@/components/ui/Arrow";
const HouseScene = dynamic(() => import("./HouseScene"), {
  ssr: false,
  loading: () => (
    <p className="p-8" role="status">
      Loading the interactive model…
    </p>
  ),
});
class SceneBoundary extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="p-8">
        <p>The interactive model could not load on this device.</p>
        <a href="/projects" className="text-link">
          Explore project images <Arrow size={14} />
        </a>
      </div>
    ) : (
      this.props.children
    );
  }
}
export default function ScrollHouseExperience() {
  const [active, setActive] = useState(false);
  const [angle, setAngle] = useState(0);
  const [version, setVersion] = useState(0);
  const [roofVisible, setRoofVisible] = useState(true);
  return (
    <div className="model-viewer">
      <div
        className="model-canvas"
        role="region"
        aria-label="Interactive house model"
        aria-describedby="model-instructions"
      >
        {active ? (
          <SceneBoundary>
            <HouseScene key={version} angle={angle} roofVisible={roofVisible} />
          </SceneBoundary>
        ) : (
          <>
            <Image
              src="/Image/3D/3d-teaser.webp"
              alt="Architectural house visualization — load the model to explore its exterior"
              fill
              sizes="(max-width: 1440px) 100vw, 1344px"
              className="object-cover"
            />
            <div className="model-load">
              <button
                type="button"
                className="button primary"
                onClick={() => setActive(true)}
              >
                Load interactive 3D model
              </button>
            </div>
          </>
        )}
      </div>
      <div className="model-toolbar">
        <p id="model-instructions">
          {active
            ? "Drag to look around, or use the rotation buttons."
            : "An exterior model preview. Loads only when you choose."}
        </p>
        {active && (
          <div>
            <button
              type="button"
              onClick={() => setAngle((a) => a - Math.PI / 6)}
              aria-label="Rotate house left"
            >
              ←
            </button>
            <button
              type="button"
              onClick={() => setAngle((a) => a + Math.PI / 6)}
              aria-label="Rotate house right"
            >
              →
            </button>
            <button
              type="button"
              aria-pressed={!roofVisible}
              onClick={() => setRoofVisible((v) => !v)}
            >
              {roofVisible ? "Explore floor plan" : "Show roof"}
            </button>
            <button
              type="button"
              onClick={() => {
                setAngle(0);
                setRoofVisible(true);
                setVersion((v) => v + 1);
              }}
            >
              Reset view
            </button>
            <button type="button" onClick={() => setActive(false)}>
              Close model
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
