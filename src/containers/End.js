import { connect } from "react-redux";
import End from "../components/End";

const mapStateToProps = (state) => ({
  storytelling: state.user.game.storytelling,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(End);
