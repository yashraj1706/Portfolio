import Spline from "@splinetool/react-spline";
import { LoaderFour } from "../ui/LoaderFour";
import { useState } from "react";

export default function HeroSpline() {
  const [isLoading, setIsLoading] = useState(true);
  const sceneUrl = import.meta.env.VITE_SPLINE_HERO_SCENE;

  return (
    // <div className="relative w-full h-full overflow-hidden">
    <div className="relative w-full h-full overflow-hidden will-change-transform contain-content">
      {isLoading && (
        <div className="w-full h-full flex justify-center items-center">
          <LoaderFour />
        </div>
      )}
      {sceneUrl ? (
        <Spline
          scene={sceneUrl}
          className="!w-[110%] !h-[110%] absolute top-0 left-0"
          onLoad={() => setIsLoading(false)}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-secondary">
          Missing VITE_SPLINE_HERO_SCENE
        </div>
      )}
    </div>
  );
}
