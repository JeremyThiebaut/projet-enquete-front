import { connect } from "react-redux";
import HeadBand from "../components/HeadBand";

const mapStateToProps = (state) => ({
  storytelling: state.user.game.storytelling,
  storyCounter: state.user.counter.storyCounter,
  hide: state.user.game.hide,
  shouldDisplayQuestion: state.user.counter.shouldDisplayQuestion,
  shouldDisplayChapter: state.user.counter.shouldDisplayChapter,
  load: state.user.load,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(HeadBand);
