import { connect } from "react-redux";
import Menu from "../components/Menu";
import { openMenu, onMute } from "../store/action";

const mapStateToProps = (state) => ({
  open: state.open,
  mute: state.mute,
});

const mapDispatchToProps = (dispatch) => ({
  onOpenMenu: () => {
    dispatch(openMenu());
  },
  onClickMute: () => {
    dispatch(onMute());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
