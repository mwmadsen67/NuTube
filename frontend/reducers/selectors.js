export const selectVideo = ({ videos }, videoId ) => {
  return videos[videoId];
};

export const videoArray = ({ videos }) => (
  Object.keys(videos).map(key => videos[key])
);

export const commentsArray = comments => {
  let array = !comments ? [] : Object.keys(comments).map(key => comments[key]);
  return array;
}