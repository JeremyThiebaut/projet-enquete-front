import { connect } from "react-redux";
import Home from "../components/Home";
import { getChapter } from "../store/action";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged,
});

const mapDispatchToProps = (dispatch) => ({
  onClickPlay: () => {
    dispatch(getChapter());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
