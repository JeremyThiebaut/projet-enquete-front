import { connect } from "react-redux";
import Game from "../components/Game";

const mapStateToProps = (state) => ({
  place: state.place,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(Game);
