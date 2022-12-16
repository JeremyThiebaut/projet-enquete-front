import { connect } from "react-redux";
import Home from "../components/Home";

const mapStateToProps = (state) => ({
    isLogged: state.user.isLogged,
  });
  

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Home);
