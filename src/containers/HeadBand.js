import { connect } from "react-redux";
import HeadBand from "../components/HeadBand";

const mapStateToProps = (state) => ({
  sentence: state.storytelling[0].sentence,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(HeadBand);
