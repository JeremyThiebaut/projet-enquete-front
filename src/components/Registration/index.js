import React from "react";
import { toast } from "react-toastify";
import Loading from "../Loading";
import "./style.scss";
import PropTypes from "prop-types";

const Registration = ({
  pseudo,
  mail,
  checkMail,
  pwd,
  checkPwd,
  onInputChange,
  onFormRegistration,
  loading,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (mail !== checkMail) {
      toast.error("Les emails sont différents.");
    }
    if (pwd !== checkPwd) {
      toast.error("Les mots de passe sont différents.");
    }
    onFormRegistration();
  };

  const handleInpusChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };
  return (
    <div className="registration">
      {loading ? (
        <Loading />
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <h1>Formulaire d'inscription</h1>
          <input
            type="text"
            name="pseudo"
            value={pseudo}
            placeholder="Entrez votre pseudo"
            required
            onChange={handleInpusChange}
          />

          <input
            type="mail"
            name="mail"
            value={mail}
            placeholder="Entrez votre mail"
            required
            onChange={handleInpusChange}
          />

          <input
            type="mail"
            name="checkMail"
            value={checkMail}
            placeholder="Confirmez votre mail"
            required
            onChange={handleInpusChange}
          />

          <input
            type="password"
            name="pwd"
            value={pwd}
            placeholder="Entrez votre mot de passe"
            required
            onChange={handleInpusChange}
          />

          <input
            type="password"
            name="checkPwd"
            value={checkPwd}
            placeholder="Confirmez votre mot de passe"
            required
            onChange={handleInpusChange}
          />

          <input
            className="registration-form__submit"
            type="submit"
            value="S'inscrire"
          />
        </form>
      )}
    </div>
  );
};

Registration.propTypes = {
  pseudo: PropTypes.string.isRequired,
  mail: PropTypes.string.isRequired,
  checkMail: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired,
  checkPwd: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormRegistration: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Registration;
