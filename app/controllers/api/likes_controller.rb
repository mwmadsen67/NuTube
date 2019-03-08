class Api::LikesController < ApplicationController
  before_action :require_login

  def create
    like = Like.new(like_params)
    like.user_id = current_user.id
    like.video_id = params[:video_id]
    if like.save == false
      render json: like, status: :unprocessable_entity
    end
  end

  def destroy
    like = Like.find(params[:id])
    if current_user.id == like.user_id
      like.destroy
    end
  end

  def like_params
    params.permit(:user_id, :video_id)
  end

end
