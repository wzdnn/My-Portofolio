import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className=" my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg text-backg">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-primary/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm text-paragraph">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16 text-backg">
        Experience
      </h2>

      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-backg origin-top md:w-[2px] md:left-[30px] xs:left-[20px]"
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2 ">
          <Details
            position="Student Employment"
            company="Ahmad Dahlan University Bureau of Student and Alumni Affairs"
            companyLink="https://bimawa.uad.ac.id/"
            time="sep 2020 - jan 2023"
            address="Yogyakarta, D.I. Yogyakarta"
            work="As an technician in the field of communication and network,
            Examine and correcting documents submitted by students,
            Ensuring editorial and grammar in letters and documents submitted by students,
            Helping the buraeu’s online activities during pandemic"
          />

          <Details
            position="Front-End Developer"
            company="Al-Mujahidin Highschool"
            companyLink="https://www.smamalmujahidin.sch.id/"
            time="jun 2021 - aug 2021"
            address="Wonosari, D.I. Yogyakarta"
            work="Slicing prototype to HTML and CSS using visual studio code, 
            Optimization the website for better user experience
            "
          />

          <Details
            position="Web Developer"
            company="Ahmad Dahlan University Faculty of Industrial Technology"
            companyLink="https://www.google.com/"
            time="nov 2020 - mar 2021"
            address="Yogyakarta, D.I. Yogyakarta"
            work="Making prototype design for the project using Adobe XD,
            Making simple web design using PHP, HTML and CSS, 
            Connecting the code to MySQL database using visual studio 
            "
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
