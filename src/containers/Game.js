import { connect } from "react-redux";
import Game from "../components/Game";

const mapStateToProps = (state) => ({
  place: state.place,
  isLogged: state.user.isLogged,
  character: state.character,
  question: state.question,
  questionCounter: state.counter.questionCounter,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(Game);
