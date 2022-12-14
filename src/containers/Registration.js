import { connect } from "react-redux";
import Registration from "../components/Registration";
import { registrationInputChange, registrationSubmit } from "../store/action";

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  mail: state.user.mail,
  checkMail: state.user.checkMail,
  pwd: state.user.pwd,
  checkPwd: state.user.checkPwd,
  loading: state.loading,
  errorRegistration: state.user.errorRegistration,
});

const mapDispatchToProps = (dispatch) => ({
  onInputChange: (newData) => {
    dispatch(registrationInputChange(newData));
  },
  onFormRegistration: () => {
    dispatch(registrationSubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Registration);
