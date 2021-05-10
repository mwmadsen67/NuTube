import React from 'react';
import Header from '../header';
import { withRouter } from 'react-router';
import CommentsContainer from '../comments/comments_container';
import VideoIndexContainer from '../videos/video_index_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class VideoShow extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currLike: props.likes.id,
      currDislike: props.dislikes.id,
      numLikes: 0,
      numDislikes: 0,
      comments: {}
    };

    this.videoEdit = this.videoEdit.bind(this);
    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  handleLike(){  
    if (this.state.currLike) {
      this.props.deleteLike(this.props.video.id, this.state.currLike);
      this.setState({ 
        currLike: false, 
        numLikes: (this.state.numLikes - 1) 
      });
    } else if (this.state.currDislike) {
      this.props.deleteDislike(this.props.video.id, this.state.currDislike);
      this.props.createLike(this.props.video.id)
        .then(res => {
          this.setState({ 
            currDislike: false, 
            currLike: res.like.id,
            numDislikes: (this.state.numDislikes - 1),
            numLikes: (this.state.numLikes + 1)
          })});
    } else {
      this.props.createLike(this.props.video.id)
        .then(res => this.setState({
          currDislike: false,
          currLike: res.like.id,
          numLikes: (this.state.numLikes + 1)
        }));
    }
  }

  handleDislike(){
    if (this.state.currDislike) {
      this.props.deleteDislike(this.props.video.id, this.state.currDislike);
      this.setState({
        currDislike: false,
        numDislikes: (this.state.numDislikes - 1)
      });
    } else if (this.state.currLike) {
      this.props.deleteLike(this.props.video.id, this.state.currLike);
      this.props.createDislike(this.props.video.id)
        .then(res => this.setState({
          currDislike: res.dislike.id,
          currLike: false,
          numDislikes: (this.state.numDislikes + 1),
          numLikes: (this.state.numLikes - 1)
        }));
    } else {
      this.props.createDislike(this.props.video.id)
        .then(res => this.setState({
          currDislike: res.dislike.id,
          currLike: false,
          numDislikes: (this.state.numDislikes + 1)
        }));
    }
  }

  videoEdit(){
    this.props.history.push(`/${this.props.videoId}/edit`);    
  }

  componentDidMount() {
    this.props.requestVideo(this.props.videoId)
      .then(res => this.setState({
        currLike: res.payload.likes.id,
        currDislike: res.payload.dislikes.id,
        numLikes: res.payload.video.numLikes,
        numDislikes: res.payload.video.numDislikes,
        comments: res.payload.comments
      }));
  }

  componentDidUpdate(prevProps) {
    if (prevProps.videoId !== this.props.videoId) {
      this.props.requestVideo(this.props.videoId)
        .then(res => this.setState({
          currLike: res.payload.likes.id,
          currDislike: res.payload.dislikes.id,
          numLikes: res.payload.video.numLikes,
          numDislikes: res.payload.video.numDislikes,
          comments: res.payload.comments
        }));
    }
  }
  
  render (){
    
    const video = this.props.video;
    if (video === undefined) {
      return null;
    }
    const editBtn = ((this.props.currentUser) && (this.props.currentUser.id === video.userId)) ? (
      <button className="show-video-edit" onClick={this.videoEdit}>Edit Video</button>
    ) : (
      <div></div>
    );

    return(
      <div className='show-video-page'>
        <Header />
        <div className='show-left-video'>
          <div className="show-top-spacer"></div>
          <div className='show-video'>
            <div className="show-left-spacer"></div>
              <div className="show-video-area">
                <video key={video.videoUrl} width="100%" height="auto" autoplay controls>
                  <source src={video.videoUrl} type="video/mp4"></source>
                </video>
                &nbsp;
                <h1>{video.title}</h1>
                &nbsp;
                <div className="likes">
                  <div className="temp-plays"></div>
                  <button className="like-btn" onClick={this.handleLike}>
                    <FontAwesomeIcon icon="thumbs-up" size="lg" className="thumb" color="rgb(150, 150, 150)" />
                    <h3>{this.state.numLikes}</h3>
                  </button>
                  &nbsp;
                  <button className="like-btn" onClick={this.handleDislike}>
                  <FontAwesomeIcon icon="thumbs-down" size="lg" className="thumb" color="rgb(150, 150, 150)" />
                    <h3>{this.state.numDislikes}</h3>
                  </button>
                </div>
                &nbsp;
                <div className="show-video-user-container">
                  <div className="show-video-user">
                    <div className="show-video-user-info">
                      <button className="show-video-user-btn">
                        {video.username[0].toUpperCase()}
                      </button>
                      <div className="show-video-user-spacer"></div>
                      <div className="show-video-user-info2">
                        <h3>{video.username}</h3>
                        <h4>Published on {video.createdAt}</h4>
                      </div>
                    </div>
                    {editBtn}
                  </div>
                  &nbsp;
                  <h3>{video.description}</h3>
                </div>
                <CommentsContainer videoId={video.id}/>
              </div>
            <VideoIndexContainer indexType="side" />
          </div>
        </div>
      </div>
    );

  }
}

export default withRouter(VideoShow);