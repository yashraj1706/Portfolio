// import Spline from "@splinetool/react-spline";
// import { useState } from "react";
// import CanvasLoader from "../Loader";

// export default function DesktopSpline() {
//   const [isLoading, setIsLoading] = useState(true);

//   return (
//     <div className="relative w-full h-full">
//       {isLoading && (
//         <div className="loader-container">
//           <CanvasLoader />
//         </div>
//       )}
//       <Spline
//         scene="https://prod.spline.design/0J1ODbEjN6Yd4y9J/scene.splinecode"
//         style={{ scale: "1.3" }}
//         onLoad={() => setIsLoading(false)}
//       />
//     </div>
//   );
// }

import Spline from '@splinetool/react-spline';
import  {LoaderFour}  from '../ui/LoaderFour';
import { useState } from "react";

export default function DesktopSpline() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden">
        {isLoading && (
            <div className="w-full h-full flex justify-center items-center" >
              <LoaderFour />
            </div>
          
        )}
        <Spline
            scene="https://prod.spline.design/0J1ODbEjN6Yd4y9J/scene.splinecode" //computer and lamp
            // scene="https://prod.spline.design/y1KoZrVnxEXv348M/scene.splinecode" // particles
            className="!w-[110%] !h-[110%] absolute top-0 left-0"
            onLoad={() => setIsLoading(false)}
        />
    </div>   
  );
}
