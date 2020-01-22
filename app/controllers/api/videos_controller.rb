class Api::VideosController < ApplicationController
  before_action :require_login, only: [:new, :create, :edit, :update, :destroy]

  def create
    @video = Video.new(video_params)
    @video.video_attach.attach(params[:video][:video_attach])
    @video.image.attach(params[:video][:image])
    if @video.save!
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def index
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def update
    @video = current_user.videos.find(params[:id])
    if @video.update_attributes(video_params)
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def destroy
    video = Video.find(params[:id])
    if current_user.id == video.user_id
      video.destroy
    end
  end

  def video_params
    params.require(:video).permit(:title, :length, :user_id, :description, :video_attach, :image)
  end

end
