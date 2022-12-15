import { connect } from "react-redux";
import App from "../components/App";
import { checkAuth } from "../store/action";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  checkAuth: () => {
    dispatch(checkAuth());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
