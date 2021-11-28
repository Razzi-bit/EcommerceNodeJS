import React from "react";
import { Link } from "react-router-dom";

import "./homeMobiel.scss";

const homeMobiel = () => {
  return (
    <div className="home__mobiel">
      <div className="rij__een">
        <div className="left oorbel">
          {/* <img src="./img/home/oorbel.png" alt="Foto van oorbellen" /> */}
        </div>
        <div className="right">
          <h3>Oorbellen</h3>
          <p>Bekijk hier het ruime assortiment van exclusieve handgemaakte oorbellen</p>
          <Link to="#">Shop nu</Link>
        </div>
      </div>
      <div className="rij__twee">
        <div className="left">
          <h3>Baby accessoires </h3>
          <p>Bekijk hier de handgemaakte baby accessoires</p>
          <Link to="#">Shop nu</Link>
        </div>
        <div className="right baby">
          {/* <img src="./img/home/leeuw.png" alt="Foto van oorbellen" /> */}
        </div>
      </div>
      <div className="rij__een">
        <div className="left armband">
          {/* <img src="./img/home/armband.png" alt="Foto van oorbellen" /> */}
        </div>
        <div className="right">
          <h3>Armbanden</h3>
          <p>Bekijk hier de handgemaakte armbandjes, verkrijgbaar in twee verschillende maten</p>
          <Link to="#">Shop nu</Link>
        </div>
      </div>
    </div>
  );
};

export default homeMobiel;
