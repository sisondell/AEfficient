import React from 'react';
import { Card } from "./Card";

const WorkAircraftView = () => {

  return (
    <div>
      <h1 className="title">Select Aircraft for Maintenance</h1>
      <div className="grid">
      <div className="col">

      <a href="a320workview" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/A320.png"
          imgAlt="AIRBUS A320"
          title="AIRBUS A320"
          description=""
          />
          </a>

          <a href="a380workview" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/A380.png"
          imgAlt="AIRBUS A380"
          title="AIRBUS A380"
          description=""
          />
          </a>

          <a href="747workview" style={{ textDecoration: 'none', color: 'inherit' }}>
          <Card
          imgSrc="/img/747.png"
          imgAlt="BOEING 747"
          title="BOEING 747"
          description=""
          />
          </a>


        


      </div>

      </div>
    </div>
  );
};

export default WorkAircraftView;
