import React from "react";
import Menu from "../Menu";
import Loading from "../Loading";
import "./style.scss";

const Connecion = ({ mail, pwd, onInputChange, onFormLogin, loading }) => {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    onFormLogin();
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    onInputChange({
      [name]: value,
    });
  };

  return (
    <div className="connexion">
      <div className="header">
        <div className="header-menu">
          <Menu />
        </div>
      </div>

      {loading ? (
        <Loading />
      ) : (
        <form className="connexion-form" onSubmit={handleSubmit}>
          <h1>Se connecter</h1>
          <input
            type="mail"
            name="mail"
            value={mail}
            placeholder="Entrez votre mail"
            required
            onChange={handleInputChange}
          />

          <input
            type="password"
            name="pwd"
            value={pwd}
            placeholder="Entrez votre mot de passe"
            required
            onChange={handleInputChange}
          />

          <input
            className="connexion-form__submit"
            type="submit"
            value="Se connecter"
          />
        </form>
      )}
    </div>
  );
};

export default Connecion;
