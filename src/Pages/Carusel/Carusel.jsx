import { useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";
import Logo1 from "../../assets/logosBrend/logo_1.jpg";
import Logo2 from "../../assets/logosBrend/logo_2.jpg";
import Logo3 from "../../assets/logosBrend/logo_3.jpg";
import Logo4 from "../../assets/logosBrend/logo_4.png";
import Logo5 from "../../assets/logosBrend/logo_5.jpg";
import Logo6 from "../../assets/logosBrend/logo_6.png";
import Logo7 from "../../assets/logosBrend/logo_7.png";
import Logo8 from "../../assets/logosBrend/logo_8.png";
import Logo9 from "../../assets/logosBrend/logo_9.png";

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6, Logo7, Logo8, Logo9];

export default function Carusel() {
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.style.animation = "scroll 15s linear infinite"; // 15s tezlik biroz sekinroq
    }
  }, []);

  return (
    <div id='partners' className="w-full py-20 flex items-center overflow-hidden bg-gray-100 relative">
      <div
        ref={scrollRef}
        className="flex w-max gap-6 xl:gap-16 animate-[scroll_15s_linear_infinite]"
      >
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-20 xl:h-[69px] w-auto object-contain"
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


