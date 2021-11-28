// eigen files
import "./contact.scss";

// Domme component die simpelweg de contact pagina laat zien(werkt momenteel nog niet)
const Contact = () => {
  return (
    <div className="contact__container">
      <div className="title">
        <h2>
          <span>C</span>ontact
        </h2>
      </div>
      <div className="sectie-1">
        <h3>Hoe moet ik contact opnemen?</h3>
        <p>Als u contact met ons wilt kunt u ons bereiken via:</p>
        <div className="input">
          <div className="email">
            <p>Email:</p>
          </div>
          <div className="email">
            <p>annasaccessoires@hotmail.com</p>
          </div>
        </div>
        <div className="input">
          <div className="telefoon">
            <p>Telefoon:</p>
          </div>
          <div className="telefoon">
            <p>0646999934</p>
          </div>
        </div>
        <div className="input">
          <div className="facebook">
            <p>Facebook:</p>
          </div>
          <div className="facebook">
            <p>annasaccessoires</p>
          </div>
        </div>
      </div>
      <div className="sectie-2">
        <div className="header">
          <h3>Klantenservice formulier</h3>
        </div>

        <form className="container">
          <div className="input">
            <div className="text">
              <p>Volledige naam *</p>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="input">
            <div className="text">
              <p>Email *</p>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="input">
            <div className="text">
              <p>Onderwerp *</p>
            </div>
            <div>
              <input type="text" />
            </div>
          </div>
          <div className="input">
            <div className="text">
              <p>Beschrijving *</p>
            </div>
            <div className="last">
              <input type="text" />
            </div>
          </div>
          <button type="submit">Versturen</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
