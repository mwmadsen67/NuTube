Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :index, :update, :destroy] do
      get "search", on: :collection
      resources :likes, only: [:create, :destroy]
      resources :dislikes, only: [:create, :destroy]
      resources :comments, only: [:index, :create, :destroy]
    end
  end
  
end
