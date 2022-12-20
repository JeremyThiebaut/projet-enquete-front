import { connect } from "react-redux";
import Menu from "../components/Menu";

const mapStateToProps = (state) => ({
  shouldDisplayChapter: state.counter.shouldDisplayChapter,
});

const mapDispatchToProps = null;

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
