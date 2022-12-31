import { connect } from "react-redux";
import ButtonNext from "../components/ButtonNext";
import { getNext, updateStorytelling } from "../store/action";

const mapStateToProps = (state) => ({
  load: state.user.load,
});

const mapDispatchToProps = (dispatch) => ({
  next: () => {
    dispatch(getNext());
    // dispatch(updateStorytelling());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ButtonNext);
