import React from "react";
import Tree from "react-d3-tree";
import orgChartJson from "./data/org-chart.json";
import { useCenteredTree } from "./helpers";
import "./styles.css";
import DThree from "./DThree";
import ReactHorizontal from "./ReactHorizontal";
import ReactTreeGraph from "./ReactTreeGraph";

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
    <circle
      r="15"
      onClick={() => handleNodeClick(nodeDatum)}
      className="myCustomCircle"
    ></circle>
    <image href="images/download.png" height="40" width="40" />
    <text fill="black" strokeWidth="1" x="20" onClick={toggleNode}>
      {nodeDatum.name} (click me to toggle 👋)
    </text>
    {nodeDatum.attributes?.department && (
      <text fill="black" x="20" dy="20" strokeWidth="1">
        Department: {nodeDatum.attributes?.department}
      </text>
    )}
  </g>
);

export default function App() {
  const handleNodeClick = (nodeDatum) => {
    window.alert(
      nodeDatum.children ? "Clicked a branch node" : "Clicked a leaf node."
    );
  };
  const [translate, containerRef] = useCenteredTree();
  return (
    <>
      {/* <div style={{ border: "1px solid red", width: "50%", margin: "auto" }}>
        <h2>Hi</h2>
        <DThree />
      </div> */}

      <div style={containerStyles} ref={containerRef}>
        <Tree
          data={orgChartJson}
          translate={translate}
          renderCustomNodeElement={(rd3tProps) =>
            renderNodeWithCustomEvents({ ...rd3tProps, handleNodeClick })
          }
          orientation="vertical"
        />
      </div>

      <ReactHorizontal />
      <ReactTreeGraph />
    </>
  );
}
