class ApplicationController < ActionController::Base

  helper_method :logged_in?, :require_login
  attr_reader :current_user

  def login!(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout!
    session[:session_token] = nil
    current_user.reset_session_token! if logged_in?
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def require_login
    redirect_to new_session_url if !logged_in?
  end

end
