class PostsController < ApplicationController

    wrap_parameters format: []
    skip_before_action :authorized, only: :index

    def index
        render json: Profile.find(1).posts, status: :ok
    end


    def create
        post = Post.create!(post_params)
        render json: post, status: :created
    end

    private

    def post_params
        params.permit(:profile_id, :image, :content)
    end
end
