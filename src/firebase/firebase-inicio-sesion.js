
export const inicioSesion = (email, password) => {
  firebase.auth().signInWithEmailAndPassword(email, password).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;

    console.log(errorCode);
    console.log(errorMessage);
  });
};
