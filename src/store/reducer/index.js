import {
  REGISTRATION_INPUT_CHANGE,
  REGISTRATION_SUBMIT,
  REGISTRATION_SUCCESS,
  REGISTRATION_ERROR,
  LOGIN_SUCCESS,
  LOGIN_INPUT_CHANGE,
  LOGIN_SUBMIT,
  LOGIN_ERROR,
  LOGOUT_SUCCESS,
  GET_CHAPTER,
  GET_CHAPTER_SUCCESS,
  GET_CHAPTER_ERROR,
  GET_STORYTELLING_SUCCESS,
  GET_STORYTELLING_ERROR,
  GET_NEXT,
  GET_NEXT_SUCCESS,
  GET_CHARACTER_SUCCESS,
  GET_CHARACTER_ERROR,
  GET_QUESTION_SUCCESS,
  GET_QUESTION_ERROR,
  TOGGLE_QUESTION_RESPONSE,
  GET_ALL_CHAPTER_SUCCESS,
  GET_ALL_CHAPTER_ERROR,
  UPDATE_STORYTELLING_SUCCESS,
  REPLAY_SUBMIT,
  UPDATE_STORYTELLING,
} from "../action";

const initialState = {
  user: {
    id: "",
    pseudo: "",
    mail: "",
    checkMail: "",
    pwd: "",
    checkPwd: "",
    errorRegistration: "",
    error: "",
    isLogged: false,
    load: true,
    updateLoad: false,

    counter: {
      allChapter: 0,
      chapterCounter: 1,
      storyCounter: 1,
      questionCounter: 1,
      situationCounter: 1,
      shouldDisplayQuestion: false,
      shouldDisplayChapter: true,
    },

    game: {
      hide: false,
      character: [],
      question: [],
      place: {},
      chapter: {},
      storytelling: [
        {
          id: "",
          sentence: "",
        },
      ],
    },
  },

  // apiUrl: "https://gamenodeserver.jtdev.fr/",
  // apiUrl: "http://localhost:3001/",
  // apiUrl: "https://obeachback.jtdev.fr/",
  apiUrl: "https://enquete-back.onrender.com/",

  loading: false,
  disconnected: true,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, action = {}) => {
  switch (action.type) {
    case REGISTRATION_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case REGISTRATION_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          errorRegistration: "",
        },
        loading: true,
      };
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
          errorRegistration: "",
          isLogged: true,
        },
        disconnected: false,
        loading: false,
      };
    // a voir
    case REGISTRATION_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          errorRegistration: action.payload,
        },
        disconnected: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          pseudo: action.payload.pseudo,
          mail: action.payload.mail,
          errorRegistration: action.payload.errorRegistration,
          error: action.payload.error,
          isLogged: true,

          counter: {
            ...state.user.counter,
            allChapter: action.payload.allChapter,
            chapterCounter: action.payload.chapterCounter,
            storyCounter: action.payload.storyCounter,
            questionCounter: action.payload.questionCounter,
            situationCounter: action.payload.situationCounter,
            shouldDisplayQuestion: action.payload.shouldDisplayQuestion,
            shouldDisplayChapter: action.payload.shouldDisplayChapter,
          },
          game: {
            ...state.user.game,
          },
        },
        disconnected: false,
        loading: false,
      };
    case LOGIN_INPUT_CHANGE:
      return {
        ...state,
        user: {
          ...state.user,
          ...action.payload,
        },
      };
    case LOGIN_SUBMIT:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        user: {
          ...state.user,
          isLogged: false,
          error: action.payload,
        },
        loading: false,
      };
    case LOGOUT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: "",
          pseudo: "",
          mail: "",
          checkMail: "",
          pwd: "",
          checkPwd: "",
          errorRegistration: "",
          error: "",
          isLogged: false,

          counter: {
            ...state.user.counter,
            allChapter: 0,
            chapterCounter: 1,
            storyCounter: 1,
            questionCounter: 1,
            situationCounter: 1,
            shouldDisplayQuestion: false,
            shouldDisplayChapter: true,
          },

          game: {
            ...state.user.game,
            hide: false,
            character: [],
            question: [],
            place: {},
            chapter: {},
            storytelling: [
              {
                id: "",
                sentence: "",
              },
            ],
          },
        },
      };
    case GET_CHAPTER:
      return {
        ...state,
        user: {
          ...state.user,
          load: true,
        },
      };
    case GET_CHAPTER_SUCCESS:
      const payload = action.payload[0];
      return {
        ...state,
        user: {
          ...state.user,
          game: {
            ...state.user.game,
            place: {
              placeId: payload["place.id"],
              placeName: payload["place.name"],
              placePicture: payload["place.picture"],
            },
            chapter: [
              {
                chapterId: payload["chapter_id"],
              },
            ],
          },
        },
      };
    case GET_CHAPTER_ERROR:
      return {
        ...state,
      };
    case GET_STORYTELLING_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          game: {
            ...state.user.game,
            storytelling: action.payload,
          },
        },
      };
    case GET_STORYTELLING_ERROR:
      return {
        ...state,
      };
    case GET_NEXT:
      return {
        ...state,
        user: {
          ...state.user,
          load: true,
          game: {
            ...state.user.game,
            hide: true,
          },
          counter: {
            ...state.user.counter,
            ...setCompter(state),
          },
        },
      };
    case GET_NEXT_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          load: false,
        },
      };
    case GET_CHARACTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          game: {
            ...state.user.game,
            character: [...action.payload],
          },
        },
      };
    case GET_CHARACTER_ERROR:
      return {
        ...state,
      };
    case GET_QUESTION_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          game: {
            ...state.user.game,
            hide: !state.user.game.hide,
            question: action.payload,
          },
        },
      };
    case GET_QUESTION_ERROR:
      return {
        ...state,
      };
    case TOGGLE_QUESTION_RESPONSE:
      return {
        ...state,
        user: {
          ...state.user,
          game: {
            ...state.user.game,
            hide: !state.user.game.hide,
          },
        },
      };
    case GET_ALL_CHAPTER_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          counter: {
            ...state.user.counter,
            allChapter: action.payload,
          },
        },
      };
    case GET_ALL_CHAPTER_ERROR:
      return {
        ...state,
      };
    case UPDATE_STORYTELLING:
      return {
        ...state,
        user: {
          ...state.user,
          updateLoad: true,
        },
      };
    case UPDATE_STORYTELLING_SUCCESS:
      return {
        ...state,
        user: {
          ...state.user,
          id: action.payload.id,
          pseudo: action.payload.pseudo,
          mail: action.payload.mail,
          errorRegistration: action.payload.errorRegistration,
          error: action.payload.error,
          updateLoad: false,

          counter: {
            ...state.user.counter,
            allChapter: action.payload.allChapter,
            chapterCounter: action.payload.chapterCounter,
            storyCounter: action.payload.storyCounter,
            questionCounter: action.payload.questionCounter,
            situationCounter: action.payload.situationCounter,
            shouldDisplayQuestion: action.payload.shouldDisplayQuestion,
            shouldDisplayChapter: action.payload.shouldDisplayChapter,
          },
        },
      };
    case REPLAY_SUBMIT:
      return {
        ...state,
        user: {
          ...state.user,
          counter: {
            ...state.user.counter,
            chapterCounter: 1,
            storyCounter: 1,
            questionCounter: 1,
            situationCounter: 1,
            shouldDisplayQuestion: false,
            shouldDisplayChapter: true,
          },
        },
      };
    default:
      return state;
  }
};

