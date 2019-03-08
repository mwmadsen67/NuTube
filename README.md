# NuTube

![alt text](https://github.com/mwmadsen67/NuTube/blob/master/app/assets/images/nutube_logo2.png "Logo Title Text 1")

## Introduction

NuTube is a new and improved version of YouTube in which users can watch and upload videos.

[NuTube live site](https://nutube.herokuapp.com/#/)

## Features

NuTube includes the following features:

* User authentication
* Video streaming
* Video upload for logged in users
  * Users upload a thumbnail for their video
  * Write a title, description, and indicate video length (in seconds)
* Users can edit their own video information (title, description, and posted length)
* Logged in users can like and dislike videos
* New videos are instantly featured on the front page of the website
* Comments are disabled on all videos, to preserve a non-toxic video sharing community

## Video Upload

NuTube utilizes a high performance content storage technology called Active Storage, which allows it's users to upload 4k videos and high quality images, storing them on Amazons S3 cloud storage.

Logged in users can click on the video camera button conveniently located on the header to go to the video upload page. Once there, the user chooses a video from their local storage to upload, as well as a preview image to display as the thumbnail for their video.

![alt text](https://github.com/mwmadsen67/NuTube/blob/master/app/assets/images/VideoUpload1.png "Text 2")

Once both files are chosen, the user is shown a page allowing them to input their video's title, description, and posted video length. NuTubers can optionally choose to have a description on their video or not. The user must input the video length in seconds for NuTube to convert into a displayable format.

![alt text](https://github.com/mwmadsen67/NuTube/blob/master/app/assets/images/VideoUpload2.png "Text 3")

Once the user clicks the submit button, the page shows a loading icon until the video is fully uploaded, and then the user is directed to the front page of NuTube, prominently displaying their new video as the top recommended video.

## Video Likes and Dislikes

Another feature of NuTube is the ability for users to like and dislike videos.

![alt text](https://github.com/mwmadsen67/NuTube/blob/master/app/assets/images/VideoShow.png "Text 4")

On each video's page, the total number of likes and dislikes is displayed on the bottom right of the video, allowing users to see the popularity, or notoriety of the selected video within the NuTube community. Logged in users can each like or dislike a video once to give their vote on a video.

## Upcoming Features

Stay tuned as NuTube's creator is actively working on improving the site with the following features:

* Recommended Videos on Video show page
* Video Search
* Displayed Number of Video Plays
* User Channels
