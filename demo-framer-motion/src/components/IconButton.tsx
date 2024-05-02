import React, { useRef, useState } from "react";

type Props = {};

const IconButton = ({ children, text, color, ...props }: any) => {
    const [hovered, setHovered] = useState(false)
    const ref = useRef<any>(null)

  return (
    <button
    onMouseEnter={()=> setHovered(true)}
    onMouseLeave={()=> setHovered(false)}
      className={`flex p-2 items-center rounded-lg text-white ${
        color || "bg-gray-600"
      }`}
      {...props}
    >
      {children}
      <div style={{width: hovered ? ref.current?.offsetWidth || 0 : 0}} className="over-flow-x-hidden transition-all duration-300 ease-out">
        <span  ref={ref} className="px-2">{text}</span>
      </div>
    </button>
  );
};

export default IconButton;
