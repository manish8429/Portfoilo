import React from "react";
import html from "../../../public/html.png";
import css from "../../../public/css.jpg";
import javascript from "../../../public/javascript.png";
import mongoDB from "../../../public/mongodb.jpg";
import express from "../../../public/express.png";
import reactjs from "../../../public/reactjs.png";
import nodejs from "../../../public/node.png";
import tailwindcsss from "../../../public/tailwindcss.png";

function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "Html",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
   
    {
      id: 3,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 4,
      logo: mongoDB,
      name: "MongoDb",
    },
    {
      id: 5,
      logo: express,
      name: "Express",
    },
    {
      id: 6,
      logo: reactjs,
      name: "React Js",
    },
    {
      id: 7,
      logo: nodejs,
      name: "NodeJs",
    },
    {
      id: 8,
      logo: tailwindcsss,
      name: "TailwindCss",
    },
  
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 0-1 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
