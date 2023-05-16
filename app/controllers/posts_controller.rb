class PostsController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: :index

    def index
        render json: Profile.find(1).posts, status: :ok
    end
end
