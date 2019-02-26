```js
{
  entities: {
    videos: {
      1: {
        id: 1,
        title: "Cat Compilation 57",
        description: "These cats are real crazy this time",
        userId: 9,
        likerIds: [9],
        dislikerIds: [18],
        commentIds: [1]
      },
      2: {
        id: 2,
        title: "DOG COMPILATION DOGS R BETTER THAN CATS!!",
        description: "I LOVE DOGS CATS SUCK!!"
        userId: 18,
        likerIds: [],
        dislikerIds: [],
        commentIds: []
      },
      3: {
        id: 3,
        title: "People doing stuff",
        description: "The title speaks for itself"
        userId: 9,
        likerIds: [9, 18],
        dislikerIds: [],
        commentIds: [2, 3]
      }
    },
    users: {
      9: {
        id: 9,
        username: "cat_guy360",
        email: "secret_dog_guy720@hotmail.com"
        authoredVideoIds: [1, 3],
        likedVideoIds: [1, 3],
        dislikedVideoIds: [],
        commentedIds: [3]
      },
      25: {
        id: 25,
        username: "Betsy McChetsky"
        email: "local_watch_dog@usa.gov",
        authoredChirpIds: [2],
        likedChirpIds: [3],
        dislikedVideoIds: [1],
        commentedIds: [1, 2]
      }
    }
    comments: {
      1: {
        id: 1,
        body: "Cats r smelly and so r u",
        userId: 18,
        videoId: 1
        upvoterIds: [],
        downvoterIds: []
      },
      2: {
        id: 2,
        body: "cool",
        userId: 18,
        videoId: 3,
        upvoterIds: [],
        downvoterIds: []
      },
      3: {
        id: 3,
        body: "Thanks for watching fam!",
        userId: 9,
        videoId: 3,
        upvoterIds: [],
        downvoterIds: []
      }
    },
  },
  ui: {
    loading: true/false
  },
  errors: {
    login: ["Incorrect email/password combination"],
    videoForm: ["Video title cannot be blank"],
  },
  session: { currentUserId: 9 }
}
```