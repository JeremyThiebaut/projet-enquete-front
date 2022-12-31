import { connect } from "react-redux";
import Game from "../components/Game";

const mapStateToProps = (state) => ({
  place: state.user.game.place,
  isLogged: state.user.isLogged,
  character: state.user.game.character,
  question: state.user.game.question,
  questionCounter: state.user.counter.questionCounter,
  shouldDisplayQuestion: state.user.counter.shouldDisplayQuestion,
  shouldDisplayChapter: state.user.counter.shouldDisplayChapter,
  load: state.user.load,
  updateLoad: state.user.updateLoad,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Game);
