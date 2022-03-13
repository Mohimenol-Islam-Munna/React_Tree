import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const ReactHorizontal = () => (
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
        lineBorderRadius="100%"
        lineColor="blueviolet"
        lineHeight="30px"
        lineWidth="1px"
        label={
          <div
            style={{
              display: "inline-block",
            }}
          >
            <h4>Hi Root</h4>
            <img src="images/download.png" alt="user" width="50" height="50" />
          </div>
        }
      >
        <TreeNode
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
        <TreeNode
          label={
            <div>
              <img
                src="images/download.png"
                alt="user"
                width="50"
                height="50"
              />
            </div>
          }
        >
          <TreeNode label={<div>Grand Child</div>}>
            <TreeNode
              label={
                <div>
                  <img
                    src="images/download.png"
                    alt="user"
                    width="50"
                    height="50"
                  />
                </div>
              }
            />
          </TreeNode>
          <TreeNode label={<div>Grand Child</div>} />
        </TreeNode>
      </Tree>
    </div>

    {/* svg image  */}
    <div>
      <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
        <image href="images/download.png" height="200" width="200" />
      </svg>
    </div>
  </>
);

export default ReactHorizontal;
