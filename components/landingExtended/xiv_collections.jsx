import React from "react";
const cards = [
  {
    title: "Cotton T Shirt",
    description: "Basic Heavy Weight T-shirt",
    image: "/product image 6.png",
    price: "$199",
  },
  {
    title: "Cotton  jeans ",
    description: "Soft Wash straight Fit Jeans",
    image: "/product image 7.png",
    price: "$199",
  },
  {
    title: "Cotton T Shirt",
    description: "Basic Heavy Weight T-shirt",
    image: "/product image 8.png",
    price: "$199",
  },
];
export default function Xiv_collections() {
  return (
    <div>
      <h1 className=" text-5xl font-extrabold pb-10">
        XIV <br />
        Collections <br />
        23-24
      </h1>

      <div className=" flex justify-between text-center text-base ">
        <div className=" flex gap-8 text-[#8A8A8A]">
          <h1 className=" text-black">( All )</h1>
          <h1>Men</h1>
          <h1>Women</h1>
          <h1>Kids</h1>
        </div>

        <div className=" flex gap-10 text-black text-base">
          <h1>Filters(+)</h1>
          <div className=" items-start flex flex-col">
            <h1>Sorts(-)</h1>
            <h2 className=" text-[#5E5E5E]">
              Less to More <br /> More to Less
            </h2>
          </div>
        </div>
      </div>

      <hr className=" text-[#DFDFDF] my-5" />
      <div className="grid grid-cols-3 gap-10 overflow-x-auto">
        {cards.map((card, index) => (
          <div key={index} className="flex flex-col gap-3 flex-shrink-0">
            <img
              src={card.image}
              alt={card.title}
              className=" border border-gray-200  "
            />

            <h1 className=" text-xs text-[#000000A8] font-medium">
              {card.title}
            </h1>
            <div className=" flex  justify-between text-black text-sm font-medium ">
              <h1>{card.description}</h1>
              <h2>{card.price}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
