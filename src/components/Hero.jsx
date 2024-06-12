import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

function Hero() {
  const title = useRef(null);
  const subtitle = useRef(null);
  const subtitle2 = useRef(null);
  const date = useRef(null);
  const render = useRef(null);

  useEffect(() => {
    //loop the video from 0:03 to 0:06
    render.current.currentTime = 0.5;
    render.current.addEventListener("timeupdate", function () {
      if (this.currentTime > 9) {
        this.currentTime = 0.5;
      }
    });
    gsap.fromTo(
      title.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 0.5 }
    );
    gsap.fromTo(
      subtitle.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 1 }
    );
    gsap.fromTo(
      subtitle2.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 2.5 }
    );
    gsap.fromTo(
      date.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 1.5, delay: 3 }
    );
  }, []);

  return (
    <div className="hero relative xl:hidden py-8 h-fit flex flex-col uppercase justify-center">
      <video
        ref={render}
        src="/Bg.mp4"
        autoPlay
        muted
        className="absolute top-0 left-0 w-full h-full object-scale-down bg-black opacity-50"
      ></video>

      <div className="text-white  flex flex-col pt-[8rem] uppercase font-extrabold md:ml-[1rem] lg:ml-[2rem] px-5 ">
        <h1 ref={title} className="font-chakra sm:text-2xl opacity-0">
        UNIVERSITY COLLEGE OF ENGINEERING KARIAVATTOM
        </h1>
        <div ref={subtitle} className="font-clash flex flex-wrap opacity-0">
          <span className="text-[3.5rem] sm:text-[6.5rem] md:text-[9rem] lg:text-[9rem]">
          RENVNZA
          </span>
          <span className="text-[#000000] relative top-[-3rem] font-chakra text-stroke-black text-[5rem] md:text-[9rem]">
            2024
          </span>
        </div>
        <span
          ref={subtitle2}
          className="opacity-0 relative top-[-5rem] text-[3.5rem] sm:text-[5rem] md:text-[7rem] font-clash"
        >
        </span>
      </div>

      <div
        ref={date}
        className="relative md:ml-10 opacity-0 flex flex-col font-bold bg-white w-fit text-xl rounded-md text-black p-2 pr-8 ml-[1.5rem] md:text-3xl  z-10"
      >
        <span className="font-chakra">
          2024 <span className="font-clash">July</span>
        </span>
        <span className="flex gap-2 text-[2rem] font-chakra font-bold">
          03
          <b className="text-[16px]">TH</b>
          04
          <b className="text-[16px]">TH</b>
          05
          <b className="text-[16px]">TH</b>
        </span>
        <Image
          src="/edgeTriangle.png"
          width={30}
          height={30}
          alt="edgetriangle"
          className="absolute bottom-[-1px] right-[-1px]"
        />
      </div>
    </div>
  );
}

export default Hero;
