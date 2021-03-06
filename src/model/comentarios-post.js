export const addComment = (objComment) => {
  const result = firebase.firestore().collection('comments').add(objComment);
  return result;
};

export const getComments = (idPost, callbackComment) => {
  firebase.firestore().collection('comments').where('idPost', '==', idPost)
    .onSnapshot((querySnapshot) => {
      const newArray = [];
      querySnapshot.forEach((doc) => {
        const obj = {
          id: doc.id,
          ...doc.data(),
        };
        newArray.push(obj);
      });
      callbackComment(newArray);
    });
};

export const getAllComments = (idPost) => {
  const result = firebase.firestore().collection('comments').where('idPost', '==', idPost).get();
  return result;
};

export const deleteComment = (idComment) => {
  const result = firebase.firestore().collection('comments').doc(idComment).delete();
  return result;
};

export const updateComment = (idComment, newTextComent) => {
  const result = firebase.firestore().collection('comments').doc(idComment).update({
    textComment: newTextComent,
  });
  return result;
};
