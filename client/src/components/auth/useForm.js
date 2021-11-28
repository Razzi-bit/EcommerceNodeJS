// react imports
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

// Functie dat userInput pakt en de errors in een array stopt die we 1 voor  1 laten zien als er een error is.

// formTouched zorgt ervoor dat je niet gelijk een formulier kan submitten als je op de pagina komt
const useForm = (validate) => {
  const [values, setValues] = useState({
    naam: " ",
    email: "",
    adress: "",
    plaats: "",
    wachtwoord: "",
    bevestigWachtwoord: "",
  });
  const [errors, setErrors] = useState([]);
  const [formTouched, setFormTouched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const signup = async () => {
      setIsLoading(true);
      try {
        const response = await fetch("http://localhost:8000/gebruikers/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            naam: values.naam,
            email: values.email,
            adress: values.adress,
            plaats: values.plaats,
            wachtwoord: values.wachtwoord,
            bevestigWachtwoord: values.bevestigWachtwoord,
          }),
        });

        console.log(response);
        const responseData = await response.json();
        console.log(responseData);
        if (!response.ok) throw new Error(responseData.message);

        setIsLoading(false);
        history.push("/login");
      } catch (err) {
        console.log(err);
        setErrors((error) => [...error, err.message]);
        setIsLoading(false);
      }
    };
    if (errors.length === 0 && formTouched) {
      signup();
    }
  }, [errors, formTouched]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormTouched(true);
    setErrors(validate(values));
  };

  return { handleChange, values, handleSubmit, errors, formTouched, isLoading };
};

export default useForm;
