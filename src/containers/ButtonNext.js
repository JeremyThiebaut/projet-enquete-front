import { connect } from "react-redux";
import ButtonNext from "../components/ButtonNext";
import { getNext } from "../store/action";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  next: () => {
    dispatch(getNext());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext);
