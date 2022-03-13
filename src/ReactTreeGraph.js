import React from "react";
import { Tree } from "react-tree-graph";

function ReactTreeGraph() {
  return (
    <>
      <div>ReactTreeGraph</div>
      <Tree
        data={{
          children: [
            {
              label: (
                <>
                  <image href="images/download.png" height="20" width="20" />
                </>
              ),
              name: "Child One",
            },
            {
              label: (
                <>
                  {" "}
                  <h2>Custom label</h2>{" "}
                </>
              ),
              name: "Child Two",
            },
          ],
          label: "String",
          name: "Parent",
        }}
        height={400}
        labelProp="label"
        width={600}
      />
    </>
  );
}

export default ReactTreeGraph;
