import Spline from '@splinetool/react-spline';
import  {LoaderFour}  from '../ui/LoaderFour';
import { useState } from "react";

export default function HeroSpline() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    // <div className="relative w-full h-full overflow-hidden">
    <div className="relative w-full h-full overflow-hidden will-change-transform contain-content">

        {isLoading && (
            <div className="w-full h-full flex justify-center items-center" >
              <LoaderFour />
            </div>
          
        )}
        <Spline
            // scene="https://prod.spline.design/0J1ODbEjN6Yd4y9J/scene.splinecode" //computer and lamp
            // scene="https://prod.spline.design/6kf2VXWxoG7DAWoO/scene.splinecode" //hero section with bubble
            // scene="https://prod.spline.design/qGo1XcmAaVeLAiEs/scene.splinecode" //clarity line
            scene="https://prod.spline.design/foQZfbMfy50mFPVY/scene.splinecode"
            className="!w-[110%] !h-[110%] absolute top-0 left-0"
            onLoad={() => setIsLoading(false)}
        />
    </div>   
  );
}
