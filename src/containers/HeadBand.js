import { connect } from "react-redux";
import HeadBand from "../components/HeadBand";

const mapStateToProps = (state) => ({
  storytelling: state.storytelling,
  storyCounter: state.counter.storyCounter,
  hide: state.hide,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(HeadBand);
