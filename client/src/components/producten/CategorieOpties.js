// Domme component die simpelweg de opties laat zien
const CategorieOpties = () => {
  return (
    <div className="categorieen__box--opties">
      <div className="categorieen--opties__box">
        <div className="categorieen--optie_1">
          <label>Kleur:</label>
          <select name="kleur" className="select__box">
            <option defaultValue="" disabled hidden>
              Kies hier:
            </option>
            <option name="alles" defaultValue="alles">
              Alles
            </option>
            <option name="rood" defaultValue="rood">
              Rood
            </option>
            <option name="groen" defaultValue="groen">
              Groen
            </option>
            <option name="blauw" defaultValue="blauw">
              Blauw
            </option>
          </select>
        </div>
        <div className="categorieen--optie_1">
          <label>Maat:</label>
          <select name="Maat" className="select__box">
            <option defaultValue="" disabled hidden>
              Kies hier:
            </option>
            <option name="alles" defaultValue="alles">
              Alles
            </option>
            <option name="L" defaultValue="L">
              L
            </option>
            <option name="S" defaultValue="S">
              S
            </option>
          </select>
        </div>
        <div className="categorieen--optie_2">
          <label htmlFor="prijsLaag">Prijs laag - hoog</label>
          <input type="checkbox" name="laagHoog"></input>
        </div>
        <div className="categorieen--optie_2">
          <label htmlFor="prijsHoog">Prijs hoog - laag</label>
          <input type="checkbox" name="hoogLaag"></input>
        </div>
      </div>
    </div>
  );
};

export default CategorieOpties;
