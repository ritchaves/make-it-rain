import React from 'react';
import './cloud.css';

const Clouds = () => (
  <>
    <div className="cloud" id="cloudShape" />
    <div className="cloud" id="cloudShapeMid" />
    <div className="cloud" id="cloudShapeFront" />

    <div className="cloud" id="cloudShape2" />
    <div className="cloud" id="cloudShapeMid2" />
    <div className="cloud" id="cloudShapeFront2" />

    <div className="cloud" id="cloudShape3" />
    <div className="cloud" id="cloudShape3Mid" />
    <div className="cloud" id="cloudShape3Front" />

    <div className="cloud" id="cloudShape4" />
    <div className="cloud" id="cloudShape4Mid" />
    <div className="cloud" id="cloudShape4Front" />

    <svg width="0" height="0">
      <filter id="filter-back">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves="4"
          seed="0"
        />
        <feDisplacementMap in="SourceGraphic" scale="170" />
      </filter>
      <filter id="filter-mid">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves="2"
          seed="0"
        />
        <feDisplacementMap in="SourceGraphic" scale="150" />
      </filter>
      <filter id="filter-front">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.012"
          numOctaves="2"
          seed="0"
        />
        <feDisplacementMap in="SourceGraphic" scale="100" />
      </filter>
    </svg>

  </>
);

export default Clouds;