var setCompter = (oldState) => {
  const state = { ...oldState };
  // console.log("question : ", state.user.game.question);

  if (state.user.counter.chapterCounter !== state.user.counter.allChapter - 1) {
    state.user.counter.shouldDisplayChapter = true;
    if (state.user.counter.storyCounter < state.user.game.storytelling.length) {
      // alert("story incrementation");
      state.user.counter.storyCounter++;
      state.user.counter.shouldDisplayQuestion = false;
      // Vérifier si storyCounter === longueur tableau - 1 && questions.length
    } else if (
      state.user.counter.storyCounter === state.user.game.storytelling.length &&
      state.user.game.question.length &&
      !state.user.counter.shouldDisplayQuestion
    ) {
      state.user.counter.shouldDisplayQuestion = true;
    } else if (
      state.user.counter.questionCounter < state.user.game.question.length
    ) {
      // alert("question incrementation");
      state.user.counter.questionCounter++;
      //Vérifier si arrivé au bout des questions || (pas de question && aubout des story
    } else if (
      state.user.counter.questionCounter === state.user.game.question.length ||
      (state.user.game.question.length === 0 &&
        state.user.counter.storyCounter === state.user.game.storytelling.length)
    ) {
      state.user.counter.shouldDisplayQuestion = false;

      // alert("chapter incrementation");
      state.user.counter.chapterCounter++;
      state.user.counter.situationCounter++;
      state.user.counter.questionCounter = 1;
      state.user.counter.storyCounter = 1;
    }

    return state.user.counter;
  } else {
    if (state.user.counter.chapterCounter < state.user.counter.allChapter) {
      state.user.counter.chapterCounter++;
    }
    state.user.counter.shouldDisplayChapter = false;
    return state.user.counter;
  }
};
