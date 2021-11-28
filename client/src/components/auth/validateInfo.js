// Functie die een error array heeft die we vullen met eventuele errors.

export default function validateInfo(values) {
  let errors = [];

  // naam
  if (!values.naam.trim()) {
    errors.push("U moet een naam invoeren");
  }

  // email
  if (!values.email.trim()) {
    errors.push("U moet een email invoeren");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.push("Email adress klopt niet");
  }

  // adress
  if (!values.adress.trim()) {
    errors.push("U moet een adress invullen");
  }

  // plaats
  if (!values.plaats.trim()) {
    errors.push("U moet een plaats invullen");
  }

  // wachtwoord
  if (!values.wachtwoord) {
    errors.push("U moet een wachtwoord invullen");
  } else if (values.wachtwoord.length < 5) {
    errors.push("Vul aub een wachtwoord in met meer dan 5 characters zijn.");
  }

  if (!values.bevestigWachtwoord) {
    errors.push("U moet uw wachtwoord bevestigen");
  } else if (values.wachtwoord !== values.bevestigWachtwoord) {
    errors.push("Wachtwoorden matchen niet");
  }

  return errors;
}
