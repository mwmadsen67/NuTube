class Api::SessionsController < ApplicationController

  def create
    user = User.find_by_credentials(params[:user][:email],params[:user][:password])
    if user
      login!(user)
      redirect_to api_user_url(user)
    else
      render json: 'invalid credentials', status: 401
    end
  end

  def destroy
    if !current_user
      render json: 'Not found', status: 404
    else
      logout!
      render json: {}
    end
  end

end
