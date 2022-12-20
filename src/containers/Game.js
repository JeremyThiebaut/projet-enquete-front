import { connect } from "react-redux";
import Game from "../components/Game";

const mapStateToProps = (state) => ({
  place: state.place,
  isLogged: state.user.isLogged,
  character: state.character,
  question: state.question,
  questionCounter: state.counter.questionCounter,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion,
  shouldDisplayChapter: state.counter.shouldDisplayChapter,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
