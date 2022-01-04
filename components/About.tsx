import Image from "next/image";
import React from "react";
import data from "../public/data.json";
import Title from "./Title";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center mt-10 md:justify-start md:items-start md:ml-20"
    >
      <div className="sm:!-ml-0 flex items-center">
        <Title num={1} title="About me" />
      </div>

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textdark md:w-1/2">{data.about}</p>

        <div className="relative mx-auto mt-20 ml-0 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neongreen">
          <Image
            src={data.image}
            alt={data.name}
            objectFit="contain"
            layout="fill"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
