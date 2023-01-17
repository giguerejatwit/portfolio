import { useState } from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Nav({darkMode}) {
  const [dark, setDark] = useState(darkMode);
  return (
    <nav className="py-10 mb-12 flex justify-between">
      <h1 className="text-xl font-burtons text-white">JG</h1>
      <ul className="flex items-center">
        <li>
          <BsFillMoonStarsFill
            onClick={() => setDark(!dark)}
            className="cursor-pointer text-2xl dark:fill-slate-100"
          />
        </li>
        <li>
          <a
            className="bg-gradient-to-tr from-fuchsia-600 to-slate-100 text-white px-4 py-2 ml-8 rounded-md"
            href="#"
          >
            resume
          </a>
        </li>
      </ul>
    </nav>
  );
}
