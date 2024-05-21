import React from "react";
import { servicesData } from "../data";
import Service from "./Service";
import Heading from "./Heading";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <Heading fw="our" lw="secvices" />
       
        <div className="section-center services-center">
          
          {servicesData.map((item) => (
           <Service {...item} />
           
          ))}
        </div>
      </section>
    </>
  );
};

export default Services;