import React from "react";

export const Hexagon = () => {
  return (
    <p>
      <svg height="110" width="300" data-testid="SVG Container">
        <polygon
          points="50 3, 100 28, 100 75, 50 100, 3 75, 3, 25"
          stroke="red"
          fill="none"
        />
        <polygon
          points="25 15.5, 75 15.5, 100 50, 75 87.5, 26.5 87.5, 3, 50"
          stroke="orange"
          fill="none"
        />
        <polygon
          points="50 15.5, 88 34, 88 67, 50 87.5, 14 67, 14 34"
          stroke="yellow"
          fill="none"
        />
        <polygon
          points="33 24, 67.5 24, 88 50, 67.5 78, 33 78, 14 50"
          stroke="green"
          fill="none"
        />
        <polygon
          points="50 24.5, 78 37, 78 63, 50 78, 22 62, 22 39"
          stroke="blue"
          fill="none"
        />
        <polygon
          points="36.5 32, 65 32, 78 50, 65 70, 36.5 70, 22 50"
          stroke="purple"
          fill="none"
        />
      </svg>
      <div>Hexagon</div>
    </p>
  );
};
