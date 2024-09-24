import { type BusinessCard as BusinessCardType } from "@/types";

import BusinessCard from "./BusinessCard";

const businessCards: BusinessCardType[] = [
  {
    id: 1,
    title: "The United States and Canada",
    size: "89mm x 51mm (1050px x 602px)",
    dpi: 300,
    dimensions: {
      width: 1050,
      height: 602,
    },
  },
  {
    id: 2,
    title:
      "United Kingdom, Italy, Germany, Belgium, Spain, Portugal, Switzerland, Ireland, France, Austria, Netherlands, Slovenia, and Turkey",
    size: "85mm x 55mm (1003px x 650px)",
    dpi: 300,
    dimensions: {
      width: 1003,
      height: 650,
    },
  },
  {
    id: 3,
    title: "Japan",
    size: "91mm x 55mm (1074px x 650px)",
    dpi: 300,
    dimensions: {
      width: 1074,
      height: 650,
    },
  },
  {
    id: 4,
    title: "China, Singapore, Malaysia, and Hong Kong",
    size: "90mm x 54mm (1063px x 634px)",
    dpi: 300,
    dimensions: {
      width: 1063,
      height: 634,
    },
  },
  {
    id: 5,
    title:
      "Australia, New Zealand, Norway, Sweden, Denmark, Colombia, Taiwan, Vietnam, and India",
    size: "90mm x 55mm (1063px x 591px)",
    dpi: 300,
    dimensions: {
      width: 1063,
      height: 591,
    },
  },
  {
    id: 6,
    title:
      "South Korea, Sri Lanka, Kazakhstan, Lithuania, Poland, Romania, Serbia, Montenegro, Slovakia, Ukraine, Uzbekistan, Bulgaria, Latvia, Bosnia, Hungary, Herzegovina, Czech Republic, Croatia, Estonia, Israel, Finland, South Africa, Argentina, Brazil, Costa Rica, and Mexico",
    size: "90mm x 50mm (1063px x 591px)",
    dpi: 300,
    dimensions: {
      width: 1063,
      height: 591,
    },
  },
];

const BusinessCards = () => {
  return (
    <div className="z-10 grid h-full max-w-[1028px] grid-cols-1 content-start items-center gap-4 overflow-auto p-5 md:grid-cols-2 md:p-10 lg:p-2">
      {businessCards.map((card) => (
        <BusinessCard key={card.id} cardData={card} />
      ))}
    </div>
  );
};

export default BusinessCards;
