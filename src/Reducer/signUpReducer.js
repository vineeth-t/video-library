export function signUpreducer(state, { type, payload }) {
    switch (type) {
      case "SET-FIRST-NAME":
        return { ...state, fname: payload };
      case "SET-LAST-NAME":
        return { ...state, lname: payload };
      case "SET-EMAIL-ID":
        return { ...state, emailId: payload };
      case "SET-PASSWORD":
        return { ...state, password: payload };
      case "SET-CONFIRM-PASSWORD":
        return { ...state, confirmPassword: payload };
      case "ADD_USER":
          return{...state, User:{payload}}
      default:
        return state;
    }
  }
  