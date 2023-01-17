import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { about, github } from "../api/about";
import Image from "next/image";
import { bc_img } from "../public/Blockchain.png"
import { hp_img } from "../public/HP.png";
import { ml_img } from "../public/ML.png";

export default function Projects() {
  return (
    <section className="flex  justify-around auto-rows-max space-x-7">
      <div className="flex flex-col bg-slate-50 rounded-md text-center shadow-2xl pt-10 pl-10 pr-10 w-1/3">
        <h2 className="text-lg font-medium text-fuchsia-600">
          Machine Learning Intern
        </h2>

        <Image className="object-cover" src={ml_img} />

        <p className="dark:text-gray-800"> {about.ML} </p>
        <div>
          <Link href={github.ML}>
            <AiFillGithub className="w-1/4 h-1/4 dark:fill-gray-800" />
          </Link>
        </div>
      </div>

      <div className="text-center flex flex-col bg-slate-50 rounded-md shadow-2xl p-10 w-1/3 ">
        <h2 className="text-lg font-medium text-fuchsia-600">
          High Performace Computing
        </h2>
        <p className="dark:text-gray-800"> {about.High_Performance} </p>
        <div>
          <Image className="object-cover" src={hp_img} />
          <Link href={github.High_Performance}>
            <AiFillGithub className="w-1/4 h-1/4 dark:fill-gray-800" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col bg-slate-50 rounded-md text-center shadow-2xl p-10 w-1/3">
        <h2 className="text-lg font-medium text-fuchsia-600">
          Blockchain Developer
        </h2>
        <p className="dark:text-gray-800"> {about.Blockchain} </p>
        <Image className="object-cover" src={bc_img} />
        <div className="relative">
          <Link href={github.Blockchain}>
            <AiFillGithub className="w-1/4 h-1/4 dark:fill-gray-800" />
          </Link>
        </div>
      </div>
    </section>
  );
}
