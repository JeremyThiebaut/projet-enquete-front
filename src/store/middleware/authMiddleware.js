import {
  registrationError,
  registrationSubmit,
  REGISTRATION_SUBMIT,
} from "../action";
import axios from "axios";

const authMiddleware = (store) => (next) => (action) => {
  next(action);
  switch (action.type) {
    case REGISTRATION_SUBMIT:
      {
        const { user } = store.getState();
        axios({
          method: "post",
          url: "http://localhost:3001/logon",
          data: user,
          withCredentials: true,
        })
          .then((res) => {
            console.log(res.data);
            store.dispatch(registrationSubmit(res.data));
          })
          .catch((err) => {
            console.error(err);
            store.dispatch(
              registrationError("Impossible de créer cet utilisateur")
            );
          });
      }
      break;
    default:
      return;
  }
};

export default authMiddleware;
