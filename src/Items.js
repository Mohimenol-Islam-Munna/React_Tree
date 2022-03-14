import React from "react";
import { Tree, TreeNode } from "react-organizational-chart";

const Items = ({ items }) =>
  Array.isArray(items) && items.length ? (
    <>
      {items.map((n, indx) => (
        <TreeNode
          key={indx}
          label={
            <div
              style={{
                display: "inline-block",
                border: "1px solid salmon",
                borderRadius: "20px",
                padding: "10px",
              }}
            >
              <h6
                style={{
                  margin: "2px",
                  padding: "0px",
                  color: "blueviolet",
                }}
              >
                {n.name}
              </h6>
              <img
                src="images/download.png"
                alt="user"
                width="40"
                height="40"
              />
            </div>
          }
        >
          {n.children && <Items items={n.children} />}
        </TreeNode>
      ))}
    </>
  ) : null;
export default Items;
