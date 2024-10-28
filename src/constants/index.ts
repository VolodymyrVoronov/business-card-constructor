import { BusinessCard } from "@/types";

export const PATHS = {
  START: "/",
  MAIN: "/constructor",
} as const;

export const ROUTES = {
  START: PATHS.START,
  MAIN: PATHS.MAIN,
} as const;

export const BUSINESS_CARDS: BusinessCard[] = [
  {
    id: 1,
    inMm: "89mm x 51mm",
    usedIn: "The United States and Canada",
    dpis: [
      {
        dpi: 96,
        width: 336,
        height: 193,
      },
      {
        dpi: 300,
        width: 1050,
        height: 602,
      },
    ],
  },
  {
    id: 2,
    inMm: "85mm x 55mm",
    usedIn:
      "United Kingdom, Italy, Germany, Belgium, Spain, Portugal, Switzerland, Ireland, France, Austria, Netherlands, Slovenia, and Turkey",
    dpis: [
      {
        dpi: 96,
        width: 321,
        height: 208,
      },
      {
        dpi: 300,
        width: 1004,
        height: 650,
      },
    ],
  },
  {
    id: 3,
    inMm: "91mm x 55mm",
    usedIn: "Japan",
    dpis: [
      {
        dpi: 96,
        width: 344,
        height: 208,
      },
      {
        dpi: 300,
        width: 1074,
        height: 650,
      },
    ],
  },
  {
    id: 4,
    inMm: "90mm x 54mm",
    usedIn: "China, Singapore, Malaysia, and Hong Kong",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 204,
      },
      {
        dpi: 300,
        width: 1063,
        height: 638,
      },
    ],
  },
  {
    id: 5,
    inMm: "90mm x 55mm",
    usedIn:
      "Australia, New Zealand, Norway, Sweden, Denmark, Colombia, Taiwan, Vietnam, and India",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 208,
      },
      {
        dpi: 300,
        width: 1063,
        height: 650,
      },
    ],
  },
  {
    id: 6,
    inMm: "90mm x 50mm",
    usedIn:
      "South Korea, Sri Lanka, Kazakhstan, Lithuania, Poland, Romania, Serbia, Montenegro, Slovakia, Ukraine, Uzbekistan, Bulgaria, Latvia, Bosnia, Hungary, Herzegovina, Czech Republic, Croatia, Estonia, Israel, Finland, South Africa, Argentina, Brazil, Costa Rica, and Mexico",
    dpis: [
      {
        dpi: 96,
        width: 340,
        height: 189,
      },
      {
        dpi: 300,
        width: 1063,
        height: 591,
      },
    ],
  },
];

export const BACKGROUNDS = [
  "#ffffff",
  "#000000",
  "#ff0000",
  "#00ff00",
  "#0000ff",
  "#ffff00",
  "#00ffff",
  "#ff00ff",
  "#7b7b7b",
  "#f9f9f9",
  "#6fbf7b",
  "#f8ed7c",
  "#866a3d",
  "#e55a6e",
  "#6b7a8f",
  "#8a7e6b",
  "#4d0b4d",
  "#7b9f83",
  "#235e3f",
  "#f2e2c7",
  "#8149b1",
  "#f9b3f7",
  "#b93815",
  "#f22e7c",
  "#e5f5cf",
  "#b74e22",
  "#3b3a85",
  "#8a3a12",
  "#c4b2f1",
  "#d6f3bf",
  "#a591a5",
  "#91f0d1",
  "#d2e6c1",
  "#fbf7a5",
  "#0e1d79",
  "#7d3a50",
  "#b3b5a0",
  "#8d94f2",
  "#3a4d8c",
  "#b4d8a1",
  "#f7f7f7",
  "#d7e9f9",
] as const;

export const GRADIENTS = [
  ["#ff7e5f", "#feb47b"],
  ["#6a11cb", "#2575fc"],
  ["#ff6a00", "#ee0979"],
  ["#00c6ff", "#0072ff"],
  ["#f7971e", "#ffd200"],
  ["#56ab2f", "#a8e063"],
  ["#ff758c", "#ff7eb3"],
  ["#007991", "#78ffd6"],
  ["#ff9a9e", "#fecfef"],
  ["#ff4e50", "#f9d423"],
  ["#da22ff", "#9733ee"],
  ["#fcb045", "#fd1d1d"],
  ["#2193b0", "#6dd5ed"],
  ["#cc2b5e", "#753a88"],
  ["#ee9ca7", "#ffdde1"],
  ["#de6161", "#2657eb"],
  ["#ff9966", "#ff5e62"],
  ["#00f260", "#0575e6"],
  ["#e1eec3", "#f05053"],
  ["#fc5c7d", "#6a82fb"],
  ["#5f2c82", "#49a09d"],
  ["#8360c3", "#2ebf91"],
  ["#c6ffdd", "#fbd786"],
  ["#a8ff78", "#78ffd6"],
  ["#12c2e9", "#c471ed"],
  ["#f12711", "#f5af19"],
  ["#eecda3", "#ef629f"],
  ["#4e54c8", "#8f94fb"],
  ["#b3ffab", "#12fff7"],
  ["#ff6e7f", "#bfe9ff"],
  ["#ff9a8b", "#ff6a88"],
  ["#fbc2eb", "#a6c1ee"],
  ["#ffe259", "#ffa751"],
  ["#43cea2", "#185a9d"],
  ["#30cfd0", "#330867"],
  ["#b24592", "#f15f79"],
  ["#13547a", "#80d0c7"],
  ["#e3ffe7", "#d9e7ff"],
  ["#4ac29a", "#bdfff3"],
  ["#ba5370", "#f4e2d8"],
  ["#ff0844", "#ffb199"],
  ["#76b852", "#8dc26f"],
  ["#e52d27", "#b31217"],
  ["#2b5876", "#4e4376"],
  ["#4ca1af", "#c4e0e5"],
  ["#d66d75", "#e29587"],
  ["#92fe9d", "#00c9ff"],
  ["#fd746c", "#ff9068"],
  ["#ffd89b", "#19547b"],
  ["#c94b4b", "#4b134f"],
  ["#232526", "#414345"],
  ["#8e0e00", "#1f1c18"],
  ["#20002c", "#cbb4d4"],
  ["#ed213a", "#93291e"],
  ["#f8ff00", "#3ad59f"],
  ["#009fff", "#ec2f4b"],
  ["#834d9b", "#d04ed6"],
] as const;

export const BASE64_PLACEHOLDER =
  "data:image/png;base64,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";
