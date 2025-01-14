import React from "react";

interface Data {
  text: string;
  className?: string;
}

function Button(props: Data) {
  return (
    <div>
      <button className="font-medium text-lg md:text-xl border-b-2 border-[#000000]">
        {props.text}
      </button>
    </div>
  );
}

export default Button;
