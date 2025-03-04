import React from 'react'
import Title from './Title'
import { tours } from "../data.js";

const Tours = () => {
  return (
    <section className="section" id="tours">
      <Title title='featured' subtitle='tours'/>
      <div className="section-center featured-center">
        {tours.map((tour) => {
          const { id, img, tourdate,title, text ,country,days,amount} = tour;
          return (
            <article className="tour-card" key={id}>
            <div className="tour-img-container">
              <img src={img} className="tour-img" alt="" />
              <p className="tour-date">{tourdate}</p>
            </div>
            <div className="tour-info">
              <div className="tour-title">
                <h4>{title}</h4>
              </div>
              <p>
                {text}
              </p>
              <div className="tour-footer">
                <p>
                  <span><i className="fas fa-map"></i></span> {country}
                </p>
                <p>{days}</p>
                <p>{amount}</p>
              </div>
            </div>
          </article>
          );
        })}

      </div>
    </section>
  )
}

export default Tours
