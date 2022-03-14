import React from "react";
import Tree from "react-d3-tree";

const orgChart = {
  name: "Munna",
  children: [
    {
      name: "Manager",
      attributes: {
        department: "Production",
      },
      children: [
        {
          name: "Foreman",
          attributes: {
            department: "Fabrication",
          },
          children: [
            {
              name: "Workers",
            },
          ],
        },
        {
          name: "Foreman",
          attributes: {
            department: "Assembly",
          },
          children: [
            {
              name: "Workers",
            },
          ],
        },
      ],
    },
    {
      name: "Manager",
      attributes: {
        department: "Marketing",
      },
      children: [
        {
          name: "Sales Officer",
          attributes: {
            department: "A",
          },
          children: [
            {
              name: "Salespeople",
            },
          ],
        },
        {
          name: "Sales Officer",
          attributes: {
            department: "B",
          },
          children: [
            {
              name: "Salespeople",
            },
          ],
        },
      ],
    },
  ],
};

export default function DThree() {
  return (
    <div id="treeWrapper" style={{ width: "50em", height: "20em" }}>
      <Tree data={orgChart} orientation="vertical" />
    </div>
  );
}
