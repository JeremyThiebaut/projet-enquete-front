import {
  CHECK_AUTH,
  registrationError,
  registrationSuccess,
  REGISTRATION_SUBMIT,
  loginSuccess,
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
            store.dispatch(registrationSuccess(res.data));
          })
          .catch((err) => {
            console.error(err);
            store.dispatch(
              registrationError("Impossible de créer cet utilisateur")
            );
          });
      }
      break;
    case CHECK_AUTH:
      axios({
        method: "post",
        url: "http://localhost:3001/isLogged",
        withCredentials: true,
      })
        .then((res) => {
          console.log(res.data);
          if (res.data.logged) {
            store.dispatch(loginSuccess(res.data.info));
          }
        })
        .catch((err) => {
          console.error(err);
        });
      break;
    default:
      return;
  }
};

export default authMiddleware;
