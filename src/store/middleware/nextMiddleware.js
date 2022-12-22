import axios from "axios";
import {
  GET_NEXT,
  getQuestionSuccess,
  getQuestionError,
  getCharacterSuccess,
  getCharacterError,
  getStorytellingSuccess,
  getStorytellingError,
  getChapterSuccess,
  getChapterError,
} from "../action";

const nextMiddleware = (store) => (next) => (action) => {
  const chapterId = store.getState().user.counter.chapterCounter + 1;
  const situationId = store.getState().user.counter.situationCounter + 1;
  const storyCounter = store.getState().user.counter.storyCounter;
  const storyLength = store.getState().user.game.storytelling.length;
  axios.defaults.withCredentials = true;

  next(action);
  switch (action.type) {
    case GET_NEXT:
      if (
        !store.getState().user.counter.shouldDisplayQuestion &&
        storyCounter === storyLength
      ) {
        axios({
          method: "get",
          url: `http://localhost:3001/play/situation/${chapterId}`,
        })
          .then((res) => {
            const chapter = res.data;

            axios({
              method: "get",
              url: `http://localhost:3001/play/storytelling/${chapterId}`,
            })
              .then((res) => {
                const story = res.data;

                axios({
                  method: "get",
                  url: `http://localhost:3001/play/character/${situationId}`,
                })
                  .then((res) => {
                    const character = res.data;

                    axios({
                      method: "get",
                      url: `http://localhost:3001/play/question/${situationId}`,
                    })
                      .then((res) => {
                        const question = res.data;

                        store.dispatch(getQuestionSuccess(question));
                        store.dispatch(getCharacterSuccess(character));
                        store.dispatch(getStorytellingSuccess(story));
                        store.dispatch(getChapterSuccess(chapter));
                      })
                      .catch((err) => {
                        console.log(err);
                        store.dispatch(
                          getQuestionError(
                            `Impossible de récupérer les questions...`
                          )
                        );
                      });
                  })
                  .catch((err) => {
                    console.log(err);
                    store.dispatch(
                      getCharacterError(
                        `Impossible de récupérer les characters...`
                      )
                    );
                  });
              })
              .catch((err) => {
                console.log(err);
                store.dispatch(
                  getStorytellingError(`Impossible de récupérer les story...`)
                );
              });
          })
          .catch((err) => {
            console.log(err);
            store.dispatch(
              getChapterError(`Impossible de récupérer les chapitres...`)
            );
          });
      }
      break;
    default:
      return;
  }
};

export default nextMiddleware;
