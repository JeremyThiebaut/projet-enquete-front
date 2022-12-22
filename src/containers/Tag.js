import { connect } from "react-redux";
import Tag from "../components/Tag";

const mapStateToProps = (state) => ({
  placeName: state.user.game.place.placeName,
  shouldDisplayQuestion: state.user.counter.shouldDisplayQuestion,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Tag);
