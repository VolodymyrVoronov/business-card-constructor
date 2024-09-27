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
    dpi: [
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
    dpi: [
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
    dpi: [
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
    dpi: [
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
    dpi: [
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
    dpi: [
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
