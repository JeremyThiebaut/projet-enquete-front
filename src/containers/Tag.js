import { connect } from "react-redux";
import Tag from "../components/Tag";

const mapStateToProps = (state) => ({
  placeName: state.place.placeName,
  shouldDisplayQuestion: state.counter.shouldDisplayQuestion,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(Tag);
