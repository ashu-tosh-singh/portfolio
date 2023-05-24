import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkillCard from "./SkillCard.js";

import java from "../assets/skills/java.png";
import html from "../assets/skills/html-5.png";
import css from "../assets/skills/css-3.png";
import bootstrap from "../assets/skills/bootstrap.png";
import javascript from "../assets/skills/js.png";
import reactjs from "../assets/skills/react.png";
import nodejs from "../assets/skills/nodejs.png";
import github from "../assets/skills/github.png";
import mongodb from "../assets/skills/mongodb.png";

import hr from "../assets/curve-hr.svg";

export default function Skills() {
  const settings = {
    autoplay: true,
    autoplaySpeed: 600,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <div id="skills" className=" mt-4 text-white">
      <h1 className="text-2xl font-bold">Skills</h1>
      <p className="font-light text-gray-400">Here are some of my skills</p>

      <div className="mt-4">
        <Slider {...settings}>
          <SkillCard name="java" img={java} />
          <SkillCard name="html" img={html} />
          <SkillCard name="css" img={css} />
          <SkillCard name="bootstrap" img={bootstrap} />
          <SkillCard name="javascript" img={javascript} />
          <SkillCard name="react" img={reactjs} />
          <SkillCard name="node" img={nodejs} />
          <SkillCard name="github" img={github} />
          <SkillCard name="mongodb" img={mongodb} />
        </Slider>
      </div>
      <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
    </div>
  );
}
