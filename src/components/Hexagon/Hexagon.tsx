import React from "react";

export const Hexagon = () => {
  return (
    <p>
      <svg height="110" width="300">
        <polygon
          points="50 3, 100 28, 100 75, 50 100, 3 75, 3, 25"
          stroke="black"
          fill-opacity="0.0"
          stroke-width="5"
        />
      </svg>
      <div>Hexagon</div>
    </p>
  );
};
