import { connect } from "react-redux";
import Selection from "../components/Selection";
import { toggleQuestionResponse } from "../store/action";

const mapStateToProps = (state) => ({
  question: state.user.game.question,
  hide: state.user.game.hide,
  questionCounter: state.user.counter.questionCounter,
});

const mapDispatchToProps = (dispatch) => ({
  toggleQuestionResponse: () => {
    dispatch(toggleQuestionResponse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Selection);
