import { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import Logo1 from "../../assets/logosBrend/Logo (4).png";
import Logo2 from "../../assets/logosBrend/Logo (5).png";
import Logo3 from "../../assets/logosBrend/Logo (6).png";
import Logo4 from "../../assets/logosBrend/Logo (7).png";
import Logo5 from "../../assets/logosBrend/Logo (8).png";
import Logo6 from "../../assets/logosBrend/Logo (9).png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];

export default function Carusel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.animation = "scroll 15s linear infinite"; // 15s tezlik biroz sekinroq
    }
  }, []);

  return (
    <div id='partners' className="w-full h-32 xl:h-[250px] flex items-center overflow-hidden bg-gray-100 py-4 relative">
      <div
        ref={scrollRef}
        className="flex w-max gap-6 xl:gap-16 animate-[scroll_15s_linear_infinite]"
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-8 xl:h-[69px] w-auto object-contain"
          />
        ))}
      </div>

      <style>
        {`
          @keyframes scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
}


