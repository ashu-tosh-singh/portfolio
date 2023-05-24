import CertCard from "./CertCard.js";

import hr from "../assets/curve-hr.svg";
import coreJava from "../assets/certs/coreJava.png";
import jpmorgan from "../assets/certs/jpmorgan.png";
import eBootathon02 from "../assets/certs/eBootathon02.png";
import edgeFX from "../assets/certs/edgeFX.png";

// import

export default function Certs() {
  return (
    <div id="certs" className="mt-4 text-white">
      <h1 className="text-2xl font-bold">Certifications</h1>
      <p className="font-light text-gray-400">
        Here are some of my Certifications
      </p>

      {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
        <CertCard
          name="Core Java Training"
          img={coreJava}
          issued="Internshala"
          date="Jun 2022"
        />
        <CertCard
          name="Software Engineering Virtual Experience"
          img={jpmorgan}
          issued="JPMorgan Chase & Co."
          date="Jun 2022"
        />
        <CertCard
          name="eBootathon02 Participation Certificate"
          img={eBootathon02}
          issued="Bundelkhand University"
          date="Aug 2020"
        />
        <CertCard
          name="Participation Certificate"
          img={edgeFX}
          issued="EdgeFX Technologies"
          date="Sep 2020"
        />
      </div>
      <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
    </div>
  );
}
