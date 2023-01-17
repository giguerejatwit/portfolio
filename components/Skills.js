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
const animation = {};
const transition = {
  type: "spring",
  damping: 10,
  stiffness: 30,
  restDelta: 0.001,
  delayChildren: 1,
};
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
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Solsvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Solidity
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Pysvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Python
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Ethsvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">Web3</h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Javasvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">Java</h2>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-40px )",
          opacity: isInView ? 0.8 : 0.0,
          transition: "all .7s cubic-bezier(0.17, 0.55, 0.55, 1) .7s",
        }}
        className="flex justify-evenly h-60 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Cryptosvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Cryptography
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <MLsvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Machine Learning
            </h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Csvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">C</h2>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Reactsvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Frontend Development
            </h2>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateY(-40px)",
          opacity: isInView ? 0.8 : 0.0,
          transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) .55s",
        }}
        className="flex justify-evenly h-60 mb-10"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={transition}
          whileHover={onHover}
          className="w-1/6 bg-opacity-20 bg-neutral-400 rounded-2xl shadow-lg shadow-neutral-500"
        >
          <div className="flex justify-center pt-5">
            <Djangosvg />
          </div>
          <div className="h-20">
            <h2 className="pt-5 text-2xl text-stone-900  text-center">
              Backend Development
            </h2>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
