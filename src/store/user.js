import firebase from "firebase/app";
export default {
  state: {
    user: {
      isAuthentificated: false,
      uid: null
    }
  },
  mutations: {},
  actions: {
    SIGNUP({ commit }, payload) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => console.log(user))
        .catch(function(error) {
          console.log(error);
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // ...
        });
    }
  }
};
