## Frontend Routes
Our components are organized as follows:
+ `Root`
  + `App`
    + `NavBar`
    + `SideBar`
    + (main component goes here)

The following routes, defined in `App`, will render components between `NavBar` and `SideBar`.

+ `/`
  + `VideoIndex`
    + `VideoIndexItem`
+ `/login`
  + `SessionForm`
+ `/signup`
  + `SessionForm`
+ `/users/:userId`
  + `ProfileComponent`
  + `VideoIndex`
    + `VideoIndexItem`
+ `/videos/new`
  + `VideoForm`
+ `/videos/:videoId`
  + `VideoShow`
