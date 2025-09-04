import { FaPlay } from "react-icons/fa";

export default function CircularPlayButton() {
  const text = " Learn about us through this video"; // el punto cierra el círculo

  return (
    <div className="relative flex items-center justify-center w-48 h-48">
      {/* SVG del texto circular */}
      <svg className="absolute w-full h-full" viewBox="0 0 200 200">
        <defs>
          <path
            id="circlePath"
            d="
              M100,100
              m-75,0
              a75,75 0 1,1 150,0
              a75,75 0 1,1 -150,0
            "
          />
        </defs>
        <text fill="#0C2117" fontSize="20" letterSpacing="4">
          <textPath href="#circlePath" startOffset="6%">
            {text.repeat(2)}
          </textPath>
        </text>
      </svg>

      {/* Botón central */}
      <button className="bg-[#FBCE46] w-16 h-16 rounded-full flex items-center justify-center z-10 shadow-md hover:scale-105 transition-transform">
        <FaPlay className="text-2xl text-[#0C2117]" />
      </button>
    </div>
  );
}