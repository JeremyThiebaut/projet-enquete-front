import { connect } from "react-redux";
import End from "../components/End";
import { replaySubmit } from "../store/action";

const mapStateToProps = (state) => ({
  storytelling: state.user.game.storytelling,
});

const mapDispatchToProps = (dispatch) => ({
  replay: () => {
    dispatch(replaySubmit());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(End);
