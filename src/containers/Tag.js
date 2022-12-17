import { connect, Connect } from "react-redux";
import Tag from "../components/Tag";

const mapStateToProps = (state) => ({
  character: state.character,
  placeName: state.place.placeName,
});

const mapDiapatchToProps = null;

export default connect(mapStateToProps, mapDiapatchToProps)(Tag);
