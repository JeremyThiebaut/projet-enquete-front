import React from "react";
import Loading from "../Loading";
import PropTypes from "prop-types";
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

Connecion.propTypes = {
  mail: PropTypes.string.isRequired,
  pwd: PropTypes.string.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onFormLogin: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Connecion;
