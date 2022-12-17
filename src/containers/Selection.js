import { connect } from "react-redux";
import Selection from "../components/Selection";

const mapStateToProps = (state) => ({
  question: state.question,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(Selection);
