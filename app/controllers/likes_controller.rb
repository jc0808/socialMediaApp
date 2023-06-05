class LikesController < ApplicationController

    wrap_parameters format: []

    # skip_before_action :authorized, only: [:index]

    # def index
    #     render json: Like.all , status: :ok
    # end

    def create
        like = Like.create!(like_params)
        render json: like, status: :created
    end


    def destroy
        Post.find(params[:id]).likes.find_by(profile_id: session[:user_id]).destroy
         head :no_content
        
    end


    private

    def like_params
        params.permit(:post_id, :profile_id)
    end
end
