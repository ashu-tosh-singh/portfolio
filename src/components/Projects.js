import ProjectCard from "./ProjectCard.js";

import hr from "../assets/curve-hr.svg";

export default function Projects() {
  return (
    <div id="honors" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Projects and Works</h1>
      <p className="font-light text-gray-400">
        Here are some of my projects and works
      </p>

      <div className="flex flex-col md:flex-row mt-4 gap-5">
        <ProjectCard
          name="2048 Game"
          issuedLink="https://2048-game-js.vercel.app/"
          GitLink="https://github.com/ashu-tosh-singh/2048-game-js"
          desc="This project is a JavaScript-based implementation of the popular puzzle game called 2048. It involves creating an interactive user interface for the game."
        />

        <ProjectCard
          name="Weather App"
          issuedLink="https://weather-app-woad-five-43.vercel.app/"
          GitLink="https://github.com/ashu-tosh-singh/weather-app"
          desc="The project's user-friendly interface was designed with the help of contemporary web development tools like HTML, CSS, and JavaScript. Weather API has been featched from RapidAPI."
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
