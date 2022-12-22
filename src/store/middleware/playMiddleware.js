import axios from "axios";
import {
  GET_CHAPTER,
  getChapterSuccess,
  getChapterError,
  getStorytellingSuccess,
  getStorytellingError,
  getAllChapterSuccess,
  getAllChapterError,
  UPDATE_STORYTELLING,
  updateStorytellingSuccess,
  getCharacterSuccess,
  getQuestionSuccess,
  REPLAY_SUBMIT,
} from "../action";

axios.defaults.withCredentials = true;

const playMiddleware = (store) => (next) => (action) => {
  const chapterId = store.getState().user.counter.chapterCounter;
  const situationId = store.getState().user.counter.situationCounter;

  next(action);
  switch (action.type) {
    case GET_CHAPTER:
      axios({
        method: "get",
        url: `http://localhost:3001/play/allChapter`,
      })
        .then((res) => {
          store.dispatch(getAllChapterSuccess(res.data));
          axios({
            method: "get",
            url: `http://localhost:3001/play/situation/${chapterId}`,
          })
            .then((res) => {
              store.dispatch(getChapterSuccess(res.data));
              axios({
                method: "get",
                url: `http://localhost:3001/play/storytelling/${chapterId}`,
              })
                .then((res) => {
                  store.dispatch(getStorytellingSuccess(res.data));
                  axios({
                    method: "get",
                    url: `http://localhost:3001/play/character/${situationId}`,
                  })
                    .then((res) => {
                      store.dispatch(getCharacterSuccess(res.data));
                      axios({
                        method: "get",
                        url: `http://localhost:3001/play/question/${situationId}`,
                      })
                        .then((res) => {
                          store.dispatch(getQuestionSuccess(res.data));
                        })
                        .catch((err) => {
                          console.log(
                            "Impossible de récuperer les questions..."
                          );
                        });
                    })
                    .catch((err) => {
                      console.log("Impossible de récuperer les character...");
                    });
                })
                .catch((err) => {
                  store.dispatch(
                    getStorytellingError("Impossible de récupérer les story...")
                  );
                });
            })
            .catch((err) => {
              store.dispatch(
                getChapterError("Impossible de récupérer les chapitres...")
              );
            });
        })
        .catch((err) => {
          store.dispatch(
            getAllChapterError(
              "Impossible de récupérer le total de chapitre..."
            )
          );
        });
      // }
      break;
    case UPDATE_STORYTELLING:
      const { user } = store.getState();

      axios({
        method: "post",
        url: "http://localhost:3001/update",
        data: user,
      })
        .then((res) => {
          store.dispatch(updateStorytellingSuccess(res.data));
        })
        .catch((e) => {
          console.log("mise a jour impossible...");
        });
      break;
    case REPLAY_SUBMIT:
      const replay = store.getState().user;
      axios({
        method: "post",
        url: "http://localhost:3001/update",
        data: replay,
      })
        .then((res) => {
          console.log("coucou");
          store.dispatch(updateStorytellingSuccess(res.data));
        })
        .catch((e) => {
          console.log("reset impossible");
        });
      break;
    default:
      return;
  }
};

export default playMiddleware;
