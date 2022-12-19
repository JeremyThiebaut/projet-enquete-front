import { connect } from "react-redux";
import Selection from "../components/Selection";
import { toggleQuestionResponse } from "../store/action";

const mapStateToProps = (state) => ({
  question: state.question,
  hide: state.hide,
  questionCounter: state.counter.questionCounter,
});

const mapDiapatchToProps = (dispatch) => ({
  toggleQuestionResponse: () => {
    dispatch(toggleQuestionResponse());
  },
});

export default connect(mapStateToProps, mapDiapatchToProps)(Selection);
