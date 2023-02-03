import { motion, useInView } from "framer-motion";
import Solsvg from "../public/Skill_Icons/solidity.svg";
import Pysvg from "../public/Skill_Icons/python-5.svg";
import Ethsvg from "../public/Skill_Icons/ethereum.svg";
import Javasvg from "../public/Skill_Icons/java-4.svg";
import MLsvg from "../public/Skill_Icons/learn-machine-learning-1.svg";
import Cryptosvg from "../public/Skill_Icons/security-network.svg";
import Csvg from "../public/Skill_Icons/c-14.svg";
import Reactsvg from "../public/Skill_Icons/react.svg";
import Djangosvg from "../public/Skill_Icons/django-1.svg";

import { useState, ReactComponentElement, useRef } from "react";
import Image from "next/image";

const onHover = { scale: 1.1, transition: { type: "spring", duration: 0.7 } };
const transition = {
  type: "spring",
  damping: 10,
  stiffness: 30,
  restDelta: 0.001,
  delayChildren: 1,
};

const skills = [
  { name: "Solidity", Icon: <Solsvg/> },
  { name: "Python", Icon: <Pysvg/>},
  { name: "Web3", Icon: <Ethsvg/> },
  { name: "Java", Icon: <Javasvg/> },
  { name: "Machine Learning", Icon: <MLsvg/> },
  { name: "Cryptography", Icon: <Cryptosvg/> },
  { name: "C", Icon: <Csvg/> },
  { name: "React", Icon: <Reactsvg/> },
  { name: "Django", Icon: <Djangosvg/> },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });
  return (
    <div className="flex-row ">
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-40px)",
          opacity: isInView ? 0.8 : 0.0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
        }}
        className="flex justify-evenly h-60 mb-10"
      >
        <div className="grid grid-cols-5 gap-10 p-5">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={transition}
              whileHover={onHover}
              className="w-100 h-60 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-md flex items-center justify-center p-10 shadow-neutral-500"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {skill.Icon}
              <h3 className="mt-5 text-neutral-800 text-xl font-medium">
                {skill.name}
              </h3>
            </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }
  
