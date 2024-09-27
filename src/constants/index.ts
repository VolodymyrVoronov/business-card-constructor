export const PATHS = {
  START: "/",
  MAIN: "/constructor",
} as const;

export const ROUTES = {
  START: PATHS.START,
  MAIN: PATHS.MAIN,
} as const;

export const CANVAS_SIZES = [
  {
    id: 1,
    inMm: "89mm x 51mm",
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
