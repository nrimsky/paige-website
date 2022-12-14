import React from "react";
import Heading from "./Heading";
import Jaime from "../img/jaime.png";
import Suparna from "../img/suparna.png";
import Sean from "../img/sean.jpeg";
import Greg from "../img/greg.png";
import Carolina from "../img/carolina.png";
import Sergi from "../img/sergi.png";
import Nina from "../img/nina.png";
import NinaR from "../img/ninarimsky.png";
import Ben from "../img/ben.png";

function TeamMember(props: {
  heading: string;
  caption: string;
  imageSrc: any;
}) {
  return (
    <div className="text-center font-light text-sm leading-snug">
      <img
        className="w-16 h-16 rounded-full m-auto mb-2"
        src={props.imageSrc}
        alt={props.heading}
      />
      <h3 className="mb-1 text-lg font-bold tracking-tight text-gray-900 leading-tight">
        {props.heading}
      </h3>
      <p>{props.caption}</p>
    </div>
  );
}


export default function People() {
  return (
    <section className="bg-white py-8 mx-auto text-center lg:py-12">
      <div className="pb-0">
        <Heading css="text-2xl text-start font-bold px-4 md:px-6 py-4 bg-paigedarkblue text-white text-bold rounded-t-lg tracking-tight leading-tight">Meet our team</Heading>
      </div>
      <div className="border-x border-paigedarkgrey flex flex-col">
        <div className="grid gap-8 px-4 py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <TeamMember
            imageSrc={Greg}
            heading={"Gregory Hargraves"}
            caption={"Founder"}
          />
          <TeamMember
            imageSrc={Carolina}
            heading={"Carolina Gomes"}
            caption={"Electronics"}
          />
          <TeamMember
            imageSrc={Sergi}
            heading={"Sergi Gosalvez"}
            caption={"User Experience"}
          />
          <TeamMember
            imageSrc={Nina}
            heading={"Nina Moutonnet"}
            caption={"Communications"}
          />
          {/* <TeamMember
            imageSrc={Jaime}
            heading={"Javi Tarraga"}
            caption={"Branding"}
          />
          <TeamMember
            imageSrc={Jaime}
            heading={"Fran Capacete"}
            caption={"Graphics"}
          /> */}
          <TeamMember
            imageSrc={NinaR}
            heading={"Nina Rimsky"}
            caption={"Software"}
          />
          <TeamMember
            imageSrc={Ben}
            heading={"Benedict Carling"}
            caption={"Firmware"}
          />
        </div>
      </div>
      <div className="flex flex-col border border-paigedarkgrey rounded-b-lg ">
        <p className="md:w-2/3 flex p-2 md:p-6 text-lg text-left font-light">Paige is committed to serving braille communities worldwide. We are supported by individuals and institutions well placed in the world of braille and entrepreneurship to achieve this goal:</p>
        <div className="grid gap-8 px-4 py-8 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
          <TeamMember
            imageSrc={Sean}
            heading={"Sean Randall"}
            caption={"Accessibility Specialist at NCW "}
          />
          <TeamMember
            imageSrc={Suparna}
            heading={"Suparna Biswas"}
            caption={"Chief Executive Officer at Kilimanjaro Blind Trust"}
          />
          <TeamMember
            imageSrc={Jaime}
            heading={"Jaime Aguilera"}
            caption={"Co-Founder of Inaglobe"}
          />
        </div>
      </div>
    </section>
  );
}
