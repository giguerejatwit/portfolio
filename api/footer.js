import Link from "next/link";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { github, linkedin } from "../api/about";
import { useState } from "react";
export default function Footer(props) {
  const [darkMode, setDarkMode] = useState(props);
  return (
    <section className={darkMode ? "dark" : ""}>
      <footer className="flex flex-row p-5">
        <Link href={linkedin.url}>
          <AiFillLinkedin className="dark:fill-white" />
        </Link>

        <Link href={github.repo}>
          <AiFillGithub className="dark:fill-white" />
        </Link>
      </footer>
    </section>
  );
}
