Rails.application.routes.draw do
  
  # action cable server

  mount ActionCable.server => "/cable"

  resources :messages
  resources :chats
  resources :comments, only: [:create]
  resources :dislikes, only: [:create, :destroy]
  resources :posts, only: [:index, :create]
  resources :likes, only: [:create, :destroy]
  resources :followers, only: [:create, :destroy]
  resources :profiles, only: [:index, :show, :update]
  resources :users, only: [:create, :update]
  get "/profileFPosts/:id", to: 'profile_followers_posts#show'
  get "/auth", to: "authentications#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
