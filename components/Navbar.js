import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";
export function Navbar(children) {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: "some" });

  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(-40px)",
        opacity: isInView ? .8 : 0.3,
        transition: "all 0.7s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      className="bg-neutral-700 shadow-neutral-600  py-10 rounded-xl shadow-lg shadow-d"
    >
      <nav className="flex flex-row">
        <h1 className="flex-1 pl-10 text-xl font-burtons">JG</h1>
        <ul className="flex justify-center pr-10">
          <li>
            <BsFillMoonStarsFill
              onClick={() => setDarkMode(!darkMode)}
              className="cursor-pointer text-2xl dark:fill-slate-100"
            />
          </li>
          <li>
            <a
              className="bg-gradient-to-tr from-neutral-600 to-slate-400 text-neutral-300 px-4 py-2 ml-8 rounded-md"
              href="#"
            >
              resume
            </a>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
}
