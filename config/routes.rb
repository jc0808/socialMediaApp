Rails.application.routes.draw do
  
  # resources :comments
  # resources :dislikes
  resources :posts, only: [:index]
  # resources :likes
  # resources :followers, only: [:index]
  resources :profiles, only: [:index, :show]
  resources :users, only: [:index]
  get "/profileFPosts/:id", to: 'profile_followers_posts#show'
  get "/auth", to: "authentications#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

end
