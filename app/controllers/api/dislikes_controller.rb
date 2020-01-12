class Api::DislikesController < ApplicationController
  before_action :require_login

  def create
    dislike = Dislike.new(dislike_params)
    dislike.user_id = current_user.id
    dislike.video_id = params[:video_id]
    if dislike.save
      render json: dislike
    else
      render json: dislike, status: :unprocessable_entity
    end
  end

  def destroy
    dislike = Dislike.find(params[:id])
    if current_user.id == dislike.user_id
      dislike.destroy
    end
  end

  def dislike_params
    params.permit(:user_id, :video_id)
  end
end
