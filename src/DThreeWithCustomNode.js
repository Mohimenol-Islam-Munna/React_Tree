import React, { useState } from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/org-chart.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";

const containerStyles = {
  width: "100vw",
  height: "100vh",
};

const renderNodeWithCustomEvents = ({
  nodeDatum,
  toggleNode,
  handleNodeClick,
}) => (
  <g>
    <image
      href="/images/download.png"
      width="50"
      height="50"
      x="-28"
      y="-25"
      onClick={() => handleNodeClick(nodeDatum)}
    ></image>

    <text fill="black" strokeWidth="1" x="20" onClick={toggleNode}>
      {nodeDatum.name}
    </text>

    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function DThreeWithCustomNode() {
  // zoom
  const [zoomLevel, setZoomLevel] = useState(0.5);

  const handleNodeClick = (nodeDatum) => {
    window.alert(
      nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
    );
  };
  const [translate, containerRef] = useCenteredTree();

  return (
    <>
      <div style={containerStyles} ref={containerRef}>
        <Tree
          data={orgChartJson}
          translate={translate}
          zoom={zoomLevel}
          zoomable={true}
          renderCustomNodeElement={(rd3tProps) =>
            renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick })
          }
          orientation="vertical"
        />
      </div>
    </>
  );
}
