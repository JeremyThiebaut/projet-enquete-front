import axios from "axios";
import {
  GET_CHAPTER,
  getChapterSuccess,
  getChapterError,
  getStorytellingSuccess,
  getStorytellingError,
  getAllChapterSuccess,
  getAllChapterError,
} from "../action";

axios.defaults.withCredentials = true;

const playMiddleware = (store) => (next) => (action) => {
  const chapterId = store.getState().counter.chapterCounter;

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
      break;
    default:
      return;
  }
};

export default playMiddleware;
