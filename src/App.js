import React from "react";
import "./styles.css";

import Items from "./Items";
import { Tree, TreeNode } from "react-organizational-chart";

const items = [
  {
    title: "Elements",
    text: "Root vai",
    items: [
      {
        title: "1",
        text: "This is First one.",
        items: [
          {
            title: "1:1",
            text: "This is First of the First one.",
            items: [
              {
                title: "1:1:1",
                text: "This is First of the First of the First one.",
              },
              {
                title: "1:1:2",
                text: "This is Second of the First of the First one.",
              },
            ],
          },
          {
            title: "1:2",
            text: "This is Second of the First one.",
            items: [
              {
                title: "1:2:1",
                text: "This is First of the Second of the First one.",
              },
              {
                title: "1:2:2",
                text: "This is Second of the Second of the First one.",
              },
              {
                title: "1:2:3",
                text: "This is Third of the Second of the First one.",
              },
            ],
          },
        ],
      },
      {
        title: "2",
        text: "This is Second one.",
        items: [
          {
            title: "2:1",
            text: "This is First of the Second one.",
            items: [
              {
                title: "2:1:1",
                text: "This is First of the First of the Second one.",
              },
              {
                title: "2:1:2",
                text: "This is Second of the First of the Second one.",
              },
              {
                title: "2:1:3",
                text: "This is Second of the First of the Second one.",
              },
            ],
          },
        ],
      },
    ],
  },
];

// another json data
const initechOrg = [
  {
    _id: "123",
    name: "CLIENT SERVICE",
    children: [
      {
        _id: "222",
        name: "SUCCESS",
      },
      {
        _id: "223",
        name: "ACCOUNT",
      },
      {
        _id: "224",
        name: "BUSINESS DEVELOPMENT",
      },
    ],
  },
  {
    _id: "124",
    name: "MARKETING",
    children: [
      {
        _id: "234",
        name: "SEO",
      },
      {
        _id: "245",
        name: "MEDIA BUYING & MURTURING",
      },
      {
        _id: "267",
        name: "CONTENT BRANDING",
      },
    ],
  },
  {
    _id: "125",
    name: "IT",
    children: [
      {
        _id: "236",
        name: "UX/UI DESIGN",
      },
      {
        _id: "248",
        name: "SOFTWARE ENGINEERING",
      },
      {
        _id: "260",
        name: "DEVELOPER",
      },
    ],
  },
  {
    _id: "126",
    name: "SẢN PHẨM",
    children: [
      {
        _id: "236",
        name: "SEO",
      },
      {
        _id: "248",
        name: "MEDIA",
        children: [
          {
            _id: "880",
            name: "MEDIA BUYING",
          },
          {
            _id: "888",
            name: "MEDIA PLANING & NUTURING",
          },
        ],
      },
      {
        _id: "260",
        name: "PROJECT MANAGER",
      },
      {
        _id: "262",
        name: "CREATIVE",
        children: [
          {
            _id: "978",
            name: "COPYWRITER",
          },
          {
            _id: "968",
            name: "CONTENT MANAGER",
          },
          {
            _id: "918",
            name: "DESIGNER",
          },
          {
            _id: "968",
            name: "VIDEO EDITOR",
          },
        ],
      },
    ],
  },
  {
    _id: "127",
    name: "HCNS",
  },
  {
    _id: "128",
    name: "TCKT",
  },
];

export default function App() {
  return (
    <div style={{ margin: "100px" }}>
      <Tree
        lineBorderRadius="100%"
        lineColor="blueviolet"
        lineHeight="30px"
        lineWidth="1px"
        label={
          <div
            style={{
              display: "inline-block",
              border: "1px solid palegreen",
              borderRadius: "20px",
              padding: "10px",
            }}
          >
            {" "}
            <h6
              style={{
                margin: "2px",
                padding: "0px",
                color: "blueviolet",
              }}
            >
              Root Element
            </h6>
            <img src="images/download.png" alt="user" width="40" height="40" />
          </div>
        }
      >
        <Items items={initechOrg} />
      </Tree>
    </div>
  );
}
