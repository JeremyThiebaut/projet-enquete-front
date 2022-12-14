import React from "react";
import Menu from "../Menu";
import Loading from "../Loading";
import "./style.scss";

const Registration = ({
  pseudo,
  mail,
  checkMail,
  pwd,
  checkPwd,
  onInputChange,
  onFormRegistration,
  loading,
  errorRegistration,
}) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
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
      <div className="header">
        <div className="header-menu">
          <Menu />
        </div>
      </div>
      {loading ? (
        <Loading />
      ) : (
        <form className="registration-form" onSubmit={handleSubmit}>
          <h1>Formulaire d'inscription</h1>
          {errorRegistration && <div>{errorRegistration}</div>}
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

export default Registration;
