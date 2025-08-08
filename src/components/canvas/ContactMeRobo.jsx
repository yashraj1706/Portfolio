import Spline from '@splinetool/react-spline';

export default function ContactMeRobo() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <Spline
        scene="https://prod.spline.design/tjw1HMnGK9C1tQUD/scene.splinecode"
        
        // className="w-full h-full z-[-10] md:scale-[1.21] scale-[0.95] "  
        // style={{
        //   width: '100%',
        //   height: '100%',
        // }}   
        className="!w-[120%] !h-[120%] md:!w-[109%] md:!h-[109%] absolute top-0 left-0"
      />
    </div>  
    
  );
}
