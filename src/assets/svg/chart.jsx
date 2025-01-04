import React from "react";
const Chart = () => {
  return (
    <svg
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
      style={{
        display: "block",
        height: "32px",
        width: "32px",
        fill: "rgb(227, 28, 95)",
        stroke: "currentcolor",
      }}
    >
      <g stroke="none">
        <path
          d="M24 6c.336 0 .67.01 1 .027V23.6l12.409 12.408A17.955 17.955 0 0 1 24 42c-9.941 0-18-8.059-18-18S14.059 6 24 6z"
          fill-opacity=".2"
        ></path>
        <path d="M24 2c12.15 0 22 9.85 22 22s-9.85 22-22 22S2 36.15 2 24 11.85 2 24 2zm0 2C12.954 4 4 12.954 4 24s8.954 20 20 20 20-8.954 20-20S35.046 4 24 4zm1 6l-.001 13.584 9.708 9.709-1.414 1.414L23 24.414V10h2z"></path>
      </g>
    </svg>
  );
};

export default Chart;