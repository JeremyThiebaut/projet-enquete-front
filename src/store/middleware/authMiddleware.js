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
  loginSubmit,
} from "../action";
import axios from "axios";
import { toast } from "react-toastify";

axios.defaults.withCredentials = true;

const authMiddleware = (store) => (next) => (action) => {
  const { apiUrl } = store.getState();

  next(action);
  switch (action.type) {
    case REGISTRATION_SUBMIT:
      {
        const { user } = store.getState();
        axios({
          method: "post",
          url: `${apiUrl}logon`,
          data: user,
        })
          .then((res) => {
            // console.log(res.data);
            store.dispatch(registrationSuccess(res.data));
            store.dispatch(loginSubmit());
            toast.success(`Utilisateur enregistré.`, {
              autoClose: 2000,
            });
          })
          .catch((err) => {
            console.error(err);
            toast.error("Impossible de connecter cet utilisateur", {
              autoClose: 2000,
            });
            store.dispatch(
              registrationError("Impossible de créer cet utilisateur")
            );
          });
      }
      break;
    case CHECK_AUTH:
      axios({
        method: "post",
        url: `${apiUrl}isLogged`,
      })
        .then((res) => {
          // console.log(res.data);
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
        url: `${apiUrl}login`,
        data: user,
      })
        .then((res) => {
          // console.log("non serv :", res.data);
          store.dispatch(loginSuccess(res.data));
          toast.success(`Bonjour ${store.getState().user.pseudo} 👋`, {
            autoClose: 2000,
          });
        })
        .catch((err) => {
          console.error(err);
          toast.error("Impossible de connecter cet utilisateur");
          store.dispatch(loginError("Impossible de connecter cet utilisateur"));
        });
      break;
    case LOGOUT:
      const pseudo = store.getState().user.pseudo;
      axios({
        method: "post",
        url: `${apiUrl}logout`,
      })
        .then((res) => {
          // console.log(res.data);
          store.dispatch(logoutSuccess());
          toast.info(`Au revoir ${pseudo} 👋`, { autoClose: 2000 });
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
