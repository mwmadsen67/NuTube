export const selectVideo = ({ videos }, videoId ) => {
  return videos[videoId];
};

export const videoArray = ({ videos }) => (
  Object.keys(videos).map(key => videos[key])
);