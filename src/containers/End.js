import { connect } from "react-redux";
import End from "../components/End";

const mapStateToProps = (state) => ({
  storytelling: state.storytelling,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(End);
