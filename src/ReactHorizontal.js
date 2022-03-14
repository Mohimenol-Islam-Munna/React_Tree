import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import data from "./data/org-chart.json";

const ReactHorizontal = () => {
  console.log("json data 1 ::", data.children);

  return (
    <>
      <div
        style={{
          width: "50%",
          margin: "30px auto",
          padding: "30px",
          border: "1px solid blueviolet",
        }}
      >
        {" "}
        <Tree
          lineBorderRadius="10%"
          lineColor="blueviolet"
          lineHeight="40px"
          lineWidth="1px"
          label={
            <div
              style={{
                display: "inline-block",
              }}
            >
              <h4>Hi Root</h4>
              <img
                src="images/download.png"
                alt="user"
                width="50"
                height="50"
              />
            </div>
          }
        >
          {data.children &&
            data.children.map((c1, i) => (
              <TreeNode
                key={i}
                label={
                  <div
                    style={{
                      display: "inline-block",
                    }}
                  >
                    <img
                      src="images/download.png"
                      alt="user"
                      width="50"
                      height="50"
                    />
                  </div>
                }
              >
                <TreeNode label={<div>Grand Child</div>} />
                <TreeNode label={<div>Grand Child</div>} />
              </TreeNode>
            ))}
        </Tree>
      </div>
    </>
  );
};

export default ReactHorizontal;


