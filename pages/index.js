import { motion, useScroll } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { about, github, linkedin } from "../api/about";
import Projects from "../api/projects";
import { Navbar } from "../components/Navbar";
import bg_png from "../public/Asset 2.png";
import headshot from "../public/personal/headshot.jpeg";
import { Skills } from "../components/Skills";
export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const { scrollYProgress } = useScroll();

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Jake Giguere's Portfolio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-neutral-800 dark:bg-black min-h-screen">

        
        <section className="min-h">
          <Navbar darkMode={darkMode} />

          <div className="flex flex-row ">
            <div className="text-center p-10">
              <motion.h2
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.5,
                  duration: 0.4,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-5xl text-left text-neutral-400 dark:text-white font-medium"
              >
                {about.name}
              </motion.h2>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.7,
                  duration: 0.7,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-2xl py-2 text-left text-neutral-400"
              >
                Computer Science and Applied Mathematics
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 1,
                  duration: 1,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                className="text-md py-4 text-left text-neutral-400"
              >
                {about.bio}
              </motion.p>
            </div>
            <div className="relative rounded-full w-80 h-80 m-10">
              <Image className="rounded-full" src={headshot} />
            </div>
          </div>
        </section>
        <section className="flex-col min-h-screen">
          <h1 className="text-2xl text-neutral-400 p-10">Skills</h1>
          <Skills />
        </section>
        <section className="flex min-h-screen">
          <h1 className="text-2xl text-neutral-400 p-10">
            Featured Projects & Research
          </h1>
        </section>
        <section>
          <footer className="flex flex-row p-5">
            <Link href={linkedin.url}>
              <AiFillLinkedin className=" dark:fill-white" />
            </Link>

            <Link href={github.repo}>
              <AiFillGithub className="dark:fill-white" />
            </Link>
          </footer>
        </section>
      </main>
    </div>
  );
}
