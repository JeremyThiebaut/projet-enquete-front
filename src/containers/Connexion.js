import { connect } from "react-redux";
import Connecion from "../components/Connexion";
import { loginInputChange, loginSubmit } from "../store/action";

const mapStateToProps = (state) => ({
  mail: state.user.mail,
  pwd: state.user.pwd,
  loading: state.loading,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (changeData) => {
    dispatch(loginInputChange(changeData));
  },
  onFormLogin: () => {
    dispatch(loginSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Connecion);
