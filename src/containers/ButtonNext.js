import { connect } from "react-redux";
import ButtonNext from "../components/ButtonNext";
import { getNext, updateStorytelling } from "../store/action";

const mapStateToProps = null;

const mapDispatchToProps = (dispatch) => ({
  next: () => {
    dispatch(getNext());
    dispatch(updateStorytelling());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext);
