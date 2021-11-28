// eigen files
import "./inspiratie.scss";

// Domme component die simpelweg de contact pagina laat zien
const Inspiratie = () => {
  return (
    <div className="inspiratie__container">
      <h3>
        <span>I</span>nspiratie
      </h3>
      <div className="sectie-1">
        <div className="text">
          <h5>
            Waar haal ik mijn <span>inspiratie</span> vandaan
          </h5>
          <p>
            Mijn inspiratie haal ik uit de kleuren van de natuur en omgeving. Wanneer ik een
            kledingstuk zie dan denk ik, daar moeten perfect bijpassende oorbellen bij. Dan is het
            alleen nog een zoektocht naar de juiste kralen.
          </p>
        </div>
        <div className="img">
          <img src="./img/footer/inspiratie-1.png" alt="" />
        </div>
      </div>
      <div className="sectie-2">
        <div className="img">
          <img src="./img/footer/inspiratie-2.png" alt="" />
        </div>
        <div className="text">
          <h5>
            Waar haal ik mijn <span>inspiratie</span> vandaan
          </h5>
          <p>
            Mijn inspiratie haal ik uit de kleuren van de natuur en omgeving. Wanneer ik een
            kledingstuk zie dan denk ik, daar moeten perfect bijpassende oorbellen bij. Dan is het
            alleen nog een zoektocht naar de juiste kralen.
          </p>
        </div>
      </div>
      <div className="img_mobiel">
        <img src="./img/footer/inspiratie-1.png" alt="" />
      </div>
    </div>
  );
};

export default Inspiratie;
