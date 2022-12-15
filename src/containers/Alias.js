import { connect } from "react-redux";
import Alias from "../components/Alias";
import { logout } from "../store/action";

const mapStateToProps = (state) => ({
  pseudo: state.user.pseudo,
  isLogged: state.user.isLogged,
  disconnected: state.disconnected,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    console.log("logout");
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Alias);
