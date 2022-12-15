import {
  CHECK_AUTH,
  registrationError,
  registrationSuccess,
  REGISTRATION_SUBMIT,
  loginSuccess,
  LOGIN_SUBMIT,
  loginError,
  LOGOUT,
  logoutSuccess,
} from "../action";
import axios from "axios";

axios.defaults.withCredentials = true;

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
    case LOGIN_SUBMIT:
      const { user } = store.getState();
      axios({
        method: "post",
        url: "http://localhost:3001/login",
        data: user,
      })
        .then((res) => {
          console.log("non serv :", res.data);
          store.dispatch(loginSuccess(res.data));
        })
        .catch((err) => {
          console.error(err);
          store.dispatch(loginError("Impossible de connecter cet utilisateur"));
        });
      break;
    case LOGOUT:
      axios({
        method: "post",
        url: "http://localhost:3001/logout",
      })
        .then((res) => {
          console.log(res.data);
          store.dispatch(logoutSuccess());
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
