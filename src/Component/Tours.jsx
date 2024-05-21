import React from "react";
import { menu, toursData } from "../data";
import Heading from "./Heading";

const Tours = () => {
  return (
    <>
      <section className="section" id="tours">
        
        <Heading fw="featured" lw="tours" />

        <div className="section-center featured-center">
          
          {toursData.map((item) => (
            <article className="tour-card">
              <div className="tour-img-container">
                <img src={item.pic} className="tour-img" alt="" />
                <p className="tour-date">{item.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{item.title}</h4>
                </div>
                <p>{item.info}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>{" "}
                    {item.country}
                  </p>
                  <p>{item.days}</p>
                  <p>{item.amount}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Tours;