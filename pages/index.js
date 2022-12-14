import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import fahdpic from "../public/dev-ed-wave.png";
import code from "../public/code.png";
import design from "../public/design.png";
import project1 from "../public/Project1.png";
import project2 from "../public/Project2.png";
import project3 from "../public/Project3.png";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Fahd Portfolio</title>
        <meta name="description" content="Fahd S.N Portfolio" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className=" bg-white px-10 md:px-20 lg:px-72 dark:bg-gray-900">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons dark:text-white cursor-pointer">
              Fahd
            </h1>
            <ul className=" flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl dark:text-white"
                />
              </li>
              <li>
                <a
                  className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="https://drive.google.com/file/d/1mxkihGpKUthRrDBpUwniHTWCj6tWY_0Z/view?usp=share_link"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Fahd S.N
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Front-end Developer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-3xl mx-auto md:text-xl">
              I???m a <span className=" text-cyan-600"> React UI developer </span>
              having hands on experiences in building high-quality, responsive,
              and good-looking web applications specializing in exceptional
              digital experiences.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a href="https://twitter.com/Snfahd_">
                <AiFillTwitterCircle className=" cursor-pointer" />
              </a>
              <a href="https://www.linkedin.com/in/sn-fahd/">
                <AiFillLinkedin className=" cursor-pointer" />
              </a>
              <a href="https://github.com/fahd23">
                <AiFillGithub className=" cursor-pointer" />
              </a>
            </div>
            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-52 h-52 relative overflow-hidden mt-20 md:h-96 md:w-96">
              <Image src={fahdpic} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section>
          <div className="text-justify">
            <h3 className="text-3xl py-1 dark:text-white md:text-4xl text-center">
              About me
            </h3>
            <p className="text-md pt-5 pb-2 leading-10  text-gray-800 dark:text-gray-200 md:text-xl mx-auto max-w-3xl">
              I enjoy creating things that live on the internet. My interest in
              web development started back in 2021 when I worked as intern, I
              came across HTML & CSS! My main focus these days is building
              accessible, high-quality, responsive,and good-looking web
              applications.
            </p>
            <p className="text-md py-2 leading-10  text-gray-800 dark:text-gray-200 md:text-xl mx-auto max-w-3xl">
              Here are a few technologies I???ve been working with recently:
              HTML5, CSS3, JavaScript(ES6), React.js, React Hooks, React Router,
              Bootstrap, Material UI, Tailwind CSS.
            </p>
            <p className="text-md py-2 leading-10  text-gray-800 dark:text-gray-200 md:text-xl mx-auto max-w-3xl">
              Familiar with Tools like VsCode, Postman, netlify, vercel, Git and
              Github.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image
                src={design}
                width={"100%"}
                height={"100%"}
                className=" mx-auto md:w-40"
              />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Design to Code
              </h3>
              <p className="py-2">
                Translating designs and wireframes into high-quality, scalable
                code, using best-practices.
              </p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image
                src={code}
                width={"100%"}
                height={"100%"}
                className=" mx-auto md:w-40"
              />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
            </div>
          </div>
        </section>
        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white md:text-4xl">
              Some Things I???ve Built
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200"></p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <a href="https://grapheneui.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={project1}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://cricbazzar-ecom.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={project2}
                />
              </a>
            </div>
            <div className="basis-1/3 flex-1">
              <a href="https://cricstream.netlify.app/">
                <Image
                  className="rounded-lg object-cover"
                  width={100}
                  height={100}
                  layout="responsive"
                  src={project3}
                />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
